// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

if (!process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
  throw new Error('Missing SendGrid API key')
}
if (!process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL) {
  throw new Error('Missing SendGrid FROM email')
}
if (!process.env.NEXT_PUBLIC_EMAIL_RECIPIENT) {
  throw new Error('Missing email recipient')
}

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, email, description, price, tags } = req.body

  try {
    const result = await sgMail.send({
      to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
      from: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as any,
      subject: `W: ${tags.join(', ')} $: ${price} Client: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Description: ${description}
        Price: ${price}
        Tags: ${tags.join(', ')}
      `,
      html: `
        <h1>${description}</h1>
        <h1>${name}</h1>
        <h1 style={background-color: #000; text-decoration: none;}>${email}</h1>
        <h4>${price}</h4>
        <h4>${tags.join(', ')}</h4>
      `,
    })

    console.log('Result:', result)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: 'Error sending email', error: error.message })
    } else {
      res.status(500).json({ message: 'Error sending email' })
    }
  }
}
