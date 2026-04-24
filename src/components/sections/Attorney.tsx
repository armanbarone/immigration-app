import { ImmigrationClient } from "@/types/client";

interface Props { client: ImmigrationClient; onOpenPopup: () => void; }

export default function Attorney({ client, onOpenPopup }: Props) {
  return (
    <>
      <style>{`
        #attorney { background:var(--cream); padding:100px 0 0; }
        .attorney-inner { max-width:var(--container); margin:0 auto; padding:0 var(--pad); display:grid; grid-template-columns:480px 1fr; gap:80px; align-items:end; }
        .attorney-photo-frame { position:relative; }
        .attorney-photo-frame::before { content:''; position:absolute; top:-16px; left:-16px; width:64px; height:64px; border-top:3px solid var(--gold); border-left:3px solid var(--gold); z-index:1; }
        .attorney-photo-frame::after { content:''; position:absolute; bottom:-16px; right:-16px; width:64px; height:64px; border-bottom:3px solid var(--gold); border-right:3px solid var(--gold); z-index:1; }
        .attorney-photo-wrap { width:100%; aspect-ratio:3/4; overflow:hidden; background:var(--navy-mid); position:relative; }
        .attorney-photo { width:100%; height:100%; object-fit:cover; object-position:top center; display:block; transition:transform 0.6s ease; }
        .attorney-photo-wrap:hover .attorney-photo { transform:scale(1.03); }
        .attorney-seal { position:absolute; bottom:28px; left:-28px; width:96px; height:96px; background:var(--gold); border-radius:50%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; box-shadow:0 8px 32px rgba(184,145,42,0.4); z-index:2; border:3px solid #fff; }
        .seal-num { font-family:'Playfair Display',serif; font-size:26px; font-weight:900; color:#fff; line-height:1; }
        .seal-label { font-size:8px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.85); margin-top:2px; }
        .attorney-content-col { padding-bottom:60px; }
        .attorney-eyebrow { font-size:10px; font-weight:700; letter-spacing:0.28em; text-transform:uppercase; color:var(--gold); margin-bottom:14px; display:flex; align-items:center; gap:10px; }
        .attorney-eyebrow::before { content:''; width:28px; height:1px; background:var(--gold); }
        .attorney-name { font-family:'Playfair Display',serif; font-size:clamp(36px,4vw,54px); font-weight:900; color:var(--navy); line-height:1.05; margin-bottom:6px; }
        .attorney-title-line { font-size:14px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--ink-light); margin-bottom:28px; }
        .attorney-quote { font-family:'Source Serif 4',serif; font-size:clamp(20px,2.5vw,26px); font-weight:400; font-style:italic; line-height:1.55; color:var(--ink); margin-bottom:32px; padding-left:24px; border-left:3px solid var(--gold); }
        .attorney-bio { font-size:15px; line-height:1.8; color:var(--ink-mid); font-weight:300; margin-bottom:36px; }
        .attorney-credentials { display:flex; flex-direction:column; gap:10px; margin-bottom:36px; }
        .cred-item { display:flex; align-items:center; gap:12px; font-size:13px; color:var(--ink-mid); font-weight:400; }
        .cred-dot { width:6px; height:6px; background:var(--gold); border-radius:50%; flex-shrink:0; }
        @media (max-width:1024px) { .attorney-inner { grid-template-columns:380px 1fr; gap:56px; } }
        @media (max-width:768px) {
          .attorney-inner { grid-template-columns:1fr; gap:0; }
          .attorney-photo-col { margin:0 calc(-1 * var(--pad)); }
          .attorney-photo-wrap { aspect-ratio:4/3; }
          .attorney-photo-frame::before, .attorney-photo-frame::after { display:none; }
          .attorney-seal { left:16px; bottom:16px; width:80px; height:80px; }
          .seal-num { font-size:22px; }
          .attorney-content-col { padding:36px 0 40px; }
        }
      `}</style>

      <section id="attorney">
        <div className="attorney-inner">
          <div className="attorney-photo-col reveal">
            <div className="attorney-photo-frame">
              <div className="attorney-photo-wrap">
                <img
                  className="attorney-photo"
                  src={client.photoAttorney1}
                  alt={`${client.leadAttorney} — Immigration Attorney ${client.city}`}
                />
              </div>
              <div className="attorney-seal">
                <div className="seal-num">{client.yearsExp}</div>
                <div className="seal-label">Years<br/>Serving</div>
              </div>
            </div>
          </div>

          <div className="attorney-content-col reveal">
            <div className="attorney-eyebrow">Managing Partner</div>
            <h2 className="attorney-name">{client.leadAttorney}</h2>
            <div className="attorney-title-line">
              Immigration Attorney · {client.state} Bar · AILA Member
            </div>
            <blockquote className="attorney-quote">
              "{client.attorneyPersonalStatement}"
            </blockquote>
            <p className="attorney-bio">
              {client.leadAttorney} has dedicated their career to one purpose: protecting the rights
              of immigrants and their families in {client.city} and across {client.state}. With{" "}
              {client.yearsExp} years of experience navigating the full spectrum of U.S. immigration
              law, they bring precision, compassion, and relentless advocacy to every case.
            </p>
            <div className="attorney-credentials">
              <div className="cred-item"><div className="cred-dot"/>{`Admitted to the ${client.state} State Bar`}</div>
              <div className="cred-item"><div className="cred-dot"/>American Immigration Lawyers Association (AILA) Member</div>
              <div className="cred-item"><div className="cred-dot"/>Fluent in {client.languages}</div>
              <div className="cred-item"><div className="cred-dot"/>{client.casesWon}+ successful cases across all immigration categories</div>
            </div>
            <button className="btn-navy" onClick={onOpenPopup}>
              Schedule a Consultation with {client.leadAttorneyFirst} →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
