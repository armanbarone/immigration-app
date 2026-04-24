import { notFound } from "next/navigation";
import { getClient } from "@/data/clients";
import { practiceAreas } from "@/data/practiceAreas";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

export default async function PracticeAreasPage({ params }: Props) {
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

        .pa-list { padding:80px 0; display:flex; flex-direction:column; gap:0; }
        .pa-item { display:grid; grid-template-columns:1fr 2fr; gap:0; border-bottom:1px solid rgba(11,31,58,0.1); text-decoration:none; color:inherit; transition:background 0.2s; }
        .pa-item:nth-child(even) { background:var(--paper); }
        .pa-item:hover { background:var(--gold-pale); }
        .pa-left { padding:60px var(--pad) 60px 0; border-right:1px solid rgba(11,31,58,0.08); }
        .pa-num { font-family:'Playfair Display',serif; font-size:64px; font-weight:900; color:rgba(11,31,58,0.06); line-height:1; margin-bottom:8px; }
        .pa-tag { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:10px; }
        .pa-name { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:var(--navy); line-height:1.15; }
        .pa-right { padding:60px 0 60px var(--pad); display:flex; flex-direction:column; justify-content:center; }
        .pa-desc { font-size:16px; line-height:1.85; color:var(--ink-mid); font-weight:300; margin-bottom:20px; }
        .pa-cta { font-size:12px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:var(--gold); display:inline-flex; align-items:center; gap:6px; }

        @media (max-width:768px) {
          .pa-item { grid-template-columns:1fr; }
          .pa-left { padding:40px 0 20px; border-right:none; border-bottom:1px solid rgba(11,31,58,0.06); }
          .pa-right { padding:20px 0 40px; }
        }
      `}</style>

      <div className="page-hero">
        <div className="wrap page-hero-inner">
          <div className="ph-eyebrow">What We Handle</div>
          <h1 className="ph-title"><em>Immigration</em> Practice Areas</h1>
          <p className="ph-sub">Every immigration situation is different. {client.leadAttorneyFirst} has handled them all.</p>
        </div>
      </div>

      <div className="flag-stripe" />

      <section style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="pa-list">
            {practiceAreas.map((p, i) => (
              <Link key={p.id} href={`/${slug}/practice-areas/${p.id}`} className="pa-item">
                <div className="pa-left">
                  <div className="pa-num">0{i + 1}</div>
                  <div className="pa-tag">{p.tag}</div>
                  <div className="pa-name">{p.name}</div>
                </div>
                <div className="pa-right">
                  <p className="pa-desc">{p.shortDesc}</p>
                  <span className="pa-cta">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
