"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationPopup from "@/components/ui/ConsultationPopup";
import { ImmigrationClient } from "@/types/client";

interface ClientLayoutProps {
  client: ImmigrationClient;
  children: React.ReactNode;
}

export default function ClientLayout({ client, children }: ClientLayoutProps) {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => { if (e.key === "Escape") setPopupOpen(false); };
    const openHandler = () => setPopupOpen(true);
    window.addEventListener("keydown", keyHandler);
    window.addEventListener("open-consultation-popup", openHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("open-consultation-popup", openHandler);
    };
  }, []);

  return (
    <>
      <Navbar client={client} onOpenPopup={() => setPopupOpen(true)} />
      <main style={{ paddingTop: "72px" }}>
        {children}
      </main>
      <Footer client={client} />

      <style>{`
        .mobile-sticky { position:fixed; bottom:0; left:0; right:0; z-index:900; display:none; height:56px; }
        .mobile-sticky a { flex:1; display:flex; align-items:center; justify-content:center; gap:8px; font-family:'Barlow',sans-serif; font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; text-decoration:none; -webkit-tap-highlight-color:transparent; }
        .mobile-sticky a:first-child { background:var(--gold); color:#fff; }
        .mobile-sticky a:last-child { background:var(--navy); color:#fff; }
        @media (max-width:768px) { .mobile-sticky { display:flex; } footer { padding-bottom:56px !important; } }
      `}</style>
      <div className="mobile-sticky">
        <a href={`tel:${client.phone}`}>📞 Call Now</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setPopupOpen(true); }}>📅 Free Consult</a>
      </div>

      <ConsultationPopup
        client={client}
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
}
