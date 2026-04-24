"use client";
import { useState } from "react";
import { ImmigrationClient } from "@/types/client";

export default function ContactForm({ client }: { client: ImmigrationClient }) {
  const [form, setForm] = useState({ firstName:"", lastName:"", phone:"", email:"", caseType:"", country:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slug: client.slug }),
      });
    } catch (err) { console.error(err); }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign:"center", padding:"80px 40px", background:"var(--paper)", border:"1px solid rgba(11,31,58,0.08)" }}>
        <div style={{ width:"64px", height:"64px", background:"var(--gold)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:"28px", color:"#fff" }}>✓</div>
        <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"28px", color:"var(--navy)", marginBottom:"12px" }}>Message Received</h3>
        <p style={{ color:"var(--ink-mid)", lineHeight:"1.7", fontSize:"15px" }}>
          {client.leadAttorneyFirst} will personally review your message and respond within 24 hours.
          Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .contact-form-wrap { background:var(--white); border:1px solid rgba(11,31,58,0.08); }
        .cf-top { background:var(--navy); padding:32px; position:relative; }
        .cf-top::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--gold),var(--gold-light)); }
        .cf-title { font-family:'Playfair Display',serif; font-size:24px; font-weight:700; color:#fff; margin-bottom:4px; }
        .cf-sub { font-size:13px; color:rgba(255,255,255,0.5); font-weight:300; }
        .cf-body { padding:32px; }
        .cf-fg { margin-bottom:14px; }
        .cf-fg label { display:block; font-size:10px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:var(--ink-light); margin-bottom:6px; }
        .cf-fg input, .cf-fg select, .cf-fg textarea { width:100%; background:var(--cream); border:1.5px solid rgba(11,31,58,0.12); color:var(--ink); font-family:'Barlow',sans-serif; font-size:15px; font-weight:400; padding:13px 14px; outline:none; transition:border-color 0.2s; appearance:none; border-radius:0; resize:vertical; }
        .cf-fg input:focus, .cf-fg select:focus, .cf-fg textarea:focus { border-color:var(--gold); background:#fff; }
        .cf-fg input::placeholder, .cf-fg textarea::placeholder { color:rgba(26,26,46,0.3); }
        .cf-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .cf-submit { width:100%; margin-top:8px; background:var(--gold); color:#fff; font-family:'Barlow',sans-serif; font-size:13px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:17px; border:none; cursor:pointer; transition:background 0.2s; }
        .cf-submit:hover { background:var(--gold-light); }
        .cf-submit:disabled { opacity:0.6; cursor:not-allowed; }
        .cf-trust { display:flex; align-items:center; gap:8px; margin-top:14px; font-size:11px; color:var(--ink-light); }
        .cf-trust svg { color:var(--gold); flex-shrink:0; }
        @media (max-width:600px) { .cf-row { grid-template-columns:1fr; } }
      `}</style>
      <div className="contact-form-wrap">
        <div className="cf-top">
          <div className="cf-title">Free Case Evaluation</div>
          <div className="cf-sub">Speak with {client.leadAttorneyFirst} within 24 hours · No obligation · Fully confidential</div>
        </div>
        <div className="cf-body">
          <form onSubmit={handleSubmit}>
            <div className="cf-row">
              <div className="cf-fg"><label>First Name</label><input type="text" placeholder="Maria" required value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})} /></div>
              <div className="cf-fg"><label>Last Name</label><input type="text" placeholder="Rodriguez" required value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})} /></div>
            </div>
            <div className="cf-fg"><label>Phone Number</label><input type="tel" placeholder="(555) 000-0000" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></div>
            <div className="cf-fg"><label>Email Address</label><input type="email" placeholder="maria@example.com" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
            <div className="cf-fg">
              <label>How Can We Help?</label>
              <select required value={form.caseType} onChange={e=>setForm({...form,caseType:e.target.value})}>
                <option value="">Select your situation...</option>
                <option>Family-Based Green Card</option>
                <option>Employment Visa (H-1B, L-1, O-1)</option>
                <option>Citizenship & Naturalization</option>
                <option>DACA / Dreamers</option>
                <option>Asylum Application</option>
                <option>Deportation Defense</option>
                <option>Something Else</option>
              </select>
            </div>
            <div className="cf-fg"><label>Country of Origin</label><input type="text" placeholder="e.g. Mexico, India, Philippines..." value={form.country} onChange={e=>setForm({...form,country:e.target.value})} /></div>
            <div className="cf-fg"><label>Brief Description (Optional)</label><textarea rows={4} placeholder="Tell us a little about your situation..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></div>
            <button type="submit" className="cf-submit" disabled={loading}>{loading ? "Sending..." : "Request My Free Consultation →"}</button>
            <div className="cf-trust">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              Everything shared is protected by attorney-client privilege
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
