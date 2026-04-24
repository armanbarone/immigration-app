"use client";
import { useState } from "react";
import { ImmigrationClient } from "@/types/client";

interface ConsultationPopupProps {
  client: ImmigrationClient;
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationPopup({ client, isOpen, onClose }: ConsultationPopupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", caseType: "", country: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slug: client.slug, message: "" }),
      });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ firstName:"", lastName:"", phone:"", email:"", caseType:"", country:"" });
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .popup-overlay { position:fixed; inset:0; background:rgba(8,15,26,0.88); z-index:2000; display:flex; align-items:center; justify-content:center; padding:20px; backdrop-filter:blur(6px); animation:fadeIn 0.25s ease; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .popup-box { background:#fff; max-width:560px; width:100%; max-height:92svh; overflow-y:auto; position:relative; animation:slideUp 0.35s cubic-bezier(0.34,1.3,0.64,1); }
        @keyframes slideUp { from{transform:translateY(32px) scale(0.96);opacity:0} to{transform:translateY(0) scale(1);opacity:1} }
        .popup-top { background:var(--navy); padding:32px 32px 28px; position:relative; }
        .popup-top::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--gold),var(--gold-light)); }
        .popup-close { position:absolute; top:16px; right:16px; width:36px; height:36px; background:rgba(255,255,255,0.1); border:none; color:#fff; font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s; }
        .popup-close:hover { background:rgba(255,255,255,0.2); }
        .popup-title { font-family:'Playfair Display',serif; font-size:26px; font-weight:700; color:#fff; margin-bottom:4px; }
        .popup-sub { font-size:13px; color:rgba(255,255,255,0.5); font-weight:300; }
        .popup-body { padding:28px 32px 36px; }
        .fg { margin-bottom:14px; }
        .fg label { display:block; font-size:10px; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:var(--ink-light); margin-bottom:6px; }
        .fg input, .fg select { width:100%; background:var(--cream); border:1.5px solid rgba(11,31,58,0.12); color:var(--ink); font-family:'Barlow',sans-serif; font-size:15px; font-weight:400; padding:13px 14px; outline:none; transition:border-color 0.2s; appearance:none; border-radius:0; }
        .fg input:focus, .fg select:focus { border-color:var(--gold); background:#fff; }
        .fg input::placeholder { color:rgba(26,26,46,0.3); }
        .fg-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .popup-submit { width:100%; margin-top:8px; background:var(--gold); color:#fff; font-family:'Barlow',sans-serif; font-size:13px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:17px; border:none; cursor:pointer; transition:background 0.2s; }
        .popup-submit:hover { background:var(--gold-light); }
        .popup-submit:disabled { opacity:0.6; cursor:not-allowed; }
        .popup-trust { display:flex; align-items:center; gap:8px; margin-top:14px; font-size:11px; color:var(--ink-light); }
        .popup-trust svg { color:var(--gold); flex-shrink:0; }
        .popup-success { text-align:center; padding:56px 32px; }
        .popup-success-icon { width:64px; height:64px; background:var(--gold); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; font-size:28px; color:#fff; }
        .popup-success h3 { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:var(--navy); margin-bottom:10px; }
        .popup-success p { color:var(--ink-mid); font-size:15px; line-height:1.7; }
        @media (max-width:768px) { .popup-top, .popup-body { padding-left:20px; padding-right:20px; } .fg-row { grid-template-columns:1fr; } }
      `}</style>

      <div className="popup-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="popup-box">
          {submitted ? (
            <div className="popup-success">
              <div className="popup-success-icon">✓</div>
              <h3>Request Received!</h3>
              <p>
                {client.leadAttorneyFirst} will personally reach out within 24 hours.
                Check your email — a confirmation is on its way.
              </p>
            </div>
          ) : (
            <>
              <div className="popup-top">
                <button className="popup-close" onClick={onClose}>✕</button>
                <div className="popup-title">Free Case Evaluation</div>
                <div className="popup-sub">
                  Speak with {client.leadAttorneyFirst} within 24 hours · No obligation · Fully confidential
                </div>
              </div>
              <div className="popup-body">
                <form onSubmit={handleSubmit}>
                  <div className="fg-row">
                    <div className="fg">
                      <label>First Name</label>
                      <input type="text" placeholder="Maria" required
                        value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
                    </div>
                    <div className="fg">
                      <label>Last Name</label>
                      <input type="text" placeholder="Rodriguez" required
                        value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
                    </div>
                  </div>
                  <div className="fg">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="(555) 000-0000" required
                      value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div className="fg">
                    <label>Email Address</label>
                    <input type="email" placeholder="maria@example.com" required
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                  <div className="fg">
                    <label>What Do You Need Help With?</label>
                    <select required value={form.caseType} onChange={e => setForm({...form, caseType: e.target.value})}>
                      <option value="">Select your situation...</option>
                      <option>Family-Based Green Card</option>
                      <option>Employment Visa (H-1B, L-1, O-1)</option>
                      <option>Citizenship & Naturalization</option>
                      <option>DACA / Dreamers</option>
                      <option>Asylum Application</option>
                      <option>Deportation Defense</option>
                      <option>Investor Visa (EB-5)</option>
                      <option>Something Else</option>
                    </select>
                  </div>
                  <div className="fg">
                    <label>Country of Origin</label>
                    <input type="text" placeholder="e.g. Mexico, India, Philippines..."
                      value={form.country} onChange={e => setForm({...form, country: e.target.value})} />
                  </div>
                  <button type="submit" className="popup-submit" disabled={loading}>
                    {loading ? "Sending..." : "Request My Free Consultation →"}
                  </button>
                  <div className="popup-trust">
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    Everything shared is protected by attorney-client privilege
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
