import { useState } from "react";

const grades = ["KG 1", "KG 2", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];

const field =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary";
const labelCls = "block text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground";

export function ApplyForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <FormTitle n="01" title="Parent / Guardian Details" sub="Fields marked * are required" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelCls}>Parent Full Name *<input required type="text" placeholder="Full name" className={field} /></label>
        <label className={labelCls}>Email Address *<input required type="email" placeholder="name@example.com" className={field} /></label>
        <label className={labelCls}>Mobile Number *<input required type="tel" placeholder="+974" className={field} /></label>
        <label className={labelCls}>Preferred Contact
          <select className={field}><option>Phone</option><option>WhatsApp</option><option>Email</option></select>
        </label>
      </div>

      <FormTitle n="02" title="Student Details" sub="Tell us who will be joining MHM" className="mt-8" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelCls}>Student Full Name *<input required type="text" placeholder="Student name" className={field} /></label>
        <label className={labelCls}>Date of Birth *<input required type="date" className={field} /></label>
        <label className={labelCls}>Applying for Grade *
          <select required defaultValue="" className={field}>
            <option value="" disabled>Select grade</option>
            {grades.map((g) => <option key={g}>{g}</option>)}
          </select>
        </label>
        <label className={labelCls}>Academic Year
          <select className={field}><option>2026–2027</option><option>2027–2028</option></select>
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" required className="mt-1 accent-[var(--primary)]" />
        I agree to be contacted by MHM School about admissions.
      </label>

      <button type="submit" className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5">
        Submit Enquiry →
      </button>

      {sent && (
        <p className="mt-4 rounded-xl bg-secondary px-4 py-3 text-center text-sm font-semibold text-primary">
          Thank you — your enquiry has been received.
        </p>
      )}
    </form>
  );
}

function FormTitle({ n, title, sub, className = "" }: { n: string; title: string; sub: string; className?: string }) {
  return (
    <div className={`mb-5 flex items-center gap-3 ${className}`}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary font-display text-primary">{n}</span>
      <div>
        <strong className="block text-base text-foreground">{title}</strong>
        <small className="text-xs text-muted-foreground">{sub}</small>
      </div>
    </div>
  );
}
