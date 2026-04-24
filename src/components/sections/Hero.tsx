"use client";
import { ImmigrationClient } from "@/types/client";

interface HeroProps {
  client: ImmigrationClient;
  onOpenPopup: () => void;
}

export default function Hero({ client, onOpenPopup }: HeroProps) {
  return (
    <>
      <style>{`
        #hero { position:relative; height:100svh; min-height:560px; display:flex; align-items:center; overflow:hidden; }
        .hero-video { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; }
        .hero-dim { position:absolute; inset:0; background:linear-gradient(160deg,rgba(11,31,58,0.72) 0%,rgba(11,31,58,0.55) 50%,rgba(11,31,58,0.68) 100%); }
        .hero-stars { position:absolute; inset:0; background-image:radial-gradient(circle,rgba(255,255,255,0.12) 1px,transparent 1px); background-size:60px 60px; opacity:0.4; pointer-events:none; }
        .hero-content { position:relative; z-index:2; width:100%; }
        .hero-content .wrap { display:flex; flex-direction:column; align-items:flex-start; gap:0; }
        .hero-eyebrow { display:inline-flex; align-items:center; gap:10px; font-size:10px; font-weight:700; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold-light); margin-bottom:20px; animation:fadeUp 0.8s ease 0.2s both; }
        .hero-eyebrow::before { content:'★'; font-size:8px; }
        .hero-eyebrow::after { content:'★'; font-size:8px; }
        .hero-headline { font-family:'Playfair Display',serif; font-size:clamp(42px,7vw,80px); font-weight:900; line-height:1.0; color:#fff; margin-bottom:8px; animation:fadeUp 0.8s ease 0.35s both; max-width:760px; }
        .hero-headline em { font-style:italic; color:var(--gold-light); }
        .hero-subhead { font-family:'Source Serif 4',serif; font-size:clamp(17px,2.5vw,22px); font-weight:300; font-style:italic; color:rgba(255,255,255,0.72); margin-bottom:36px; animation:fadeUp 0.8s ease 0.48s both; max-width:560px; line-height:1.55; }
        .hero-actions { display:flex; gap:14px; flex-wrap:wrap; animation:fadeUp 0.8s ease 0.6s both; margin-bottom:52px; }
        .btn-hero-primary { display:inline-flex; align-items:center; gap:10px; background:var(--gold); color:#fff; font-family:'Barlow',sans-serif; font-size:13px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:16px 32px; border:none; cursor:pointer; transition:background 0.2s,transform 0.15s; text-decoration:none; }
        .btn-hero-primary:hover { background:var(--gold-light); transform:translateY(-1px); }
        .btn-hero-secondary { display:inline-flex; align-items:center; gap:10px; background:transparent; color:#fff; font-family:'Barlow',sans-serif; font-size:13px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; padding:16px 32px; border:1px solid rgba(255,255,255,0.4); cursor:pointer; transition:border-color 0.2s; text-decoration:none; }
        .btn-hero-secondary:hover { border-color:rgba(255,255,255,0.8); }
        .hero-trust-row { display:flex; gap:28px; flex-wrap:wrap; animation:fadeUp 0.8s ease 0.72s both; }
        .hero-trust-item { display:flex; align-items:center; gap:8px; font-size:12px; font-weight:500; color:rgba(255,255,255,0.65); letter-spacing:0.04em; }
        .hero-trust-item strong { color:rgba(255,255,255,0.92); font-weight:700; }
        .hero-scroll { position:absolute; bottom:28px; left:50%; transform:translateX(-50%); z-index:2; display:flex; flex-direction:column; align-items:center; gap:8px; color:rgba(255,255,255,0.45); font-size:10px; letter-spacing:0.2em; text-transform:uppercase; animation:fadeUp 1s ease 1.2s both; }
        .scroll-line { width:1px; height:48px; background:linear-gradient(180deg,transparent,rgba(255,255,255,0.4)); animation:scrollPulse 2s ease-in-out infinite; }
        @media (max-width:480px) {
          .hero-trust-row { flex-direction:column; gap:12px; }
          .hero-actions { flex-direction:column; }
          .btn-hero-primary, .btn-hero-secondary { justify-content:center; }
        }
      `}</style>

      <section id="hero">
        <video
          className="hero-video"
          src="https://assets.cdn.filesafe.space/BdTJ01Xs0apORbIrBlPB/media/69e79220da11eeea68d87d98.mp4"
          autoPlay muted loop playsInline preload="auto"
        />
        <div className="hero-dim" />
        <div className="hero-stars" />

        <div className="hero-content">
          <div className="wrap">
            <div className="hero-eyebrow">{client.city}, {client.state} · Immigration Law</div>

            <h1 className="hero-headline">
              Your Dream.<br />
              Your <em>Right.</em><br />
              Your Future.
            </h1>

            <p className="hero-subhead">
              "Every person who comes to this country carries a story worth fighting for.
              I am here to fight for yours."
            </p>

            <div className="hero-actions">
              <button className="btn-hero-primary" onClick={onOpenPopup}>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Book Free Consultation
              </button>
              <a href={`tel:${client.phone}`} className="btn-hero-secondary">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {client.phone}
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="hero-trust-item"><strong>{client.casesWon}+</strong> Cases Won</div>
              <div className="hero-trust-item"><strong>{client.yearsExp} Years</strong> of Experience</div>
              <div className="hero-trust-item"><strong>5.0★</strong> on Google · {client.reviewCount} Reviews</div>
              <div className="hero-trust-item"><strong>60-Second</strong> Response</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
}
