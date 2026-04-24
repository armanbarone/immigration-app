import { notFound } from "next/navigation";
import { getClient } from "@/data/clients";
import { articles } from "@/data/articles";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

export default async function BlogPage({ params }: Props) {
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

        .blog-layout { display:grid; grid-template-columns:2fr 1fr; gap:64px; padding:80px 0; }
        .blog-grid { display:flex; flex-direction:column; gap:32px; }
        .blog-card { background:var(--white); border:1px solid rgba(11,31,58,0.08); padding:36px; transition:box-shadow 0.3s,transform 0.3s; text-decoration:none; display:block; color:inherit; }
        .blog-card:hover { box-shadow:0 12px 40px rgba(11,31,58,0.1); transform:translateY(-3px); }
        .bc-tag { display:inline-block; background:var(--gold-pale); border:1px solid rgba(184,145,42,0.2); font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); padding:4px 10px; margin-bottom:14px; }
        .bc-title { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:var(--navy); line-height:1.25; margin-bottom:12px; }
        .bc-excerpt { font-size:14px; line-height:1.75; color:var(--ink-mid); font-weight:300; margin-bottom:20px; }
        .bc-meta { display:flex; align-items:center; gap:16px; font-size:11px; color:var(--ink-light); font-weight:500; }
        .bc-read-more { font-size:12px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); margin-top:16px; display:inline-block; }

        .blog-sidebar {}
        .sidebar-card { background:var(--navy); padding:32px; margin-bottom:24px; }
        .sc-title { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:#fff; margin-bottom:8px; }
        .sc-sub { font-size:13px; color:rgba(255,255,255,0.5); font-weight:300; margin-bottom:24px; line-height:1.6; }
        .sc-btn { display:block; width:100%; background:var(--gold); color:#fff; font-family:'Barlow',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:14px; border:none; cursor:pointer; text-align:center; text-decoration:none; transition:background 0.2s; }
        .sc-btn:hover { background:var(--gold-light); }
        .topics-card { background:var(--paper); border:1px solid rgba(11,31,58,0.08); padding:28px; }
        .topics-title { font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--navy); margin-bottom:16px; }
        .topic-tag { display:inline-block; background:var(--cream); border:1px solid rgba(11,31,58,0.12); font-size:12px; font-weight:600; color:var(--ink-mid); padding:6px 12px; margin:4px; }

        @media (max-width:1024px) { .blog-layout { grid-template-columns:1fr; } }
      `}</style>

      <div className="page-hero">
        <div className="wrap page-hero-inner">
          <div className="ph-eyebrow">Resources & Insights</div>
          <h1 className="ph-title"><em>Immigration</em> Resources</h1>
          <p className="ph-sub">
            Plain-language guides from {client.leadAttorneyFirst} on navigating U.S. immigration law in {new Date().getFullYear()}.
          </p>
        </div>
      </div>

      <div className="flag-stripe" />

      <section style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="blog-layout">
            <div className="blog-grid">
              {articles.map((a) => (
                <Link key={a.id} href={`/${slug}/blog/${a.id}`} className="blog-card">
                  <div className="bc-tag">{a.tag}</div>
                  <div className="bc-title">{a.title}</div>
                  <p className="bc-excerpt">{a.excerpt}</p>
                  <div className="bc-meta">
                    <span>📅 {a.date}</span>
                    <span>⏱ {a.read} read</span>
                  </div>
                  <div className="bc-read-more">Read Full Article →</div>
                </Link>
              ))}
            </div>

            <div className="blog-sidebar">
              <div className="sidebar-card">
                <div className="sc-title">Free Consultation</div>
                <p className="sc-sub">Questions about your situation? {client.leadAttorneyFirst} offers a free, no-obligation case review.</p>
                <Link href={`/${slug}/contact`} className="sc-btn">Book Now →</Link>
              </div>
              <div className="topics-card">
                <div className="topics-title">Browse by Topic</div>
                {["Green Cards","H-1B Visas","DACA","Citizenship","Asylum","Deportation Defense","Family Visas","Work Authorization"].map(t => (
                  <span key={t} className="topic-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
