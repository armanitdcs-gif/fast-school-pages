import { useState } from "react";

const nav = [
  { label: "About", items: [["Our School", "#about"], ["Campus & Facilities", "#campus"], ["Mission & Values", "#welcome"]] },
  { label: "Admissions", items: [["Admissions Process", "#admissions"], ["Tuition & Fees", "#fees"], ["Apply Online", "#apply"], ["Book a Tour", "#tour"]] },
  { label: "Academics", items: [["Learning Overview", "#academics"], ["Primary", "#primary"], ["Secondary", "#secondary"], ["Languages", "#about"]] },
];

const Brand = ({ light = false }: { light?: boolean }) => (
  <a href="#top" className="flex items-center gap-3" aria-label="MHM School home">
    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] font-display text-2xl text-primary-foreground shadow-[var(--shadow-soft)]">
      M
    </span>
    <span>
      <strong className={`block font-display text-xl ${light ? "text-primary-foreground" : "text-foreground"}`}>MHM School</strong>
      <small className={`block text-[10px] uppercase tracking-[0.14em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        Learn. Lead. Flourish.
      </small>
    </span>
  </a>
);

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex h-9 items-center justify-center gap-4 bg-primary-deep px-4 text-xs text-primary-foreground">
        <span>Admissions Open for 2026–2027</span>
        <a href="#apply" className="font-bold text-gold">Start your application →</a>
      </div>

      <header id="top" className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-border/70 bg-background/95 px-[5vw] backdrop-blur-md">
        <Brand />

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {nav.map((group) => (
            <div key={group.label} className="group relative">
              <button className="py-7 text-foreground transition-colors group-hover:text-primary">{group.label}</button>
              <div className="invisible absolute left-[-20px] top-[68px] min-w-56 rounded-2xl border border-border bg-popover p-3 opacity-0 shadow-[var(--shadow-elegant)] transition-opacity group-hover:visible group-hover:opacity-100">
                {group.items.map(([label, href]) => (
                  <a key={label} href={href} className="block rounded-lg px-3 py-2.5 font-medium text-popover-foreground transition-colors hover:bg-secondary hover:text-primary">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a href="#life" className="transition-colors hover:text-primary">Student Life</a>
          <a href="#parents" className="transition-colors hover:text-primary">Parents</a>
        </nav>

        <div className="flex items-center gap-2.5">
          <a href="#apply" className="hidden rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-flex">
            Apply Now
          </a>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-xl border border-border text-xl lg:hidden">
            ☰
          </button>
        </div>
      </header>

      {open && (
        <aside className="fixed inset-y-0 right-0 z-[100] flex w-[80%] max-w-sm flex-col gap-4 bg-background p-8 shadow-[var(--shadow-elegant)]">
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="self-end text-3xl text-muted-foreground">×</button>
          {[["About", "#about"], ["Admissions", "#admissions"], ["Academics", "#academics"], ["Student Life", "#life"], ["Parents", "#parents"], ["Apply Online", "#apply"]].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="py-2 text-xl font-bold text-foreground">{l}</a>
          ))}
        </aside>
      )}
    </>
  );
}

export function Footer() {
  const cols = [
    { title: "Our School", links: [["About MHM", "#about"], ["Campus", "#campus"], ["Academics", "#academics"], ["Student Life", "#life"]] },
    { title: "Admissions", links: [["Admissions Process", "#admissions"], ["Tuition & Fees", "#fees"], ["Apply Online", "#apply"], ["Book a Tour", "#tour"]] },
  ];
  return (
    <footer className="bg-primary-deep px-[5vw] py-16 text-primary-foreground">
      <div className="grid gap-10 md:grid-cols-4">
        <Brand light />
        {cols.map((c) => (
          <div key={c.title} className="flex flex-col gap-2.5">
            <h4 className="mb-1 font-display text-lg">{c.title}</h4>
            {c.links.map(([l, h]) => (
              <a key={l} href={h} className="text-sm text-primary-foreground/70 transition-colors hover:text-gold">{l}</a>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-2.5">
          <h4 className="mb-1 font-display text-lg">Contact</h4>
          <p className="text-sm text-primary-foreground/70">Doha, State of Qatar</p>
          <p className="text-sm text-primary-foreground/70">+974 0000 0000</p>
          <p className="text-sm text-primary-foreground/70">admissions@mhmschool.edu.qa</p>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
        © 2026 MHM School. Demo website concept.
      </div>
    </footer>
  );
}
