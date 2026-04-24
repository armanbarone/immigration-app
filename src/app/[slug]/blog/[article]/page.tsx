import { notFound } from "next/navigation";
import { getClient, getAllSlugs } from "@/data/clients";
import { getArticle, articles } from "@/data/articles";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string; article: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const paths = [];
  for (const slug of slugs) {
    for (const article of articles) {
      paths.push({ slug, article: article.id });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article: articleId } = await params;
  const article = getArticle(articleId);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug, article: articleId } = await params;
  const client = getClient(slug);
  const article = getArticle(articleId);
  if (!client || !article) notFound();

  const otherArticles = articles.filter(a => a.id !== articleId).slice(0, 3);

  return (
    <>
      <style>{`
        .article-hero { background:var(--navy); padding:80px 0 64px; position:relative; overflow:hidden; }
        .article-hero::before { content:'★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★'; position:absolute; inset:0; font-size:11px; letter-spacing:18px; line-height:2.4; color:rgba(255,255,255,0.03); word-break:break-all; overflow:hidden; padding:20px; }
        .article-hero-inner { position:relative; z-index:1; max-width:760px; }
        .ah-back { display:inline-flex; align-items:center; gap:8px; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:rgba(255,255,255,0.4); text-decoration:none; margin-bottom:24px; transition:color 0.2s; }
        .ah-back:hover { color:var(--gold-light); }
        .ah-tag { display:inline-block; background:rgba(184,145,42,0.2); border:1px solid rgba(184,145,42,0.3); font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:var(--gold-light); padding:5px 12px; margin-bottom:20px; }
        .ah-title { font-family:'Playfair Display',serif; font-size:clamp(28px,4vw,52px); font-weight:900; color:#fff; line-height:1.1; margin-bottom:20px; }
        .ah-meta { display:flex; gap:20px; font-size:12px; color:rgba(255,255,255,0.4); font-weight:500; }

        .article-layout { display:grid; grid-template-columns:1fr 320px; gap:64px; padding:72px 0 100px; }

        .article-body { max-width:720px; }
        .article-body p { font-size:17px; line-height:1.9; color:var(--ink-mid); font-weight:300; margin-bottom:24px; }
        .article-body h2 { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:var(--navy); margin:48px 0 16px; padding-top:8px; border-top:2px solid var(--gold-pale); }
        .article-body ul, .article-body ol { margin:0 0 24px 24px; }
        .article-body li { font-size:16px; line-height:1.8; color:var(--ink-mid); font-weight:300; margin-bottom:8px; }
        .article-body strong { font-weight:600; color:var(--ink); }

        .article-cta { background:var(--navy); padding:36px; margin-top:56px; position:relative; }
        .article-cta::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--gold),var(--gold-light)); }
        .acta-title { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:#fff; margin-bottom:8px; }
        .acta-sub { font-size:14px; color:rgba(255,255,255,0.5); font-weight:300; margin-bottom:20px; line-height:1.6; }
        .acta-btn { display:inline-flex; align-items:center; gap:8px; background:var(--gold); color:#fff; font-family:'Barlow',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:14px 24px; text-decoration:none; transition:background 0.2s; }
        .acta-btn:hover { background:var(--gold-light); }

        .article-sidebar { }
        .sidebar-attorney { background:var(--paper); border:1px solid rgba(11,31,58,0.08); padding:28px; margin-bottom:24px; }
        .sa-label { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:12px; }
        .sa-photo { width:64px; height:64px; border-radius:50%; object-fit:cover; object-position:top; margin-bottom:12px; }
        .sa-name { font-family:'Playfair Display',serif; font-size:18px; font-weight:700; color:var(--navy); margin-bottom:4px; }
        .sa-title { font-size:12px; color:var(--ink-light); margin-bottom:14px; }
        .sa-quote { font-family:'Source Serif 4',serif; font-size:14px; font-style:italic; color:var(--ink-mid); line-height:1.7; margin-bottom:20px; border-left:2px solid var(--gold); padding-left:12px; }
        .sa-btn { display:block; width:100%; background:var(--navy); color:#fff; font-family:'Barlow',sans-serif; font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:13px; border:none; cursor:pointer; text-align:center; text-decoration:none; transition:background 0.2s; }
        .sa-btn:hover { background:var(--navy-mid); }

        .sidebar-more { }
        .sm-title { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--navy); margin-bottom:16px; }
        .sm-article { display:block; text-decoration:none; padding:16px 0; border-bottom:1px solid rgba(11,31,58,0.08); }
        .sm-article:last-child { border-bottom:none; }
        .sm-tag { font-size:9px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:var(--gold); margin-bottom:5px; }
        .sm-artitle { font-size:14px; font-weight:600; color:var(--navy); line-height:1.35; transition:color 0.2s; }
        .sm-article:hover .sm-artitle { color:var(--gold); }

        @media (max-width:1024px) { .article-layout { grid-template-columns:1fr; } .article-sidebar { order:-1; } }
      `}</style>

      <div className="article-hero">
        <div className="wrap">
          <div className="article-hero-inner">
            <Link href={`/${slug}/blog`} className="ah-back">← Back to Resources</Link>
            <div className="ah-tag">{article.tag}</div>
            <h1 className="ah-title">{article.title}</h1>
            <div className="ah-meta">
              <span>📅 {article.date}</span>
              <span>⏱ {article.read} read</span>
              <span>By {client.leadAttorney}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flag-stripe" />

      <section style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="article-layout">
            <div>
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <div className="article-cta">
                <div className="acta-title">Have Questions About Your Case?</div>
                <p className="acta-sub">
                  {client.leadAttorneyFirst} offers a free, no-obligation consultation.
                  Everything you share is fully confidential.
                </p>
                <Link href={`/${slug}/contact`} className="acta-btn">
                  Book Free Consultation →
                </Link>
              </div>
            </div>

            <div className="article-sidebar">
              <div className="sidebar-attorney">
                <div className="sa-label">Written By</div>
                <img src={client.photoAttorney1} alt={client.leadAttorney} className="sa-photo" />
                <div className="sa-name">{client.leadAttorney}</div>
                <div className="sa-title">Immigration Attorney · {client.state} Bar · AILA Member</div>
                <p className="sa-quote">"{client.attorneyPersonalStatement}"</p>
                <Link href={`/${slug}/contact`} className="sa-btn">Free Consultation →</Link>
              </div>

              {otherArticles.length > 0 && (
                <div className="sidebar-more">
                  <div className="sm-title">More Resources</div>
                  {otherArticles.map(a => (
                    <Link key={a.id} href={`/${slug}/blog/${a.id}`} className="sm-article">
                      <div className="sm-tag">{a.tag}</div>
                      <div className="sm-artitle">{a.title}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
