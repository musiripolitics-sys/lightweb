"use client";

import { useEffect, useState } from "react";

const FIELD =
  "w-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-white/50";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  // Prefill when arriving from a product page (…/contact/?product=Tardis).
  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product");
    if (product) {
      // setState after mount is required here: the query string only exists
      // client-side, and a lazy initializer would mismatch the static HTML.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMessage(`Hi, I'd like a quotation for the ${product} fixture.\n\nProject details: `);
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — wire this to your backend / email service.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[320px] flex-col items-start justify-center border border-white/12 p-8">
        <h2 className="text-2xl font-semibold uppercase">Thank you</h2>
        <p className="mt-3 max-w-sm text-white/60">
          Your message has been noted. This demo form doesn&rsquo;t send yet — connect it to
          your email service to go live.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 cursor-pointer text-sm uppercase tracking-[0.08em] text-white/60 underline-offset-4 hover:text-white hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.16em] text-white/45">Name</span>
          <input className={FIELD} type="text" name="name" required placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.16em] text-white/45">Email</span>
          <input className={FIELD} type="email" name="email" required placeholder="you@email.com" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.16em] text-white/45">Phone</span>
          <input className={FIELD} type="tel" name="phone" placeholder="+91 …" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.16em] text-white/45">Project type</span>
          <select className={`${FIELD} appearance-none`} name="type" defaultValue="">
            <option value="" disabled className="bg-[#0d0d0e]">
              Select…
            </option>
            <option className="bg-[#0d0d0e]">Interior Lighting</option>
            <option className="bg-[#0d0d0e]">Exterior Lighting</option>
            <option className="bg-[#0d0d0e]">Turnkey / Both</option>
            <option className="bg-[#0d0d0e]">Dealer / Trade Enquiry</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.16em] text-white/45">Message</span>
        <textarea
          className={`${FIELD} min-h-[140px] resize-y`}
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your space…"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex cursor-pointer items-center justify-center self-start border border-white bg-white px-8 py-4 text-sm uppercase tracking-[0.08em] text-[#0d0d0e] transition-colors hover:bg-transparent hover:text-white"
      >
        Send message
      </button>
    </form>
  );
}
