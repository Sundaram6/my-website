import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Honeypot Check: If the hidden _honeypot field is filled, it's a bot.
    // We return a fake 200 OK to silently trick the spam bot.
    if (data._honeypot) {
      return NextResponse.json({ success: true, message: "Message sent!" });
    }
    
    // We proxy the request from the Next.js server to bypass browser CORS and AdBlockers.
    const response = await fetch("https://formsubmit.co/ajax/sundramsharma6@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Spoof origin so FormSubmit accepts the server-to-server request
        'Origin': 'https://sundramsharma.com', 
        'Referer': 'https://sundramsharma.com/'
      },
      body: JSON.stringify(data),
    });

    // FormSubmit AJAX endpoint always returns JSON
    let result;
    try {
      result = await response.json();
    } catch {
      result = { success: "false", message: "Failed to parse FormSubmit response." };
    }
    
    if (response.ok && result.success !== "false" && result.success !== false) {
      return NextResponse.json({ success: true, message: result.message || "Message sent!" });
    } else {
      // FormSubmit requires activation the first time.
      return NextResponse.json({ success: false, message: result.message || "Failed to send." }, { status: 400 });
    }
  } catch (error) {
    console.error("API Route Contact Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
