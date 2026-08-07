/* ------------------------------------------------------------------ */
/* Données                                                             */
/* ------------------------------------------------------------------ */

const navLinks = ["À propos", "Offre", "Formations", "Blog", "Contact"];

const categories = [
  "Intelligence artificielle",
  "Marketing Digital",
  "Bureautique",
];

const articles = [
  {
    title: "Nouvo Media Formation est désormais certifié Qualiopi !",
    excerpt:
      "Après plusieurs semaines de travail et bientôt deux années d’existence,…",
    date: "14 avril 2025",
    from: "from-zinc-800",
    to: "to-black",
  },
  {
    title: "Deepseek : Premiers retours sur un ChatGPT chinois à petit budget",
    excerpt: "Deepseek, une version modifiée de ChatGPT avec un budget limité,…",
    date: "28 janvier 2025",
    from: "from-slate-300",
    to: "to-slate-500",
  },
  {
    title:
      "Le Tribunal de commerce de Paris mise sur l’intelligence artificielle pour moderniser ses pratiques",
    excerpt: "Depuis 2024, sous l’impulsion de son président Patrick Sayer, le…",
    date: "27 janvier 2025",
    from: "from-amber-700",
    to: "to-amber-950",
  },
  {
    title: "ChatGPT : Un usage quotidien pour 39% des jeunes de 18 à 25 Ans",
    excerpt: "Une étude réalisée par l’agence HeavenL révèle que 39% des…",
    date: "26 janvier 2025",
    from: "from-sky-300",
    to: "to-teal-500",
  },
];

const features = [
  {
    title: "Expertise IA",
    desc: "Nos formateurs sont des experts reconnus dans le domaine de l’IA générative.",
    icon: "globe",
  },
  {
    title: "Cours personnalisés",
    desc: "Des formations sur mesure adaptées à chaque niveau et secteur professionnel.",
    icon: "translate",
  },
  {
    title: "Supports variés",
    desc: "Apprentissage via textes, vidéos, sons, et images pour une immersion complète.",
    icon: "laptop",
  },
  {
    title: "Technologies récentes",
    desc: "Nous utilisons les outils IA les plus récents pour un apprentissage pratique.",
    icon: "book",
  },
  {
    title: "Accès flexible",
    desc: "Apprenez à votre rythme avec un accès flexible à nos cours en ligne.",
    icon: "ball",
  },
  {
    title: "Newsletter exclusive",
    desc: "Recevez régulièrement des conseils et actualités sur l’IA avec notre newsletter.",
    icon: "money",
  },
];

const stats = [
  { value: "675", label: "stagiaires accompagnés" },
  { value: "67", label: "entreprises accompagnées" },
  { value: "4,6/5", label: "de taux de satisfaction" },
  { value: "15", label: "villes visitées en France et à l’étranger" },
];

const clients = ["AMEX", "VEOLIA", "MICHELIN", "SAINT-GOBAIN"];

/* ------------------------------------------------------------------ */
/* Icônes                                                              */
/* ------------------------------------------------------------------ */

function FeatureIcon({ name }: { name: string }) {
  const common = "h-9 w-9";
  switch (name) {
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 6h-2.5a15.7 15.7 0 00-1.3-3.4A8 8 0 0118.9 8zM12 4c.8 1 1.4 2.4 1.8 4h-3.6c.4-1.6 1-3 1.8-4zM4.3 14a8 8 0 010-4h2.9a17.6 17.6 0 000 4H4.3zm.8 2h2.5c.3 1.2.8 2.4 1.3 3.4A8 8 0 015.1 16zM7.2 8H4.7a8 8 0 013.8-3.4C8 5.6 7.5 6.8 7.2 8zM12 20c-.8-1-1.4-2.4-1.8-4h3.6c-.4 1.6-1 3-1.8 4zm2.2-6H9.8a15.5 15.5 0 010-4h4.4a15.5 15.5 0 010 4zm.5 5.4c.5-1 1-2.2 1.3-3.4h2.5a8 8 0 01-3.8 3.4zM16.8 14a17.6 17.6 0 000-4h2.9a8 8 0 010 4h-2.9z" />
        </svg>
      );
    case "laptop":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v10h-2V6H6v9H4V5zm-2 11h20a1 1 0 010 2H2a1 1 0 010-2z" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M5 3h13a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4a1 1 0 011-1zm1 15h12v-2H6a1 1 0 000 2zm0-4h12V5H6v9z" />
        </svg>
      );
    case "ball":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2.2l2.9 2.1-1.1 3.4h-3.6L9.1 6.3 12 4.2zM5.2 9.4l3.4-.1 1.1 3.4-2.9 2.1-2.2-1.7.6-3.6zm3 8.8L6.6 15l2.9-2.1 2.9 2.1-1.1 3.4-2.1.8zm7.6 0l-2.1-.8-1.1-3.4 2.9-2.1L18.8 15l-2.4 3.2zm2.4-4.9L15.3 15l-2.9-2.1 1.1-3.4 3.4.1.6 3.6z" />
        </svg>
      );
    case "money":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M3 6h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1zm2 2v1a2 2 0 002-2H6a1 1 0 00-1 1zm0 8h1a2 2 0 00-2-2v1a1 1 0 001 1zm14 0a1 1 0 001-1v-1a2 2 0 00-2 2h1zm0-8a1 1 0 00-1-1h-1a2 2 0 002 2V8zm-7 1a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      );
    default: // translate
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M4 4h7v2H8.6c.4 1.5 1.1 2.9 2 4.1.6-.8 1.1-1.6 1.5-2.6h2.1c-.5 1.6-1.3 3-2.3 4.3l2.4 2.4-1.1 1.5-2.4-2.4-2.9 2.9-1.4-1.4 3-3A13 13 0 016.5 6H4V4zm11.5 6h2l3.5 10h-2.1l-.8-2.4h-3.2l-.8 2.4h-2.1l3.5-10zm.9 2.8L15.2 16h2.4l-1.2-3.2z" />
        </svg>
      );
  }
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z" />
    </svg>
  );
}

function SocialIcon({ type }: { type: "in" | "yt" }) {
  if (type === "in") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9V9z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 001.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 001.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 001.8-1.8C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans text-zinc-900">
      {/* 1. Barre utilitaire */}
      <div className="border-b border-zinc-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-3 text-zinc-500">
            <a href="#" aria-label="LinkedIn" className="hover:text-zinc-900">
              <SocialIcon type="in" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-zinc-900">
              <SocialIcon type="yt" />
            </a>
          </div>
          <div className="flex items-center gap-5 text-zinc-600">
            <a href="#" className="hover:text-zinc-900">
              Connexion
            </a>
            <a href="#" className="hover:text-zinc-900">
              Newsletter
            </a>
          </div>
        </div>
      </div>

      {/* 2. Header / navigation */}
      <header className="border-b border-zinc-100">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Nouvo Media Formation
          </a>
          <nav className="hidden items-center gap-7 text-[15px] text-zinc-700 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center gap-1 hover:text-zinc-950"
              >
                {link}
                {link === "Formations" && (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                    <path d="M12 15l-5-5h10l-5 5z" />
                  </svg>
                )}
              </a>
            ))}
            <span className="text-base">🇬🇧</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-600">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" strokeLinecap="round" />
            </svg>
            <span className="text-zinc-500">
              <SocialIcon type="yt" />
            </span>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* 3. Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-700 via-indigo-800 to-rose-700" />
          <div className="absolute inset-0 -z-10 bg-black/25" />
          <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-32 sm:py-40">
            <span className="mb-8 h-1 w-14 bg-white" />
            <h1 className="max-w-md text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Nouvo Media Formation
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/90">
              Des formations aux IA génératives pour chaque métier.
            </p>
            <div className="mt-10 flex max-w-md flex-wrap gap-3">
              {categories.map((c) => (
                <a
                  key={c}
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <UserIcon />
                  {c}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Blog */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Les dernières actualités du blog
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a) => (
              <article
                key={a.title}
                className="flex flex-col border border-zinc-200"
              >
                <div className={`h-40 bg-gradient-to-br ${a.from} ${a.to}`} />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15px] font-bold leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {a.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-3 text-sm font-medium text-blue-600 hover:underline"
                  >
                    Lire
                  </a>
                  <span className="mt-3 text-sm text-zinc-500">{a.date}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-black px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Découvrir le blog
            </a>
          </div>
          <hr className="mt-16 border-zinc-800" />
        </section>

        {/* 5. Apprendre et grandir ensemble */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              <div className="row-span-2 rounded bg-gradient-to-b from-orange-500 to-orange-700" />
              <div className="rounded bg-gradient-to-br from-amber-300 to-teal-500" />
              <div className="rounded bg-gradient-to-br from-amber-900 to-zinc-800" />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
                Apprendre et grandir ensemble
              </h2>
              <p className="mt-6 text-xl text-zinc-600">
                NMF vous accompagne dans le développement de nouvelles
                compétences.
              </p>
              <p className="mt-6 text-[15px] leading-7 text-zinc-500">
                Que ce soit par des outils d’IA génératives, des supports variés
                (texte, son, vidéo, image) ou par métiers, NMF offre à chacun une
                formation adaptée en IA générative. Développez vos compétences en
                IA et façonnez votre avenir professionnel grâce à des programmes
                personnalisés pour tous les domaines.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 font-bold hover:gap-3"
              >
                À propos <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* 6. Pourquoi choisir Nouvo Media Formation */}
        <section className="bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Pourquoi choisir Nouvo Media Formation
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 bg-zinc-900" />
            <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 text-zinc-900">
                    <FeatureIcon name={f.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-zinc-500">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Citation du fondateur */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mx-auto aspect-video w-full max-w-sm rounded bg-gradient-to-br from-lime-200 via-stone-400 to-stone-800" />
            <div>
              <blockquote className="font-serif text-2xl leading-relaxed text-zinc-500">
                J’ai créé Nouvo Media Formation pour aller plus loin et assurer la
                continuité dans l’apprentissage, tout en restant à jour sur les
                avancées technologiques. Notre formation est alignée sur les
                besoins des entreprises et des stagiaires, garantissant des
                compétences pertinentes et adaptées au marché.
              </blockquote>
              <div className="mt-8 h-1 w-14 bg-zinc-900" />
              <p className="mt-6 text-lg font-bold text-zinc-700">Brice Matter</p>
              <p className="text-sm text-zinc-500">
                Fondateur de Nouvo Media Formation
              </p>
            </div>
          </div>
        </section>

        {/* 8. NMF en chiffre */}
        <section className="bg-zinc-100">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
                Nouvo Media Formation en chiffre
              </h2>
              <p className="mt-6 text-xl text-zinc-600">
                NMF a accompagné plus de 600 stagiaires, avec des formations sur
                mesure et un suivi personnalisé.
              </p>
              <p className="mt-6 text-[15px] leading-7 text-zinc-500">
                En marketing et communication, en création de contenu, focus sur
                ChatGPT, Midjourney, Firefly, pour les ressources humaines, pour
                les managers, etc.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold shadow-sm hover:gap-3"
              >
                Voir le blog <ArrowIcon />
              </a>
            </div>
            <dl className="space-y-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-6">
                  <dt className="w-32 text-right text-5xl font-light tabular-nums">
                    {s.value}
                  </dt>
                  <dd className="max-w-[14rem] text-sm font-medium text-zinc-600">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 9. Ils nous font confiance */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Nous avons accompagné leurs collaborateurs
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-amber-400" />
          <div className="mt-16 grid grid-cols-2 items-center justify-items-center gap-12 sm:grid-cols-4">
            {clients.map((c) => (
              <span
                key={c}
                className="text-2xl font-black tracking-wide text-zinc-400"
              >
                {c}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="bg-zinc-950 text-zinc-400">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">
              Nouvo Media Formation
            </p>
            <p className="mt-3 text-sm leading-6">
              Des formations aux IA génératives pour chaque métier.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:text-white">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-start gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <SocialIcon type="in" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <SocialIcon type="yt" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto w-full max-w-6xl px-6 py-6 text-sm">
            © {new Date().getFullYear()} Nouvo Media Formation. Tous droits
            réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
