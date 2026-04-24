import Link from "next/link";
import { ImmigrationClient } from "@/types/client";

interface FooterProps { client: ImmigrationClient; }

export default function Footer({ client }: FooterProps) {
  const base = `/${client.slug}`;
  const year = new Date().getFullYear();

  const practiceLinks = [
    { label: "Family Immigration", href: `${base}/practice-areas/family-immigration` },
    { label: "Employment Visas", href: `${base}/practice-areas/employment-visas` },
    { label: "Citizenship", href: `${base}/practice-areas/citizenship` },
    { label: "Asylum & Refugees", href: `${base}/practice-areas/asylum` },
    { label: "Deportation Defense", href: `${base}/practice-areas/deportation-defense` },
    { label: "DACA & Dreamers", href: `${base}/practice-areas/daca` },
  ];

  const firmLinks = [
    { label: `About ${client.leadAttorneyFirst}`, href: `${base}/about` },
    { label: "Practice Areas", href: `${base}/practice-areas` },
    { label: "Client Results", href: `${base}/about` },
    { label: "Immigration Blog", href: `${base}/blog` },
    { label: "Resources", href: `${base}/blog` },
  ];

  const contactLinks = [
    { label: "Free Consultation", href: `${base}/contact` },
    { label: "Call Us", href: `tel:${client.phone}` },
    { label: "Office Directions", href: `${base}/contact` },
    { label: "Office Hours", href: `${base}/contact` },
  ];

  return (
    <>
      <style>{`
        footer { background: #080F1A; padding: 72px 0 0; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 56px; margin-bottom: 56px; }
        .foot-logo-name { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .foot-logo-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; display: block; }
        .foot-desc { font-size: 13px; line-height: 1.75; color: rgba(255,255,255,0.3); font-weight: 300; margin-bottom: 24px; max-width: 300px; }
        .foot-contact { display: flex; flex-direction: column; gap: 10px; }
        .foot-c { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 300; }
        .foot-c svg { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
        .foot-col-title { font-size: 10px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; margin-bottom: 20px; }
        .foot-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .foot-links a { font-size: 13px; color: rgba(255,255,255,0.35); text-decoration: none; font-weight: 300; transition: color 0.2s; }
        .foot-links a:hover { color: var(--gold-light); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.06); padding: 20px 0; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
        .footer-bottom p { font-size: 11px; color: rgba(255,255,255,0.18); }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; } }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; gap: 32px; } .footer-bottom { flex-direction: column; text-align: center; gap: 8px; } }
      `}</style>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="foot-logo-name">{client.firmName}</div>
              <span className="foot-logo-tag">Immigration Law · {client.city}, {client.state}</span>
              <p className="foot-desc">
                Serving immigrants and their families across {client.state} with dedication,
                expertise, and compassion since {client.foundedYear}.
              </p>
              <div className="foot-contact">
                <div className="foot-c">
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {client.address}, {client.city}, {client.state} {client.zip}
                </div>
                <div className="foot-c">
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <a href={`tel:${client.phone}`} style={{color:"inherit",textDecoration:"none"}}>{client.phone}</a>
                </div>
                <div className="foot-c">
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  {client.email}
                </div>
              </div>
            </div>

            <div>
              <div className="foot-col-title">Practice Areas</div>
              <ul className="foot-links">
                {practiceLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              </ul>
            </div>

            <div>
              <div className="foot-col-title">The Firm</div>
              <ul className="foot-links">
                {firmLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              </ul>
            </div>

            <div>
              <div className="foot-col-title">Contact</div>
              <ul className="foot-links">
                {contactLinks.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {year} {client.firmName}. All rights reserved.</p>
            <p>Attorney Advertising · Prior results do not guarantee a similar outcome · {client.state} Bar</p>
          </div>
        </div>
      </footer>
    </>
  );
}
