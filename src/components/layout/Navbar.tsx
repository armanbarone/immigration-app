"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ImmigrationClient } from "@/types/client";

interface NavbarProps {
  client: ImmigrationClient;
  onOpenPopup: () => void;
}

export default function Navbar({ client, onOpenPopup }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const base = `/${client.slug}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        #navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: #FAF7F2;
          box-shadow: ${scrolled ? "0 1px 0 rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.06)" : "none"};
          transition: box-shadow 0.3s;
        }
        .nav-inner {
          max-width: var(--container); margin: 0 auto; padding: 0 var(--pad);
          height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .nav-logo { text-decoration: none; flex-shrink: 0; }
        .nav-logo-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; line-height: 1; color: var(--navy); }
        .nav-logo-tag { font-size: 9px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; margin-top: 3px; display: block; color: var(--gold); }
        .nav-links { display: flex; align-items: center; gap: 32px; list-style: none; }
        .nav-links a { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; color: var(--ink-mid); transition: color 0.2s; }
        .nav-links a:hover { color: var(--navy); }
        .nav-cta { background: var(--gold); color: #fff; padding: 10px 22px; font-size: 11px; letter-spacing: 0.14em; cursor: pointer; border: none; font-family: 'Barlow', sans-serif; font-weight: 700; text-transform: uppercase; transition: background 0.2s; }
        .nav-cta:hover { background: var(--gold-light); }
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; background: none; border: none; }
        .nav-hamburger span { width: 24px; height: 2px; display: block; background: var(--navy); }
        .nav-drawer {
          display: none; position: fixed; top: 72px; left: 0; right: 0;
          background: var(--cream); border-top: 1px solid rgba(0,0,0,0.08);
          padding: 24px var(--pad) 32px; box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          z-index: 999; flex-direction: column; gap: 0;
        }
        .nav-drawer.open { display: flex; }
        .nav-drawer a { font-size: 15px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink); text-decoration: none; padding: 14px 0; border-bottom: 1px solid rgba(0,0,0,0.06); transition: color 0.2s; }
        .nav-drawer a:hover { color: var(--gold); }
        .drawer-cta { margin-top: 20px; background: var(--gold); color: #fff; text-align: center; padding: 16px; border: none; cursor: pointer; font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav id="navbar">
        <div className="nav-inner">
          <Link className="nav-logo" href={base}>
            <span className="nav-logo-name">{client.firmName}</span>
            <span className="nav-logo-tag">Immigration Law · {client.city}, {client.state}</span>
          </Link>

          <ul className="nav-links">
            <li><Link href={`${base}/about`}>About</Link></li>
            <li><Link href={`${base}/practice-areas`}>Practice Areas</Link></li>
            <li><Link href={`${base}/blog`}>Resources</Link></li>
            <li><Link href={`${base}/contact`}>Contact</Link></li>
            <li>
              <button className="nav-cta" onClick={onOpenPopup}>
                Free Consultation
              </button>
            </li>
          </ul>

          <button
            className="nav-hamburger"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${drawerOpen ? " open" : ""}`} id="nav-drawer">
        <Link href={`${base}/about`} onClick={() => setDrawerOpen(false)}>About the Attorney</Link>
        <Link href={`${base}/practice-areas`} onClick={() => setDrawerOpen(false)}>Practice Areas</Link>
        <Link href={`${base}/blog`} onClick={() => setDrawerOpen(false)}>Resources</Link>
        <Link href={`${base}/contact`} onClick={() => setDrawerOpen(false)}>Contact</Link>
        <button
          className="drawer-cta"
          onClick={() => { setDrawerOpen(false); onOpenPopup(); }}
        >
          Free Consultation →
        </button>
      </div>
    </>
  );
}
