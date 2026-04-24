import { ImmigrationClient } from "@/types/client";

interface Props { client: ImmigrationClient; onOpenPopup: () => void; }

export default function WhyUs({ client, onOpenPopup }: Props) {
  return (
    <>
      <style>{`
        #why { background:var(--navy); padding:100px 0; }
        .why-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .why-eyebrow { font-size:10px; font-weight:700; letter-spacing:0.28em; text-transform:uppercase; color:var(--gold-light); margin-bottom:16px; display:flex; align-items:center; gap:10px; }
        .why-eyebrow::before { content:''; width:24px; height:1px; background:var(--gold-light); }
        .why-title { font-family:'Playfair Display',serif; font-size:clamp(30px,4vw,46px); font-weight:700; color:#fff; line-height:1.15; margin-bottom:40px; }
        .why-title em { font-style:italic; color:var(--gold-light); }
        .why-points { display:flex; flex-direction:column; gap:0; }
        .why-point { display:flex; gap:20px; padding:24px 0; border-bottom:1px solid rgba(255,255,255,0.07); transition:padding-left 0.3s; }
        .why-point:first-child { padding-top:0; }
        .why-point:last-child { border-bottom:none; padding-bottom:0; }
        .why-point:hover { padding-left:8px; }
        .why-n { font-family:'Playfair Display',serif; font-size:36px; font-weight:900; color:rgba(184,145,42,0.2); line-height:1; flex-shrink:0; width:32px; margin-top:-4px; transition:color 0.3s; }
        .why-point:hover .why-n { color:var(--gold-light); }
        .why-pt-title { font-family:'Playfair Display',serif; font-size:18px; font-weight:700; color:#fff; margin-bottom:6px; }
        .why-pt-desc { font-size:14px; line-height:1.7; color:rgba(255,255,255,0.45); font-weight:300; }
        .testimonial-feature { background:rgba(255,255,255,0.04); border:1px solid rgba(184,145,42,0.2); padding:44px 40px; position:relative; }
        .testimonial-feature::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--gold),var(--gold-light)); }
        .tf-stars { color:var(--gold-light); font-size:14px; letter-spacing:2px; margin-bottom:20px; }
        .tf-quote { font-family:'Source Serif 4',serif; font-size:21px; font-weight:300; font-style:italic; color:rgba(255,255,255,0.88); line-height:1.6; margin-bottom:28px; }
        .tf-open { font-family:'Playfair Display',serif; font-size:64px; color:rgba(184,145,42,0.2); line-height:0.6; margin-bottom:12px; display:block; }
        .tf-author { display:flex; align-items:center; gap:14px; }
        .tf-avatar { width:52px; height:52px; border-radius:50%; object-fit:cover; border:2px solid rgba(184,145,42,0.3); background:var(--navy-mid); display:block; flex-shrink:0; }
        .tf-name { font-size:15px; font-weight:700; color:#fff; margin-bottom:3px; }
        .tf-case { font-size:12px; color:var(--gold-light); font-weight:300; }
        @media (max-width:1024px) { .why-grid { grid-template-columns:1fr; gap:48px; } }
      `}</style>

      <section id="why">
        <div className="wrap">
          <div className="why-grid">
            <div className="reveal">
              <div className="why-eyebrow">Why {client.firmName}</div>
              <h2 className="why-title">Experience You Can <em>Trust.</em></h2>
              <div className="why-points">
                {[
                  ["You Always Speak Directly to Your Attorney", "No paralegals answering your calls. Your attorney knows your case and is always reachable."],
                  ["We Speak Your Language — Literally", `Our multilingual team serves clients in ${client.languages}. Nothing gets lost in translation.`],
                  ["Transparent Flat-Fee Pricing", "Clear fees from day one. No surprise billing, no hourly anxiety."],
                  [`Deep Local Knowledge in ${client.city}`, `We know the immigration courts, officers, and judicial tendencies in ${client.state}. Local expertise wins cases.`],
                ].map(([title, desc], i) => (
                  <div key={i} className="why-point">
                    <div className="why-n">0{i + 1}</div>
                    <div>
                      <div className="why-pt-title">{title}</div>
                      <p className="why-pt-desc">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="testimonial-feature">
                <div className="tf-stars">★★★★★</div>
                <span className="tf-open">"</span>
                <p className="tf-quote">
                  After being denied twice by other attorneys, {client.firmName} took our case and secured
                  our green cards within 14 months. They treated us like family through every step.
                  I cannot express our gratitude.
                </p>
                <div className="tf-author">
                  <img src={client.photoClient1} alt="Client" className="tf-avatar"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
                  <div>
                    <div className="tf-name">Sofía M. & Family</div>
                    <div className="tf-case">Family Green Card · From Mexico</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
