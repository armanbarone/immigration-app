import { ImmigrationClient } from "@/types/client";

// ── TESTIMONIALS ────────────────────────────────
interface TestiProps { client: ImmigrationClient }

export function Testimonials({ client }: TestiProps) {
  const cards = [
    { tag: "H-1B Approval", name: "Raj K.", origin: "Software Engineer · From India", photo: client.photoClient2, quote: "Approved in premium processing with zero RFEs. My company's operations depend on this visa — handled with absolute precision." },
    { tag: "Deportation Defense Won", name: "Amara T.", origin: "Removal Defense · From Ghana", photo: client.photoClient3, quote: `I was facing deportation and terrified for my children. ${client.leadAttorneyFirst} was brilliant in court and fought relentlessly. I am still home because of this firm.` },
    { tag: "Naturalization", name: "Elena V.", origin: "Citizenship · From Ukraine", photo: client.photoClient4, quote: "I became a U.S. citizen last year and cried through the entire ceremony. The preparation they provided was so thorough I answered every question with confidence." },
  ];

  return (
    <>
      <style>{`
        #testimonials { background:var(--cream); padding:100px 0; }
        .testimonials-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:64px; }
        .testi-card { background:var(--white); border:1px solid rgba(11,31,58,0.08); padding:36px 28px; position:relative; transition:box-shadow 0.3s,transform 0.3s; }
        .testi-card:hover { box-shadow:0 16px 48px rgba(11,31,58,0.1); transform:translateY(-4px); }
        .testi-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:var(--gold); transform:scaleX(0); transition:transform 0.3s; }
        .testi-card:hover::after { transform:scaleX(1); }
        .tc-tag { display:inline-block; background:var(--gold-pale); border:1px solid rgba(184,145,42,0.2); font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); padding:4px 10px; margin-bottom:16px; }
        .tc-stars { color:var(--gold); font-size:12px; letter-spacing:2px; margin-bottom:14px; }
        .tc-text { font-family:'Source Serif 4',serif; font-size:16px; font-weight:300; font-style:italic; color:var(--ink); line-height:1.65; margin-bottom:20px; }
        .tc-author { display:flex; align-items:center; gap:12px; }
        .tc-avatar { width:42px; height:42px; border-radius:50%; object-fit:cover; background:var(--gold-pale); display:block; flex-shrink:0; border:2px solid var(--gold-pale); }
        .tc-name { font-size:13px; font-weight:700; color:var(--navy); margin-bottom:2px; }
        .tc-case { font-size:11px; color:var(--gold); font-weight:500; }
        @media (max-width:1024px) { .testimonials-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:768px) { .testimonials-grid { grid-template-columns:1fr; } }
      `}</style>
      <section id="testimonials">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="sec-eyebrow">Client Stories</div>
            <h2 className="sec-title">Real Families. <em>Real Results.</em></h2>
            <p className="sec-desc">The cases that remind us every day why this work matters.</p>
          </div>
          <div className="testimonials-grid reveal">
            {cards.map((c, i) => (
              <div key={i} className="testi-card">
                <div className="tc-tag">{c.tag}</div>
                <div className="tc-stars">★★★★★</div>
                <p className="tc-text">"{c.quote}"</p>
                <div className="tc-author">
                  <img src={c.photo} alt={c.name} className="tc-avatar"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
                  <div>
                    <div className="tc-name">{c.name}</div>
                    <div className="tc-case">{c.origin}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── PROCESS ─────────────────────────────────────
export function Process() {
  const steps = [
    { n: "1", title: "Free Consultation", desc: "30 minutes with your attorney. Honest case assessment, no pressure, no obligation." },
    { n: "2", title: "Strategy & Engagement", desc: "Personalized legal strategy, flat fee quoted, timeline confirmed. We begin gathering your documentation." },
    { n: "3", title: "Filing & Advocacy", desc: "We prepare petitions with meticulous precision and advocate for you with USCIS or in immigration court." },
    { n: "4", title: "Approval & Beyond", desc: "We celebrate your approval — and remain your trusted counsel for every immigration need that follows." },
  ];
  return (
    <>
      <style>{`
        #process { background:var(--paper); padding:100px 0; }
        .process-steps { display:grid; grid-template-columns:repeat(4,1fr); gap:0; margin-top:64px; position:relative; }
        .process-steps::before { content:''; position:absolute; top:34px; left:calc(12.5% + 24px); right:calc(12.5% + 24px); height:1px; background:linear-gradient(90deg,var(--gold) 0%,rgba(184,145,42,0.15) 100%); }
        .process-step { text-align:center; padding:0 20px; position:relative; }
        .ps-num { width:68px; height:68px; background:#fff; border:2px solid var(--gold); font-family:'Playfair Display',serif; font-size:26px; font-weight:900; color:var(--gold); display:flex; align-items:center; justify-content:center; margin:0 auto 24px; position:relative; z-index:1; transition:all 0.3s; }
        .process-step:hover .ps-num { background:var(--gold); color:#fff; }
        .ps-title { font-family:'Playfair Display',serif; font-size:18px; font-weight:700; color:var(--navy); margin-bottom:10px; }
        .ps-desc { font-size:13px; line-height:1.7; color:var(--ink-mid); font-weight:300; }
        @media (max-width:1024px) { .process-steps { grid-template-columns:repeat(2,1fr); gap:32px; } .process-steps::before { display:none; } }
        @media (max-width:768px) { .process-steps { grid-template-columns:1fr; gap:24px; } }
      `}</style>
      <section id="process" className="star-bg">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="sec-eyebrow">How It Works</div>
            <h2 className="sec-title">Your Path to <em>Legal Status</em></h2>
            <p className="sec-desc">A clear, proven process that has guided thousands of clients from uncertainty to security.</p>
          </div>
          <div className="process-steps reveal">
            {steps.map((s, i) => (
              <div key={i} className="process-step">
                <div className="ps-num">{s.n}</div>
                <div className="ps-title">{s.title}</div>
                <p className="ps-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── CTA BAND ────────────────────────────────────
interface CtaProps { client: ImmigrationClient; onOpenPopup: () => void; }

export function CtaBand({ client, onOpenPopup }: CtaProps) {
  return (
    <>
      <style>{`
        #cta-band { background:var(--navy); padding:80px 0; position:relative; overflow:hidden; }
        #cta-band::before { content:'★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★'; position:absolute; inset:0; font-size:11px; letter-spacing:18px; line-height:2.4; color:rgba(255,255,255,0.03); word-break:break-all; overflow:hidden; padding:20px; }
        .cta-band-inner { position:relative; z-index:1; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; }
        .cta-heading { font-family:'Playfair Display',serif; font-size:clamp(28px,4vw,46px); font-weight:700; color:#fff; line-height:1.15; margin-bottom:8px; }
        .cta-heading em { font-style:italic; color:var(--gold-light); }
        .cta-sub { font-size:16px; font-weight:300; color:rgba(255,255,255,0.55); }
        .cta-actions { display:flex; gap:14px; flex-wrap:wrap; flex-shrink:0; }
        @media (max-width:768px) { .cta-band-inner { flex-direction:column; text-align:center; } .cta-actions { flex-direction:column; width:100%; } .btn-gold, .btn-outline-white { justify-content:center; } }
      `}</style>
      <section id="cta-band">
        <div className="wrap">
          <div className="cta-band-inner">
            <div>
              <h2 className="cta-heading">Ready to Take the <em>First Step?</em></h2>
              <p className="cta-sub">One conversation can change everything. Your free consultation is waiting.</p>
            </div>
            <div className="cta-actions">
              <button className="btn-gold" onClick={onOpenPopup}>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Book Free Consultation
              </button>
              <a href={`tel:${client.phone}`} className="btn-outline-white">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call {client.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
