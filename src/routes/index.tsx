import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site/Header";
import { ApplyForm } from "@/components/site/ApplyForm";
import heroAsset from "@/assets/hero.jpg.asset.json";
import classroomAsset from "@/assets/classroom.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MHM School | Learn. Lead. Flourish." },
      {
        name: "description",
        content:
          "MHM School Doha — admissions for 2026–2027, academics from Early Years to Secondary, student life and parent information.",
      },
      { property: "og:title", content: "MHM School | Learn. Lead. Flourish." },
      {
        property: "og:description",
        content: "A welcoming international learning community in Doha. Applications open for 2026–2027.",
      },
    ],
  }),
  component: Index,
});

const Kicker = ({ children, light = false }: { children: string; light?: boolean }) => (
  <div className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-gold" : "text-primary"}`}>
    {children}
  </div>
);

function Index() {
  return (
    <div className="bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[600px] overflow-hidden lg:h-[calc(100vh-116px)]">
          <img src={heroAsset.url} alt="MHM School students learning in a modern classroom" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
          <div className="relative flex min-h-[600px] max-w-3xl flex-col justify-center px-[5vw] py-20 lg:h-full">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-gold">MHM School • Doha</div>
            <h1 className="mt-4 font-display text-4xl leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Where curiosity becomes <em className="text-gold">confidence.</em>
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              A welcoming international learning community where every child is known, challenged and inspired to succeed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="rounded-2xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5">
                Apply for 2026–2027
              </a>
              <a href="#tour" className="rounded-2xl border border-primary-foreground/50 bg-primary-foreground/10 px-7 py-4 text-sm font-bold text-primary-foreground backdrop-blur transition-transform hover:-translate-y-0.5">
                Book a Campus Tour
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-sm text-primary-foreground/80">
              <span>✓ Child-centred learning</span>
              <span>✓ English &amp; Arabic pathways</span>
              <span>✓ Future-ready skills</span>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["↗", "Admissions", "How to Apply", "#admissions"],
            ["⌖", "Visit Us", "Book a Tour", "#tour"],
            ["◫", "Fees", "Tuition Information", "#fees"],
            ["◎", "Families", "Parent Portal", "#parents"],
          ].map(([icon, small, strong, href]) => (
            <a key={strong} href={href} className="flex items-center gap-4 bg-card px-8 py-7 transition-colors hover:bg-secondary">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">{icon}</span>
              <span>
                <small className="block text-xs uppercase tracking-[0.12em] text-muted-foreground">{small}</small>
                <strong className="text-base text-foreground">{strong}</strong>
              </span>
            </a>
          ))}
        </section>

        {/* Welcome */}
        <section id="welcome" className="px-[5vw] py-20 lg:py-28">
          <Kicker>Welcome to MHM</Kicker>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              A school designed around <span className="text-primary">your child&rsquo;s potential.</span>
            </h2>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                At MHM School, academic ambition goes hand-in-hand with character, wellbeing and belonging. Our learning
                experience is structured to help students build strong foundations, communicate confidently and become
                thoughtful global citizens.
              </p>
              <a href="#about" className="mt-5 inline-block font-semibold text-primary">Discover our approach →</a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[["20+", "Nationalities"], ["1:14", "Teacher–student focus"], ["2", "Core languages"], ["100%", "Student-centred"]].map(([n, l]) => (
            <div key={l} className="bg-cream px-6 py-10 text-center">
              <strong className="block font-display text-4xl text-primary">{n}</strong>
              <span className="mt-1 block text-sm text-muted-foreground">{l}</span>
            </div>
          ))}
        </section>

        {/* Features */}
        <section id="about" className="grid gap-6 px-[5vw] py-20 lg:grid-cols-3 lg:py-28">
          <article id="campus" className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl bg-primary-deep p-8 lg:row-span-2">
            <img src={classroomAsset.url} alt="MHM School campus learning space" className="absolute inset-0 h-full w-full object-cover opacity-45" />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Our Campus</span>
              <h3 className="mt-3 font-display text-2xl leading-snug text-primary-foreground">
                Spaces that invite students to explore, create and collaborate.
              </h3>
              <a href="#life" className="mt-4 inline-block font-semibold text-gold">Explore facilities →</a>
            </div>
          </article>

          {[
            ["✦", "Academic Excellence", "A structured, modern learning journey focused on knowledge, skills and confidence.", "Learning overview →", "#academics", false],
            ["ع", "English + Arabic", "Language learning is embedded into school life to strengthen communication and cultural connection.", "Language pathways →", "#academics", true],
          ].map(([icon, title, body, cta, href, accent]) => (
            <article key={title as string} className={`rounded-3xl border border-border p-8 ${accent ? "bg-cream" : "bg-card"}`}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-xl text-primary">{icon}</div>
              <h3 className="mt-5 font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <a href={href as string} className="mt-4 inline-block text-sm font-semibold text-primary">{cta}</a>
            </article>
          ))}
        </section>

        {/* Journey */}
        <section id="academics" className="bg-secondary/60 px-[5vw] py-20 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Kicker>Learning Journey</Kicker>
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">Growing with every stage.</h2>
            </div>
            <p className="self-end text-muted-foreground">
              Age-appropriate programmes with a consistent focus on academic growth, curiosity, character and real-world skills.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ["01", "Early Years", "Discover & Play", "Purposeful play, communication, routines and early literacy foundations.", ""],
              ["02", "Primary", "Build Foundations", "Strong literacy, numeracy, science, languages and creative thinking.", "primary"],
              ["03", "Secondary", "Think Independently", "Deeper subject knowledge, leadership, projects and future pathways.", "secondary"],
            ].map(([n, stage, title, body, id]) => (
              <article key={title} id={id || undefined} className="rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-elegant)]">
                <span className="font-display text-3xl text-gold">{n}</span>
                <small className="mt-4 block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{stage}</small>
                <h3 className="mt-1 font-display text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Student life */}
        <section id="life" className="grid lg:grid-cols-2">
          <div className="min-h-[340px]">
            <img src={classroomAsset.url} alt="Students collaborating in class at MHM School" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="bg-primary-deep px-[5vw] py-16 text-primary-foreground lg:px-16 lg:py-24">
            <Kicker light>Student Life</Kicker>
            <h2 className="font-display text-3xl sm:text-4xl">More than a school day.</h2>
            <p className="mt-4 max-w-lg text-primary-foreground/80">
              Learning continues through sport, creativity, leadership, clubs, community experiences and meaningful friendships.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Sports & Wellbeing", "Arts & Creativity", "Clubs & Activities", "Student Leadership"].map((p) => (
                <span key={p} className="rounded-full border border-primary-foreground/25 px-4 py-2 text-sm text-primary-foreground/85">{p}</span>
              ))}
            </div>
            <a href="#apply" className="mt-8 inline-block rounded-2xl bg-primary-foreground px-6 py-3.5 text-sm font-bold text-primary">
              Explore Student Life
            </a>
          </div>
        </section>

        {/* Admissions steps */}
        <section id="admissions" className="px-[5vw] py-20 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Kicker>Admissions</Kicker>
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">Joining MHM is simple.</h2>
            </div>
            <p className="self-end text-muted-foreground">
              Our admissions team is here to guide your family from enquiry to enrolment.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Submit an Enquiry", "Tell us about your child and preferred grade."],
              ["2", "Meet the School", "Book a tour or speak with our admissions team."],
              ["3", "Assessment & Documents", "Complete grade-appropriate checks and upload records."],
              ["4", "Offer & Enrolment", "Receive the outcome and complete registration."],
            ].map(([n, t, b]) => (
              <div key={n} className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{n}</span>
                <h4 className="mt-4 font-display text-xl text-foreground">{t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Apply */}
        <section id="apply" className="grid gap-10 bg-cream px-[5vw] py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Kicker>Applications Open</Kicker>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">Start your child&rsquo;s MHM journey.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Complete this enquiry form and our admissions team will follow up with the next steps.
            </p>
            <div className="mt-8 inline-block rounded-2xl border border-border bg-card p-6">
              <small className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Admissions Support</small>
              <strong className="mt-2 block font-display text-xl text-foreground">Sunday – Thursday</strong>
              <span className="text-sm text-muted-foreground">7:30 AM – 3:30 PM</span>
            </div>
          </div>
          <ApplyForm />
        </section>

        {/* Info cards */}
        <section className="grid gap-6 px-[5vw] py-20 lg:grid-cols-3 lg:py-28">
          {[
            ["fees", "Tuition & Fees", "Clear information for families.", "Annual fees, registration charges, transport and payment schedules in one easy place.", "View fee guide →"],
            ["tour", "Visit Our Campus", "See MHM in action.", "Tour learning spaces, meet the team and get a feel for the MHM community.", "Request a tour →"],
            ["parents", "Parent Experience", "Stay connected.", "Access notices, calendars, attendance, learning updates and school communication.", "Parent portal →"],
          ].map(([id, small, title, body, cta]) => (
            <div key={id} id={id} className="rounded-3xl border border-border bg-card p-8">
              <small className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{small}</small>
              <h3 className="mt-3 font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <a href="#apply" className="mt-4 inline-block text-sm font-semibold text-primary">{cta}</a>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
