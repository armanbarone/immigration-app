import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, firstName, lastName, phone, email, caseType, country, message } = body;

    const fullName = `${firstName} ${lastName}`.trim();
    const timestamp = new Date().toISOString();

    // ── GHL WEBHOOK ──────────────────────────────────────────────────────────
    // In GHL: Automations → Triggers → Inbound Webhook → copy the webhook URL
    // Paste it as NEXT_PUBLIC_GHL_WEBHOOK_URL in Vercel env vars
    // GHL will receive the contact, add them to your pipeline, and you can
    // build any follow-up automation inside GHL from there (email, SMS, etc.)
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      const ghlPayload = {
        // GHL standard contact fields
        firstName,
        lastName,
        name: fullName,
        phone,
        email,

        // GHL custom fields / tags
        tags: [`immigration-lead`, slug, caseType].filter(Boolean),
        source: "Website Consultation Form",

        // Custom fields (map these in GHL to your custom field keys)
        customField: {
          case_type: caseType,
          country_of_origin: country || "",
          firm_slug: slug,
          message: message || "",
          submitted_at: timestamp,
        },
      };

      const ghlRes = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ghlPayload),
      });

      if (!ghlRes.ok) {
        console.error("GHL webhook failed:", ghlRes.status, await ghlRes.text());
      } else {
        console.log("GHL webhook fired successfully for:", fullName);
      }
    } else {
      // No webhook configured — just log (dev mode)
      console.log("No GHL_WEBHOOK_URL set. Lead data:", {
        firm: slug, name: fullName, phone, email, caseType, country, message, timestamp,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
