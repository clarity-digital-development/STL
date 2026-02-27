import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  email: string
  phone: string
  service: string
  message: string
  _website: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactPayload = await request.json()

    // Honeypot check — bots fill hidden fields
    if (data._website) {
      return NextResponse.json({ success: true })
    }

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    const serviceLine = data.service
      ? `<tr><td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">Service</td><td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;font-weight:600;">${data.service}</td></tr>`
      : ''

    // ── Email to business ──────────────────────────────────
    await transporter.sendMail({
      from: `"Sky's the Limit Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: data.email,
      subject: `New Estimate Request — ${data.name}`,
      html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a2744;padding:24px 28px;border-radius:8px 8px 0 0;">
            <h1 style="color:#ffffff;font-size:20px;margin:0;">New Estimate Request</h1>
            <p style="color:#c4935a;font-size:13px;margin:6px 0 0;">via skysthelimittn.com contact form</p>
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
                  <a href="mailto:${data.email}" style="color:#c4935a;text-decoration:none;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 12px;color:#6b7280;font-size:14px;border-bottom:1px solid #e5e7eb;">Phone</td>
                <td style="padding:8px 12px;color:#1a2744;font-size:14px;border-bottom:1px solid #e5e7eb;">
                  <a href="tel:${data.phone}" style="color:#c4935a;text-decoration:none;">${data.phone}</a>
                </td>
              </tr>
              ${serviceLine}
            </table>
            <div style="margin-top:20px;padding:16px;background:#f8f5f0;border-radius:6px;">
              <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 8px;">Project Details</p>
              <p style="color:#1a2744;font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${data.message}</p>
            </div>
          </div>
        </div>
      `,
    })

    // ── Confirmation email to customer ─────────────────────
    await transporter.sendMail({
      from: `"Sky's the Limit" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `We received your request — Sky's the Limit`,
      html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a2744;padding:24px 28px;border-radius:8px 8px 0 0;">
            <h1 style="color:#ffffff;font-size:20px;margin:0;">Thanks for reaching out, ${data.name.split(' ')[0]}!</h1>
          </div>
          <div style="background:#ffffff;padding:28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
              We've received your estimate request and will get back to you within <strong>one business day</strong>.
            </p>
            <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
              If your project is urgent, feel free to call or text us directly:
            </p>
            <p style="margin:0 0 24px;">
              <a href="tel:+19312229770" style="color:#c4935a;font-size:18px;font-weight:600;text-decoration:none;">931-222-9770</a>
            </p>
            <div style="padding:16px;background:#f8f5f0;border-radius:6px;margin-bottom:20px;">
              <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 8px;">What you told us</p>
              ${data.service ? `<p style="color:#1a2744;font-size:14px;margin:0 0 4px;"><strong>Service:</strong> ${data.service}</p>` : ''}
              <p style="color:#1a2744;font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${data.message}</p>
            </div>
            <p style="color:#9ca3af;font-size:12px;margin:0;">
              Sky's the Limit Customs & Contracting · Nashville & Clarksville, TN
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
