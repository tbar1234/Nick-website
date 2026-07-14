import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Pezzente Services <website@pezzenteservices.com>",
      to: "pezzenteservices@gmail.com",
      replyTo: email,
      subject: `New Estimate Request from ${name}`,
      html: `
        <h2>New Estimate Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>

        <h3>Message</h3>
        <p>${message || "No message provided."}</p>
      `,
    });

    console.log("Resend data:", data);
    console.log("Resend error:", error);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error("Server error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}