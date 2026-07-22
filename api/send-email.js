export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests for sending emails
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, description } = req.body;

  if (!name || !email || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Resend API key is not configured on the server' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'm.tahaqaisrani@gmail.com',
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1a202c;">
            <h2 style="color: #d97706; margin-top: 0;">New Contact Form Submission</h2>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a></p>
            <p style="margin: 20px 0 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: #f7fafc; padding: 15px; border-radius: 8px; border: 1px solid #edf2f7; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${description}</div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0 20px 0;" />
            <p style="font-size: 11px; color: #a0aec0; margin: 0; text-align: center;">Sent from your portfolio contact form.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(response.status).json({ error: data.message || 'Failed to send email' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
