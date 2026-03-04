import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ConsultationPayload {
  name: string
  phone: string
  email: string
  city: string
  notes: string
  projectType: string
  material: string
  style: string
  description: string
  generatedImage?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ConsultationPayload = await request.json()

    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Build image attachment if we have a generated visualization
    const attachments: nodemailer.SendMailOptions['attachments'] = []
    if (data.generatedImage) {
      attachments.push({
        filename: 'visualization.png',
        content: Buffer.from(data.generatedImage, 'base64'),
        cid: 'visualization',
      })
    }

    const imageRow = data.generatedImage
      ? `<div style="margin:20px 0;text-align:center;">
          <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 12px;">AI Visualization</p>
          <img src="cid:visualization" alt="Project Visualization" style="max-width:100%;border-radius:8px;border:1px solid #e5e7eb;" />
        </div>`
      : ''

    // ── Email to business ──────────────────────────────────
    await transporter.sendMail({
      from: `"Sky's the Limit Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: data.email,
      subject: `Visualizer Lead — ${data.name} (${data.projectType})`,
      html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a2744;padding:24px 28px;border-radius:8px 8px 0 0;">
            <h1 style="color:#ffffff;font-size:20px;margin:0;">New Visualizer Consultation</h1>
            <p style="color:#c4935a;font-size:13px;margin:6px 0 0;">via AI Project Visualizer</p>
          </div>
          <div style="background:#ffffff;padding:24px 28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">Name</td>
                <td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">Email</td>
                <td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;">
                  <a href="mailto:${data.email}" style="color:#c4935a;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">Phone</td>
                <td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;">
                  <a href="tel:${data.phone}" style="color:#c4935a;">${data.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">City</td>
                <td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;">${data.city || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">Project Type</td>
                <td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.projectType}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">Material</td>
                <td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;">${data.material || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">Style</td>
                <td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;">${data.style || 'Not specified'}</td>
              </tr>
            </table>

            <div style="margin-top:20px;padding:16px;background:#f8f5f0;border-radius:6px;">
              <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 8px;">Client's Vision</p>
              <p style="color:#1a2744;font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${data.description}</p>
            </div>

            ${data.notes ? `
            <div style="margin-top:16px;padding:16px;background:#f8f5f0;border-radius:6px;">
              <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 8px;">Additional Notes</p>
              <p style="color:#1a2744;font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${data.notes}</p>
            </div>
            ` : ''}

            ${imageRow}
          </div>
        </div>
      `,
      attachments,
    })

    // ── Confirmation email to customer ─────────────────────
    await transporter.sendMail({
      from: `"Sky's the Limit" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Your project visualization — Sky's the Limit`,
      html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a2744;padding:24px 28px;border-radius:8px 8px 0 0;">
            <h1 style="color:#ffffff;font-size:20px;margin:0;">Thanks for your interest, ${data.name.split(' ')[0]}!</h1>
          </div>
          <div style="background:#ffffff;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
              We've received your project visualization and consultation request. Our team will review your vision and reach out within <strong>one business day</strong> to discuss next steps.
            </p>
            <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
              For urgent inquiries, call or text us directly:
            </p>
            <p style="margin:0 0 24px;">
              <a href="tel:+19312229770" style="color:#c4935a;font-size:18px;font-weight:600;text-decoration:none;">931-222-9770</a>
            </p>
            <p style="color:#9ca3af;font-size:12px;margin:0;">
              Sky's the Limit Customs & Contracting · Nashville & Clarksville, TN
            </p>
          </div>
        </div>
      `,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Consultation form error:', error)
    return NextResponse.json(
      { error: 'Failed to send consultation request. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
