import { notFound } from "next/navigation";
import { getClient } from "@/data/clients";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return { title: `About ${client.leadAttorney} | ${client.firmName}` };
}

export default async function AboutPage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  return (
    <>
      <style>{`
        .page-hero { background:var(--navy); padding:80px 0 64px; position:relative; overflow:hidden; }
        .page-hero::before { content:'★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★'; position:absolute; inset:0; font-size:11px; letter-spacing:18px; line-height:2.4; color:rgba(255,255,255,0.03); word-break:break-all; overflow:hidden; padding:20px; }
        .page-hero-inner { position:relative; z-index:1; }
        .ph-eyebrow { font-size:10px; font-weight:700; letter-spacing:0.28em; text-transform:uppercase; color:var(--gold-light); margin-bottom:16px; }
        .ph-title { font-family:'Playfair Display',serif; font-size:clamp(36px,5vw,64px); font-weight:900; color:#fff; line-height:1.05; }
        .ph-title em { font-style:italic; color:var(--gold-light); }
        .ph-sub { font-size:18px; font-weight:300; color:rgba(255,255,255,0.55); margin-top:16px; max-width:560px; }

        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; padding:100px 0; }
        .about-photo { width:100%; aspect-ratio:3/4; object-fit:cover; object-position:top; }
        .about-content h2 { font-family:'Playfair Display',serif; font-size:clamp(24px,3vw,36px); font-weight:700; color:var(--navy); margin-bottom:20px; }
        .about-content p { font-size:15px; line-height:1.9; color:var(--ink-mid); font-weight:300; margin-bottom:20px; }
        .credentials-block { background:var(--paper); border-left:3px solid var(--gold); padding:32px; margin:36px 0; }
        .credentials-block h3 { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--navy); margin-bottom:16px; }
        .cred-list { list-style:none; display:flex; flex-direction:column; gap:10px; }
        .cred-list li { display:flex; align-items:center; gap:10px; font-size:14px; color:var(--ink-mid); }
        .cred-list li::before { content:'★'; color:var(--gold); font-size:10px; flex-shrink:0; }

        .stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(11,31,58,0.08); margin:64px 0; border:1px solid rgba(11,31,58,0.08); }
        .stat-box { background:var(--cream); padding:40px 24px; text-align:center; }
        .stat-num { font-family:'Playfair Display',serif; font-size:48px; font-weight:900; color:var(--navy); line-height:1; }
        .stat-label { font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-top:8px; }

        @media (max-width:768px) {
          .about-grid { grid-template-columns:1fr; gap:40px; }
          .stats-row { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="page-hero">
        <div className="wrap page-hero-inner">
          <div className="ph-eyebrow">About the Attorney</div>
          <h1 className="ph-title">
            Meet <em>{client.leadAttorney}</em>
          </h1>
          <p className="ph-sub">
            {client.yearsExp} years of immigration law. {client.casesWon}+ families protected.
            One firm. {client.city}, {client.state}.
          </p>
        </div>
      </div>

      <div className="flag-stripe" />

      <section style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="about-grid">
            <div>
              <img
                className="about-photo"
                src={client.photoAttorney1}
                alt={client.leadAttorney}
              />
            </div>
            <div className="about-content">
              <h2>A Career Built on One Conviction</h2>
              <p>
                {client.leadAttorney} founded {client.firmName} in {client.foundedYear} with a single
                purpose: to give immigrants in {client.city} the kind of legal representation that
                changes outcomes — and lives. In {client.yearsExp} years of practice, they have
                built a reputation for precise legal work, genuine compassion, and relentless
                advocacy in some of the most complex immigration cases in {client.state}.
              </p>
              <p style={{ fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontSize: "20px", borderLeft: "3px solid var(--gold)", paddingLeft: "20px", color: "var(--ink)" }}>
                "{client.attorneyPersonalStatement}"
              </p>
              <p>
                Before founding {client.firmName}, {client.leadAttorneyFirst} worked at major
                immigration practices across the country, handling everything from family visa
                petitions to emergency deportation defenses. They brought that experience back to
                {" "}{client.city} to serve the community they call home.
              </p>

              <div className="credentials-block">
                <h3>Education & Credentials</h3>
                <ul className="cred-list">
                  <li>Juris Doctor — Accredited U.S. Law School</li>
                  <li>Admitted to the {client.state} State Bar</li>
                  <li>American Immigration Lawyers Association (AILA) Member</li>
                  <li>Member, {client.state} State Bar Immigration Section</li>
                  <li>Fluent in {client.languages}</li>
                  <li>{client.casesWon}+ cases successfully handled</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-num">{client.yearsExp}</div>
              <div className="stat-label">Years of Practice</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{client.casesWon.toLocaleString()}+</div>
              <div className="stat-label">Cases Won</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{client.reviewCount}</div>
              <div className="stat-label">5★ Google Reviews</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
