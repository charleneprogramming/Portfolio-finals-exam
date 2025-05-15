import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  // Validate the input
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  // Here you can handle the message, e.g., save it to a database or send an email
  console.log("Message received:", { name, email, message });

  // Respond with success
  return NextResponse.json({ success: "Message sent successfully!" });
}