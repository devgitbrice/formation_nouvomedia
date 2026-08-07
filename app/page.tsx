const formations = [
  {
    tag: "Réseaux sociaux",
    title: "Maîtriser les réseaux sociaux",
    desc: "Instagram, Facebook, LinkedIn, TikTok : créer, publier et animer une présence professionnelle qui attire vraiment.",
    points: [
      "Créer et optimiser ses profils",
      "Calendrier et ligne éditoriale",
      "Créer des visuels avec Canva",
      "Comprendre les statistiques",
    ],
  },
  {
    tag: "Bureautique",
    title: "Bureautique essentielle",
    desc: "Word, Excel et PowerPoint : gagner en aisance et en efficacité au quotidien, à son rythme.",
    points: [
      "Word : documents propres et pros",
      "Excel : tableaux, formules, tris",
      "PowerPoint : présentations claires",
      "Organisation des fichiers & emails",
    ],
  },
  {
    tag: "Communication digitale",
    title: "Communiquer en ligne",
    desc: "Bâtir une stratégie simple et cohérente pour se faire connaître et fidéliser sa communauté.",
    points: [
      "Définir sa cible et ses messages",
      "Rédiger pour le web",
      "Publicités simples (boosts)",
      "Mesurer ce qui fonctionne",
    ],
  },
];

const avantages = [
  {
    title: "Formations concrètes",
    desc: "On pratique dès la première heure, sur des cas réels et vos propres outils.",
  },
  {
    title: "Petits groupes",
    desc: "Un accompagnement personnalisé, en présentiel ou à distance.",
  },
  {
    title: "Tous niveaux",
    desc: "Débutant complet ou déjà à l'aise : le programme s'adapte à vous.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* En-tête */}
      <header className="sticky top-0 z-10 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#accueil" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              N
            </span>
            <span>
              Nouvo Media <span className="text-indigo-600">Formation</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
            <a className="transition-colors hover:text-indigo-600" href="#formations">
              Formations
            </a>
            <a className="transition-colors hover:text-indigo-600" href="#pourquoi">
              Pourquoi nous
            </a>
            <a className="transition-colors hover:text-indigo-600" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Nous contacter
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section
          id="accueil"
          className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28"
        >
          <p className="mb-4 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            Organisme de formation
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Montez en compétences sur les{" "}
            <span className="text-indigo-600">réseaux sociaux</span> et la{" "}
            <span className="text-indigo-600">bureautique</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Nouvo Media Formation accompagne les particuliers, indépendants et
            entreprises avec des formations pratiques, en présentiel ou à
            distance, adaptées à tous les niveaux.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#formations"
              className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-6 text-base font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Voir les formations
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-base font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Demander un devis
            </a>
          </div>
        </section>

        {/* Formations */}
        <section
          id="formations"
          className="border-t border-zinc-200/70 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
        >
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-tight">
              Nos formations
            </h2>
            <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
              Des programmes courts et opérationnels, personnalisables selon vos
              objectifs.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {formations.map((f) => (
                <article
                  key={f.title}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <span className="mb-3 inline-block w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {f.tag}
                  </span>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {f.desc}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 text-indigo-600">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section id="pourquoi" className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Pourquoi Nouvo Media Formation ?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {avantages.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-zinc-200/70 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
        >
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <div className="rounded-3xl bg-indigo-600 px-8 py-12 text-center text-white sm:px-16">
              <h2 className="text-3xl font-semibold tracking-tight">
                Prêt à vous lancer ?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-indigo-100">
                Parlez-nous de votre projet : nous construisons ensemble la
                formation qui vous correspond.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:contact@nouvomediaformation.fr"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-medium text-indigo-700 transition-colors hover:bg-indigo-50"
                >
                  contact@nouvomediaformation.fr
                </a>
                <a
                  href="tel:+33000000000"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
                >
                  01 00 00 00 00
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Nouvo Media Formation. Tous droits
            réservés.
          </span>
          <span>Réseaux sociaux · Bureautique · Communication digitale</span>
        </div>
      </footer>
    </div>
  );
}
