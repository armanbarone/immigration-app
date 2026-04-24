import Link from "next/link";
import { ImmigrationClient } from "@/types/client";

interface Props { client: ImmigrationClient; onOpenPopup: () => void; }

const practices = [
  { id: "family-immigration", name: "Family Immigration", desc: "Spousal and fiancé visas, green card petitions, family preference categories. We reunite families." },
  { id: "employment-visas", name: "Employment Visas", desc: "H-1B, L-1, O-1, TN, E-2 — for professionals, executives, and the employers who need them." },
  { id: "citizenship", name: "Citizenship & Naturalization", desc: "Interview preparation, application filing, and full support through the naturalization ceremony." },
  { id: "asylum", name: "Asylum & Refugee Status", desc: "Thorough asylum claims built on evidence and legal precision, protecting those who have fled persecution." },
  { id: "deportation-defense", name: "Deportation Defense", desc: "Aggressive court representation when the stakes are highest. Every legal option pursued, every time." },
  { id: "daca", name: "DACA & Dreamers", desc: "DACA renewals, advance parole, and immigration pathways. We stay current on policy so you don't have to." },
];

export default function PracticeAreas({ client, onOpenPopup }: Props) {
  return (
    <>
      <style>{`
        #practice { background:var(--paper); padding:100px 0; }
        .practice-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(11,31,58,0.08); border:1px solid rgba(11,31,58,0.08); }
        .practice-card { background:var(--cream); padding:40px 32px; cursor:pointer; transition:all 0.3s ease; position:relative; overflow:hidden; text-decoration:none; display:block; color:inherit; }
        .practice-card::before { content:''; position:absolute; bottom:0; left:0; right:0; height:0; background:var(--navy); transition:height 0.35s ease; z-index:0; }
        .practice-card:hover::before { height:100%; }
        .practice-card > * { position:relative; z-index:1; }
        .pc-num { font-family:'Playfair Display',serif; font-size:11px; font-weight:700; letter-spacing:0.2em; color:var(--gold); margin-bottom:14px; transition:color 0.3s; }
        .practice-card:hover .pc-num { color:rgba(212,170,74,0.6); }
        .pc-name { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--navy); margin-bottom:10px; transition:color 0.3s; }
        .practice-card:hover .pc-name { color:#fff; }
        .pc-desc { font-size:14px; line-height:1.7; color:var(--ink-mid); font-weight:300; margin-bottom:18px; transition:color 0.3s; }
        .practice-card:hover .pc-desc { color:rgba(255,255,255,0.6); }
        .pc-link { font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:var(--gold); display:inline-flex; align-items:center; gap:6px; transition:color 0.3s; }
        .practice-card:hover .pc-link { color:var(--gold-light); }
        @media (max-width:1024px) { .practice-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:768px) { .practice-grid { grid-template-columns:1fr; } }
      `}</style>

      <section id="practice" className="star-bg">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="sec-eyebrow">What We Handle</div>
            <h2 className="sec-title">Comprehensive <em>Immigration</em> Services</h2>
            <p className="sec-desc">From family reunification to complex employment visas — every path to legal status deserves a skilled advocate.</p>
          </div>
          <div className="practice-grid reveal">
            {practices.map((p, i) => (
              <Link key={p.id} href={`/${client.slug}/practice-areas/${p.id}`} className="practice-card">
                <div className="pc-num">0{i + 1}</div>
                <div className="pc-name">{p.name}</div>
                <p className="pc-desc">{p.desc}</p>
                <span className="pc-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
