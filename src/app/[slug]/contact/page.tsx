import { notFound } from "next/navigation";
import { getClient } from "@/data/clients";
import ContactForm from "./ContactForm";

interface Props { params: Promise<{ slug: string }> }

export default async function ContactPage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  const mapQuery = encodeURIComponent(`${client.address}, ${client.city}, ${client.state} ${client.zip}`);

  return (
    <>
      <style>{`
        .page-hero { background:var(--navy); padding:80px 0 64px; position:relative; overflow:hidden; }
        .page-hero::before { content:'★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★'; position:absolute; inset:0; font-size:11px; letter-spacing:18px; line-height:2.4; color:rgba(255,255,255,0.03); word-break:break-all; overflow:hidden; padding:20px; }
        .page-hero-inner { position:relative; z-index:1; }
        .ph-eyebrow { font-size:10px; font-weight:700; letter-spacing:0.28em; text-transform:uppercase; color:var(--gold-light); margin-bottom:16px; }
        .ph-title { font-family:'Playfair Display',serif; font-size:clamp(36px,5vw,64px); font-weight:900; color:#fff; line-height:1.05; }
        .ph-title em { font-style:italic; color:var(--gold-light); }

        .contact-layout { display:grid; grid-template-columns:1fr 1fr; gap:80px; padding:100px 0; }
        .contact-info h2 { font-family:'Playfair Display',serif; font-size:32px; font-weight:700; color:var(--navy); margin-bottom:8px; }
        .contact-info p { font-size:15px; line-height:1.8; color:var(--ink-mid); font-weight:300; margin-bottom:40px; }

        .info-card { display:flex; flex-direction:column; gap:24px; margin-bottom:40px; }
        .info-row { display:flex; gap:16px; align-items:flex-start; }
        .info-icon { width:44px; height:44px; background:var(--gold-pale); border:1px solid rgba(184,145,42,0.2); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .info-icon svg { color:var(--gold); }
        .info-label { font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold); margin-bottom:4px; }
        .info-value { font-size:16px; font-weight:500; color:var(--navy); }
        .info-value a { color:var(--navy); text-decoration:none; }
        .info-value a:hover { color:var(--gold); }

        .hours-block { background:var(--paper); border-left:3px solid var(--gold); padding:24px; }
        .hours-title { font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:14px; }
        .hours-row { display:flex; justify-content:space-between; font-size:14px; color:var(--ink-mid); padding:6px 0; border-bottom:1px solid rgba(0,0,0,0.05); }
        .hours-row:last-child { border-bottom:none; }

        .map-embed { width:100%; height:320px; border:none; margin-top:40px; }

        @media (max-width:768px) { .contact-layout { grid-template-columns:1fr; gap:48px; } }
      `}</style>

      <div className="page-hero">
        <div className="wrap page-hero-inner">
          <div className="ph-eyebrow">Get in Touch</div>
          <h1 className="ph-title">
            Start with a <em>Free</em> Consultation
          </h1>
        </div>
      </div>

      <div className="flag-stripe" />

      <section style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>We're Here to Help</h2>
              <p>
                Your first consultation with {client.leadAttorneyFirst} is completely free. We will
                review your situation, explain your options, and give you an honest assessment —
                with no obligation.
              </p>

              <div className="info-card">
                <div className="info-row">
                  <div className="info-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-value"><a href={`tel:${client.phone}`}>{client.phone}</a></div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value"><a href={`mailto:${client.email}`}>{client.email}</a></div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="info-label">Office</div>
                    <div className="info-value">{client.address}<br/>{client.city}, {client.state} {client.zip}</div>
                  </div>
                </div>
              </div>

              <div className="hours-block">
                <div className="hours-title">Office Hours</div>
                {[
                  ["Monday – Friday", "8:30 AM – 6:00 PM"],
                  ["Saturday", "10:00 AM – 2:00 PM"],
                  ["Sunday", "By Appointment"],
                  ["Emergency Line", "Available 24/7"],
                ].map(([day, hours]) => (
                  <div key={day} className="hours-row">
                    <span style={{fontWeight: 500}}>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>

              <iframe
                className="map-embed"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                title={`${client.firmName} office location`}
              />
            </div>

            <div>
              <ContactForm client={client} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
