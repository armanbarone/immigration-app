import { ImmigrationClient } from "@/types/client";

export default function TrustBar({ client }: { client: ImmigrationClient }) {
  const items = [
    { label: "AILA Member · Verified", highlight: "★" },
    { label: `Google Rating · ${client.reviewCount} Reviews`, highlight: "5.0" },
    { label: `${client.state} Bar Admitted`, highlight: "★" },
    { label: "Response Guarantee", highlight: "60-Second" },
    { label: "Free Consultations", highlight: "★" },
    { label: "Languages Spoken", highlight: client.languages },
    { label: "Flat-Fee Pricing", highlight: "★" },
    { label: "Cases Won", highlight: `${client.casesWon}+` },
  ];

  return (
    <>
      <style>{`
        #trust-bar { background:var(--navy); padding:0; overflow:hidden; }
        .trust-scroll-inner { display:flex; gap:0; animation:marquee 22s linear infinite; width:max-content; }
        .trust-item { display:flex; align-items:center; gap:10px; padding:14px 32px; border-right:1px solid rgba(255,255,255,0.08); white-space:nowrap; font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.6); }
        .trust-item span { color:var(--gold-light); }
      `}</style>
      <div id="trust-bar">
        <div className="trust-scroll-inner">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="trust-item">
              <span>{item.highlight}</span> {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
