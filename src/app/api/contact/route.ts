// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Call your gateway
    const gatewayUrl = process.env.NODE_ENV === 'production'
      ? 'https://gateway.api0.ai/api/contact'
      : 'http://0.0.0.0:5009/api/contact';

    console.log(`Forwarding to gateway: ${gatewayUrl}`);

    // Add source identification
    const gatewayPayload = {
      ...body,
      source: 'solanize.ai',
      website: 'Solanize.ai',
      timestamp: new Date().toISOString(),
      // Optional: add more context
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer')
    };

    const gatewayResponse = await fetch(gatewayUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gatewayPayload),
    });

    if (!gatewayResponse.ok) {
      const errorText = await gatewayResponse.text();
      console.error('Gateway error:', errorText);
      return NextResponse.json(
        { success: false, message: 'Failed to send email via gateway' },
        { status: 500 }
      );
    }

    // Log successful submission
    console.log('Contact form submission successful:', {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      subject: body.subject,
      company: body.company || 'Not provided'
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
