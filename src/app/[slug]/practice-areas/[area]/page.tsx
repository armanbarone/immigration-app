import { notFound } from "next/navigation";
import { getClient, getAllSlugs } from "@/data/clients";
import { getPracticeArea, practiceAreas } from "@/data/practiceAreas";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string; area: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const paths = [];
  for (const slug of slugs) {
    for (const pa of practiceAreas) {
      paths.push({ slug, area: pa.id });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const pa = getPracticeArea(area);
  if (!pa) return {};
  return { title: `${pa.name} | Immigration Law`, description: pa.shortDesc };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug, area } = await params;
  const client = getClient(slug);
  const pa = getPracticeArea(area);
  if (!client || !pa) notFound();

  const otherAreas = practiceAreas.filter(p => p.id !== area);

  return (
    <>
      <style>{`
        .pa-hero { background:var(--navy); padding:80px 0 64px; position:relative; overflow:hidden; }
        .pa-hero::before { content:'★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★'; position:absolute; inset:0; font-size:11px; letter-spacing:18px; line-height:2.4; color:rgba(255,255,255,0.03); word-break:break-all; overflow:hidden; padding:20px; }
        .pa-hero-inner { position:relative; z-index:1; max-width:800px; }
        .ah-back { display:inline-flex; align-items:center; gap:8px; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:rgba(255,255,255,0.4); text-decoration:none; margin-bottom:24px; transition:color 0.2s; }
        .ah-back:hover { color:var(--gold-light); }
        .ah-tag { display:inline-block; background:rgba(184,145,42,0.2); border:1px solid rgba(184,145,42,0.3); font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:var(--gold-light); padding:5px 12px; margin-bottom:20px; }
        .ah-title { font-family:'Playfair Display',serif; font-size:clamp(32px,5vw,60px); font-weight:900; color:#fff; line-height:1.05; margin-bottom:20px; }
        .ah-desc { font-size:18px; font-weight:300; color:rgba(255,255,255,0.6); line-height:1.7; max-width:640px; }

        .pa-layout { display:grid; grid-template-columns:1fr 320px; gap:64px; padding:80px 0 100px; align-items:start; }

        .pa-main {}
        .pa-section { margin-bottom:48px; }
        .pa-section h2 { font-family:'Playfair Display',serif; font-size:26px; font-weight:700; color:var(--navy); margin-bottom:14px; padding-bottom:12px; border-bottom:2px solid var(--gold-pale); }
        .pa-section p { font-size:16px; line-height:1.9; color:var(--ink-mid); font-weight:300; }

        .services-block { background:var(--paper); border-left:3px solid var(--gold); padding:32px; margin:48px 0; }
        .sb-title { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--navy); margin-bottom:20px; }
        .sb-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .sb-item { display:flex; align-items:center; gap:10px; font-size:13px; color:var(--ink-mid); font-weight:400; }
        .sb-item::before { content:''; width:6px; height:6px; background:var(--gold); border-radius:50%; flex-shrink:0; }

        .faq-block { margin-top:56px; }
        .faq-title { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:var(--navy); margin-bottom:32px; }
        .faq-item { border-bottom:1px solid rgba(11,31,58,0.1); padding:24px 0; }
        .faq-item:first-of-type { border-top:1px solid rgba(11,31,58,0.1); }
        .faq-q { font-family:'Playfair Display',serif; font-size:18px; font-weight:700; color:var(--navy); margin-bottom:12px; }
        .faq-a { font-size:15px; line-height:1.8; color:var(--ink-mid); font-weight:300; }

        .pa-sidebar { position:sticky; top:96px; }
        .sidebar-cta { background:var(--navy); padding:32px; margin-bottom:24px; position:relative; }
        .sidebar-cta::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--gold),var(--gold-light)); }
        .sc-title { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:#fff; margin-bottom:8px; }
        .sc-sub { font-size:13px; color:rgba(255,255,255,0.5); font-weight:300; margin-bottom:20px; line-height:1.6; }
        .sc-phone { display:flex; align-items:center; gap:8px; color:var(--gold-light); font-size:16px; font-weight:700; text-decoration:none; margin-bottom:14px; }
        .sc-btn { display:block; width:100%; background:var(--gold); color:#fff; font-family:'Barlow',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:14px; text-align:center; text-decoration:none; transition:background 0.2s; border:none; cursor:pointer; }
        .sc-btn:hover { background:var(--gold-light); }

        .sidebar-attorney { background:var(--paper); border:1px solid rgba(11,31,58,0.08); padding:24px; margin-bottom:24px; }
        .sa-label { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:12px; }
        .sa-photo { width:56px; height:56px; border-radius:50%; object-fit:cover; object-position:top; margin-bottom:10px; }
        .sa-name { font-family:'Playfair Display',serif; font-size:16px; font-weight:700; color:var(--navy); margin-bottom:3px; }
        .sa-cred { font-size:11px; color:var(--ink-light); }

        .sidebar-other { background:var(--white); border:1px solid rgba(11,31,58,0.08); padding:24px; }
        .so-title { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--navy); margin-bottom:16px; }
        .so-link { display:block; text-decoration:none; padding:10px 0; border-bottom:1px solid rgba(11,31,58,0.06); font-size:14px; font-weight:600; color:var(--ink-mid); transition:color 0.2s; }
        .so-link:last-child { border-bottom:none; }
        .so-link:hover { color:var(--gold); }

        @media (max-width:1024px) { .pa-layout { grid-template-columns:1fr; } .pa-sidebar { position:static; } .sb-grid { grid-template-columns:1fr; } }
      `}</style>

      <div className="pa-hero">
        <div className="wrap">
          <div className="pa-hero-inner">
            <Link href={`/${slug}/practice-areas`} className="ah-back">← All Practice Areas</Link>
            <div className="ah-tag">{pa.tag}</div>
            <h1 className="ah-title">{pa.name}</h1>
            <p className="ah-desc">{pa.heroDesc}</p>
          </div>
        </div>
      </div>

      <div className="flag-stripe" />

      <section style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="pa-layout">
            <div className="pa-main">
              {pa.sections.map((s, i) => (
                <div key={i} className="pa-section">
                  <h2>{s.heading}</h2>
                  <p>{s.body}</p>
                </div>
              ))}

              <div className="services-block">
                <div className="sb-title">What We Handle in {pa.name}</div>
                <div className="sb-grid">
                  {pa.services.map((s, i) => (
                    <div key={i} className="sb-item">{s}</div>
                  ))}
                </div>
              </div>

              <div className="faq-block">
                <div className="faq-title">Frequently Asked Questions</div>
                {pa.faq.map((f, i) => (
                  <div key={i} className="faq-item">
                    <div className="faq-q">{f.q}</div>
                    <p className="faq-a">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pa-sidebar">
              <div className="sidebar-cta">
                <div className="sc-title">Free Consultation</div>
                <p className="sc-sub">Speak with {client.leadAttorneyFirst} about your {pa.name.toLowerCase()} case. No obligation.</p>
                <a href={`tel:${client.phone}`} className="sc-phone">📞 {client.phone}</a>
                <Link href={`/${slug}/contact`} className="sc-btn">Book Online →</Link>
              </div>

              <div className="sidebar-attorney">
                <div className="sa-label">Your Attorney</div>
                <img src={client.photoAttorney1} alt={client.leadAttorney} className="sa-photo" />
                <div className="sa-name">{client.leadAttorney}</div>
                <div className="sa-cred">{client.state} Bar · AILA Member · {client.yearsExp} Years Experience</div>
              </div>

              <div className="sidebar-other">
                <div className="so-title">Other Practice Areas</div>
                {otherAreas.map(p => (
                  <Link key={p.id} href={`/${slug}/practice-areas/${p.id}`} className="so-link">
                    {p.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
