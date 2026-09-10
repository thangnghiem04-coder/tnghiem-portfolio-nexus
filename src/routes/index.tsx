import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, BookOpen, Facebook, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/timothy-portfolio-hero.jpg";

const workUrl = "https://drive.google.com/drive/folders/1YH5NBk6iQbgFOnCuQ5Le84UC7RR0V1jy?usp=drive_link";
const transcriptUrl = "https://drive.google.com/file/d/1vUTw9c2nO8ngR5mvj21gUYWJh39UAZvu/view?usp=drive_link";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Timothy Nghiem — Finance, Audit & Economics" },
    { name: "description", content: "Portfolio of Timothy (Thang) Nghiem — economics, finance, strategic governance, and quantitative analysis." },
    { property: "og:title", content: "Timothy Nghiem — Finance, Audit & Economics" },
    { property: "og:description", content: "Academic rigor and analytical work across capital, policy, and governance." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const nav = [["About", "about"], ["Academic", "academic"], ["Capabilities", "capabilities"], ["Selected Work", "work"], ["Perspective", "perspective"], ["Contact", "contact"]];

const capabilities = [
  ["01", "Quantitative Statistics & Econometrics", "Correlation matrix analysis, data scrubbing & filtering, multivariate regression modeling, and panel data analysis using Stata & SPSS."],
  ["02", "Applied Macro & Microeconomics", "Aggregate Demand/Supply, IS-LM frameworks, central bank reaction functions, monetary transmission, and financial accounting principles."],
  ["03", "Political Theory & Historical Systems", "Structural analysis of geopolitical developments and world history from 1800–Present, institutional economics, and political philosophies."],
  ["04", "Strategic & Military Doctrine", "Abstracted strategic planning, deep operations theory, structural maneuver frameworks, and risk distribution under high uncertainty."],
  ["05", "Research & Analytical Auditing", "Qualitative process-tracing, empirical data auditing, compliance mapping, and large-scale project risk assessment."],
];

const places = [
  { name: "France", x: 48, y: 39 }, { name: "Denmark", x: 51, y: 29 },
  { name: "Germany", x: 52, y: 36 }, { name: "Finland", x: 57, y: 23 },
  { name: "Qatar", x: 64, y: 49 }, { name: "UAE", x: 67, y: 50 }, { name: "China", x: 80, y: 42 },
];

function WorldMap() {
  const [active, setActive] = useState("Finland");
  return <div className="glass-panel relative overflow-hidden p-4 md:p-8">
    <div className="absolute left-6 top-5 z-10 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Global field of view</div>
    <svg viewBox="0 0 1000 520" className="mt-8 h-auto w-full" role="img" aria-label="World map highlighting seven countries traversed and analyzed">
      <g fill="currentColor" className="text-primary/12" stroke="currentColor" strokeWidth="1.2">
        <path d="M75 115l70-45 112 18 50 54-28 45-55 3-27 58-74-11-43-52zM230 250l46 22 31 79-20 102-41-29-20-91-28-39z" />
        <path d="M430 104l60-40 85 20 40 43 83-20 104 20 109 82-30 83-74 20-57-36-47 32-72-36-48-83-55 1-22-35-64-9zM524 245l69 29 54 94-31 100-91-9-48-88z" />
        <path d="M786 394l76-21 62 43-30 55-86-7z" />
      </g>
      {places.map((place) => <g key={place.name} className="cursor-pointer" tabIndex={0} role="button" aria-label={place.name} onMouseEnter={() => setActive(place.name)} onFocus={() => setActive(place.name)} onClick={() => setActive(place.name)}>
        <circle cx={place.x * 10} cy={place.y * 10} r="14" className="marker-pulse fill-accent" />
        <circle cx={place.x * 10} cy={place.y * 10} r="5" className="fill-accent stroke-background" strokeWidth="3" />
      </g>)}
    </svg>
    <div className="absolute bottom-5 right-6 font-display text-2xl italic text-primary">{active}</div>
  </div>;
}

function CapabilityIcon({ index }: { index: number }) {
  if (index === 0) return <svg viewBox="0 0 56 56" aria-hidden="true"><path d="M8 45V12M8 45h40M14 37l8-11 8 5 12-17" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="22" cy="26" r="2"/><circle cx="30" cy="31" r="2"/></svg>;
  if (index === 1) return <svg viewBox="0 0 56 56" aria-hidden="true"><path d="M8 43c11-1 17-8 21-19s9-15 19-16M8 12c11 0 17 7 21 18s9 14 19 14" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="29" cy="27" r="3"/></svg>;
  if (index === 2) return <svg viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="19" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M9 28h38M28 9c7 7 7 31 0 38M28 9c-7 7-7 31 0 38" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>;
  if (index === 3) return <svg viewBox="0 0 56 56" aria-hidden="true"><path d="M28 7l17 7v12c0 11-7 18-17 23-10-5-17-12-17-23V14zM18 29h20M28 19v20" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>;
  return <svg viewBox="0 0 56 56" aria-hidden="true"><path d="M11 8h25l8 8v20M36 8v9h8M17 20h13M17 27h11" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="34" cy="36" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M41 43l7 7" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-display text-2xl tracking-[0.08em]" aria-label="Timothy Nghiem home">T. NGHIEM</a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}</nav>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden">{nav.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm uppercase tracking-[0.12em]">{label}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="relative min-h-[92vh] overflow-hidden pt-20">
          <img src={heroImage} alt="Archival economic charts, world map, compass, and financial ledger on a walnut desk" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-primary/72" />
          <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-[1440px] items-end px-5 py-14 md:px-10 md:py-20">
            <div className="reveal-up max-w-5xl text-primary-foreground">
              <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">Finance · Audit · Economics</p>
              <h1 className="max-w-5xl font-display text-6xl leading-[0.94] md:text-8xl lg:text-[7.5rem]">Navigating Macro-Dynamics &amp; Strategic Governance.</h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">Timothy (Thang) Nghiem — Business Administration &amp; Applied Economics Graduate.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="portfolio" size="portfolio" className="bg-background text-foreground hover:bg-background/90"><a href={workUrl} target="_blank" rel="noreferrer">Explore work samples <ArrowUpRight /></a></Button>
                <Button asChild variant="portfolioOutline" size="portfolio" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={transcriptUrl} target="_blank" rel="noreferrer">Academic transcript <ArrowUpRight /></a></Button>
              </div>
              <p className="mt-10 max-w-2xl border-l border-primary-foreground/35 pl-4 text-xs leading-relaxed text-primary-foreground/60">Under Asian cultural naming: Nghiem Duc Thang <span className="mx-2">|</span> Western address: Timothy (or callsign “Cal”).</p>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24 md:px-10 md:py-36">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.6fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">01 / About</p><h2 className="mt-6 font-display text-5xl leading-none md:text-7xl">The Intersection of Capital, Policy, and Governance</h2></div>
            <div className="lg:pt-12"><p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">I operate at the crossroads where macroeconomic realities meet geopolitical strategy. With a foundation in Business Administration, economics, and administrative politics, my focus centers on how policy shifts and market dynamics govern capital allocation and risk.</p></div>
          </div>
          <div className="mt-20 grid gap-8 lg:grid-cols-[1.5fr_.7fr] lg:items-end"><WorldMap/><div className="pb-2"><p className="font-display text-4xl">7 countries</p><p className="mt-4 leading-relaxed text-muted-foreground">France, China, Denmark, Germany, UAE, Qatar — currently based in Finland.</p></div></div>
        </section>

        <section id="academic" className="section-rule scroll-mt-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/55">02 / Academic rigor</p><h2 className="mt-5 max-w-3xl font-display text-5xl leading-none md:text-7xl">Strategic vision, built on evidence.</h2></div><Button asChild variant="portfolioOutline" size="portfolio" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={transcriptUrl} target="_blank" rel="noreferrer">View official transcript <ArrowUpRight /></a></Button></div>
            <div className="mt-16 grid border border-primary-foreground/20 md:grid-cols-2">
              <div className="p-8 md:border-r md:border-primary-foreground/20 md:p-12"><div className="font-display text-8xl md:text-9xl">190</div><p className="mt-4 text-sm uppercase tracking-[0.16em] text-primary-foreground/60">ECTS completed in 2 years</p><p className="mt-3 text-sm text-primary-foreground/60">Tampere University &amp; Aalto University</p></div>
              <div className="divide-y divide-primary-foreground/20"><div className="p-8 md:p-10"><p className="text-xs uppercase tracking-[0.15em] text-secondary">Mastering Large Engineering Projects</p><p className="mt-4 leading-relaxed text-primary-foreground/70">Investigating structural governance, capital expenditure auditing, and risk management frameworks in multi-billion euro infrastructure assets.</p></div><div className="p-8 md:p-10"><p className="text-xs uppercase tracking-[0.15em] text-secondary">Quantitative Exploration</p><p className="mt-4 leading-relaxed text-primary-foreground/70">Actively expanding practical capabilities in coding and machine learning for economic predictions and automated auditing.</p></div></div>
            </div>
            <p className="mt-10 max-w-4xl border-l border-accent pl-6 font-display text-2xl italic text-primary-foreground/80">While evaluating complex systems holistically, my core operational focus lies in Finance and Economics—where data, structure, and strategic leverage yield maximum impact.</p>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24 md:px-10 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">03 / Capabilities</p><h2 className="mt-5 font-display text-5xl md:text-7xl">Core methodology</h2>
          <div className="mt-16 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">{capabilities.map(([num,title,description], i) => <article key={title} className={`min-h-[330px] border-b border-r border-border p-7 md:p-9 ${i === 4 ? "lg:col-span-2" : ""}`}><div className="flex items-start justify-between"><span className="text-xs text-muted-foreground">{num}</span><div className="h-14 w-14 text-accent"><CapabilityIcon index={i}/></div></div><h3 className="mt-14 max-w-sm font-display text-3xl leading-tight">{title}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{description}</p></article>)}</div>
        </section>

        <section id="work" className="section-rule scroll-mt-20">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-2 lg:items-center">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">04 / Selected work</p><h2 className="mt-5 font-display text-5xl leading-none md:text-7xl">Selected Deliverables &amp; Analytical Dossiers</h2></div>
            <a href={workUrl} target="_blank" rel="noreferrer" className="group glass-panel block p-8 transition-transform hover:-translate-y-1 md:p-12"><div className="flex items-start justify-between"><BookOpen className="h-10 w-10 text-accent"/><ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></div><p className="mt-16 text-xs uppercase tracking-[0.15em] text-muted-foreground">Private portfolio archive</p><h3 className="mt-3 font-display text-4xl">Work Samples</h3><p className="mt-5 max-w-xl leading-7 text-muted-foreground">Contains quantitative research datasets, empirical project analyses, financial modeling samples, and governance evaluation reports.</p><div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em]">Open Google Drive <ArrowDownRight className="h-4 w-4"/></div></a>
          </div>
        </section>

        <section id="perspective" className="scroll-mt-20 bg-secondary/45">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">05 / Perspective</p><h2 className="mt-5 font-display text-5xl md:text-7xl">Personal Blog &amp; Essays</h2></div><div className="border-t border-primary pt-7"><p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Currently under development</p><p className="mt-6 max-w-2xl text-xl leading-relaxed">This portal will serve as an analytical archive for essays on geopolitical risk, quantitative economics, and financial structures.</p></div></div></div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28"><blockquote className="glass-panel mx-auto max-w-5xl p-8 font-display text-2xl italic leading-relaxed md:p-14 md:text-4xl">“Author&apos;s Note: This digital portal was architected and deployed utilizing state-of-the-art AI systems—reflecting my ongoing commitment to leveraging cutting-edge technology, optimizing operational workflows, and mastering next-generation analytical tools.”</blockquote></section>
      </main>

      <footer id="contact" className="scroll-mt-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-10 md:pt-28"><p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/50">06 / Contact</p><div className="mt-7 grid gap-12 lg:grid-cols-[1.5fr_1fr]"><h2 className="font-display text-6xl leading-none md:text-8xl">Let’s discuss the systems behind the numbers.</h2><div className="space-y-4 lg:pt-4"><a href="mailto:thangnghiem04@gmail.com" className="flex items-center gap-3 border-b border-primary-foreground/20 pb-4 text-sm hover:text-secondary"><Mail className="h-4 w-4"/>thangnghiem04@gmail.com</a><a href="tel:+358466128746" className="flex items-center gap-3 border-b border-primary-foreground/20 pb-4 text-sm hover:text-secondary"><Phone className="h-4 w-4"/>+358 466 128 746</a><a href="https://www.facebook.com/thang.nghiem.00/" target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b border-primary-foreground/20 pb-4 text-sm hover:text-secondary"><Facebook className="h-4 w-4"/>Facebook <ArrowUpRight className="ml-auto h-4 w-4"/></a><a href={workUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b border-primary-foreground/20 pb-4 text-sm hover:text-secondary">Portfolio folder <ArrowUpRight className="ml-auto h-4 w-4"/></a><a href={transcriptUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b border-primary-foreground/20 pb-4 text-sm hover:text-secondary">Academic transcript <ArrowUpRight className="ml-auto h-4 w-4"/></a></div></div><div className="mt-24 flex flex-col justify-between gap-4 border-t border-primary-foreground/20 pt-7 text-xs text-primary-foreground/45 sm:flex-row"><span>© Timothy (Thang) Nghiem. All rights reserved.</span><span>Based in Finland · Working globally</span></div></div>
      </footer>
    </div>
  );
}
