export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email' },
        { status: 400 }
      );
    }

    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // İleride email gönderme logic'i eklenebilir
    // Örneğin: sendGrid, mailgun, aws-ses vb.

    return Response.json(
      { 
        success: true, 
        message: 'Form başarıyla gönderildi' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
