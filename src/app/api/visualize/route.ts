import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'
import { ALL_MATERIALS, STYLES, PROJECT_CONTEXT } from '@/lib/data/visualizer'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

// ── Rate limiting (in-memory, resets on server restart) ──────────
const ipCounts = new Map<string, { count: number; resetAt: number }>()
const MAX_PER_DAY = 10

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = ipCounts.get(ip)

  if (!record || now > record.resetAt) {
    ipCounts.set(ip, { count: 1, resetAt: now + 24 * 60 * 60 * 1000 })
    return true
  }

  if (record.count >= MAX_PER_DAY) return false
  record.count++
  return true
}

// ── Prompt engineering ───────────────────────────────────────────
function buildVisualizationPrompt(
  description: string,
  projectType: string,
  material: string,
  style: string
): string {
  const baseContext = `You are generating a photorealistic architectural visualization for a premium custom contracting company in Tennessee. The image should look like a professional architectural rendering or a real photograph of a completed project. Maintain realistic proportions, natural lighting (golden hour preferred), and accurate material textures.`

  const materialObj = ALL_MATERIALS.find((m) => m.slug === material)
  const styleObj = STYLES.find((s) => s.slug === style)
  const projectText = PROJECT_CONTEXT[projectType] || projectType

  const materialText = materialObj?.description || material
  const styleText = styleObj?.description || style

  return `${baseContext}

Generate a photorealistic image of ${projectText} built with ${materialText}.
The design style is ${styleText}.
The setting is a residential property in Middle Tennessee with mature trees and green landscaping.

Additional details from the client: ${description}

IMPORTANT: Make this look like a real photograph, not a 3D render or illustration.
Use natural lighting, realistic shadows, and accurate material textures.
The craftsmanship should look premium and high-end.
Include surrounding context (yard, house exterior, landscaping) to ground the image in reality.`
}

function buildEditPrompt(description: string, projectType: string): string {
  const projectText = PROJECT_CONTEXT[projectType] || projectType

  return `Transform this photo to show a newly built ${projectText} in the space shown.
Make the edit look completely photorealistic — it should be indistinguishable from a real photograph of a completed construction project.

Maintain the existing house, landscaping, and surroundings exactly as they are.
Only add/modify the ${projectText} as described.

The client's vision: ${description}

IMPORTANT: Preserve the original photo's lighting, perspective, and color temperature.
The new construction should match the scene naturally with correct shadows and reflections.
This is premium custom work — show clean joints, quality materials, and professional finishing.`
}

// ── POST handler ─────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Daily generation limit reached. Please try again tomorrow.' },
        { status: 429 }
      )
    }

    const formData = await request.formData()
    const projectType = formData.get('projectType') as string
    const material = formData.get('material') as string
    const style = formData.get('style') as string
    const description = formData.get('description') as string
    const imageFile = formData.get('image') as File | null

    if (!projectType || !description) {
      return NextResponse.json(
        { error: 'Project type and description are required.' },
        { status: 400 }
      )
    }

    let contents
    if (imageFile) {
      // Image-to-image mode
      const imageBuffer = Buffer.from(await imageFile.arrayBuffer())
      const base64Image = imageBuffer.toString('base64')

      contents = [
        {
          role: 'user' as const,
          parts: [
            {
              inlineData: {
                data: base64Image,
                mimeType: imageFile.type,
              },
            },
            { text: buildEditPrompt(description, projectType) },
          ],
        },
      ]
    } else {
      // Text-to-image mode
      contents = buildVisualizationPrompt(description, projectType, material, style)
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents,
      config: {
        responseModalities: ['image', 'text'],
      },
    })

    // Extract generated image from response
    const candidates = response.candidates
    if (!candidates || candidates.length === 0) {
      return NextResponse.json(
        { error: 'No image was generated. Try adjusting your description.' },
        { status: 422 }
      )
    }

    for (const part of candidates[0].content?.parts || []) {
      if (part.inlineData) {
        return NextResponse.json({
          image: part.inlineData.data,
          mimeType: part.inlineData.mimeType,
        })
      }
    }

    return NextResponse.json(
      { error: 'The AI could not generate an image for this request. Try a different description.' },
      { status: 422 }
    )
  } catch (error) {
    console.error('Visualize API error:', error)

    const message =
      error instanceof Error && error.message.includes('SAFETY')
        ? 'The request was flagged by safety filters. Try adjusting your description.'
        : 'Failed to generate visualization. Please try again.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
