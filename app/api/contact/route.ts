import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, service, message } = body;

        // Basic Server-Side Validation
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Log to console (simulating email sending)
        console.log("Contact Form Submission:", {
            firstName,
            lastName,
            email,
            service,
            message,
            timestamp: new Date().toISOString(),
        });

        // In a real app, you would use an email provider here
        // const recipient = process.env.CONTACT_FORM_RECIPIENT;
        // await sendEmail({ to: recipient, ... });

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
