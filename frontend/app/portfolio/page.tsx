import Image from "next/image";
import Link from "next/link";

/**
 * Portfolio page with embedded dashboards/demos.
 * - Tableau: iframe embed works well
 * - Loom: iframe embed works well
 * - Streamlit: often blocks iframe; we try embed + show a fallback button if blocked
 *
 * Tip: If an embed is blocked by X-Frame-Options / CSP, visitors will see a quick “Open Demo” button.
 */

type ProjectLink = { label: string; href: string; variant?: "primary" | "secondary" };
type Embed =
  | { kind: "tableau"; title: string; src: string; ratio?: number }
  | { kind: "iframe"; title: string; src: string; ratio?: number }
  | { kind: "loom"; title: string; src: string; ratio?: number }
  | { kind: "image"; title: string; src: string; alt: string };

type Project = {
  title: string;
  subtitle?: string;
  oneLiner: string;
  tags: string[];
  links: ProjectLink[];
  embeds?: Embed[];
};

const projectsAI: Project[] = [
  {
    title: "ML Classification Pipeline",
    subtitle: "GridSearch + Streamlit",
    oneLiner: "End-to-end ML workflow for preprocessing, training, tuning, and evaluation with a clean UI.",
    tags: ["Python", "Scikit-learn", "Streamlit", "ML Ops"],
    links: [
      { label: "GitHub", href: "https://github.com/Gazmaths/ML_classification_app", variant: "secondary" },
      { label: "Live App", href: "https://mlclassificationpipeline.streamlit.app/", variant: "primary" },
    ],
    embeds: [
      {
        kind: "iframe",
        title: "Embedded Streamlit Demo (if supported)",
        src: "https://mlclassificationpipeline.streamlit.app/?embed=true",
        ratio: 0.62,
      },
    ],
  },
  {
    title: "Interactive Data Analysis App",
    subtitle: "Streamlit",
    oneLiner: "Upload CSVs, run EDA, visualize correlations, and fit regression models with metrics.",
    tags: ["Python", "EDA", "Plotly", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/Gazmaths/data_analysis_app", variant: "secondary" },
      { label: "Live App", href: "https://gazal1app.streamlit.app/", variant: "primary" },
    ],
    embeds: [
      { kind: "iframe", title: "Embedded Streamlit Demo (if supported)", src: "https://gazal1app.streamlit.app/?embed=true", ratio: 0.62 },
    ],
  },
  {
    title: "CarMax Analytics",
    subtitle: "ML + Streamlit + BI",
    oneLiner: "Interactive analytics + ML to understand appraisal signals and predict customer switching behavior.",
    tags: ["Python", "Random Forest", "Streamlit", "BI"],
    links: [
      { label: "GitHub", href: "https://github.com/Gazmaths/carmax_analytics", variant: "secondary" },
      { label: "Live App", href: "https://carmaxanalytics.streamlit.app/", variant: "primary" },
    ],
    embeds: [
      { kind: "iframe", title: "Embedded Streamlit Demo (if supported)", src: "https://carmaxanalytics.streamlit.app/?embed=true", ratio: 0.62 },
      {
        kind: "loom",
        title: "Demo Walkthrough (Loom)",
        src: "https://www.loom.com/embed/93ea07059672493cb156ba00e0d2db31?sid=e5a9f021-cd57-453a-9aa8-51f4e1b4894d",
        ratio: 0.5625,
      },
    ],
  },
];

const projectsAnalytics: Project[] = [
  {
    title: "Google Fiber Repeat Caller Analytics",
    subtitle: "Tableau Dashboard",
    oneLiner: "BI dashboard to identify repeat-call drivers and market patterns for operational improvement.",
    tags: ["Tableau", "Analytics", "ETL", "Storytelling"],
    links: [
      {
        label: "Open Tableau",
        href: "https://public.tableau.com/views/FiberAnalytics_17559787036370/Dashboard1?:showVizHome=no&:embed=y&:toolbar=yes",
        variant: "primary",
      },
    ],
    embeds: [
      {
        kind: "tableau",
        title: "Embedded Tableau Dashboard",
        src: "https://public.tableau.com/views/FiberAnalytics_17559787036370/Dashboard1?:showVizHome=no&:embed=y&:toolbar=yes",
        ratio: 0.62,
      },
    ],
  },
  {
    title: "Minnesota Interstate Traffic Volume",
    subtitle: "Tableau + Executive Report",
    oneLiner: "Trend analysis across time, holidays, and conditions with an executive-ready narrative.",
    tags: ["Tableau", "EDA", "Visualization", "Executive Reporting"],
    links: [
      {
        label: "Open Tableau",
        href: "https://public.tableau.com/views/TrafficAnalysisExemplar/Dashboard3?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        variant: "primary",
      },
      {
        label: "Executive Report",
        href: "https://github.com/Gazmaths/Google-Business-Intelligence-Analytics/blob/main/Minnesota%20Interstate%20Traffic%20Volume%20Analysis.pptx",
        variant: "secondary",
      },
    ],
    embeds: [
      {
        kind: "tableau",
        title: "Embedded Tableau Dashboard",
        src: "https://public.tableau.com/views/TrafficAnalysisExemplar/Dashboard3?:showVizHome=no&:embed=y&:toolbar=yes",
        ratio: 0.62,
      },
      {
        kind: "image",
        title: "Dashboard Preview",
        src: "https://gazmaths.github.io/assets/images/Minnesota_dashboard.png",
        alt: "Minnesota Interstate Traffic Volume dashboard preview",
      },
    ],
  },
];

const projectsResearch: Project[] = [
  {
    title: "Optimizing Landslide Susceptibility Mapping",
    subtitle: "Peer-reviewed Paper",
    oneLiner: "Ensemble ML evaluation with strong predictive performance and interpretability-driven insights.",
    tags: ["Machine Learning", "Model Evaluation", "Ensembles", "Explainability"],
    links: [
      { label: "Read Paper", href: "https://www.sciencedirect.com/science/article/pii/S1574954124001250", variant: "primary" },
      {
        label: "Notebook",
        href: "https://github.com/Gazmaths/Landslide-detection-using-semantic-segmentation-algorithms/blob/main/Landslide%20Detection%20Using%20Semantic%20Segmentation%20Algorithms.ipynb",
        variant: "secondary",
      },
    ],
  },
  {
    title: "Credit Card Anomaly Detection",
    subtitle: "Notebook + Paper",
    oneLiner: "Supervised + unsupervised approaches for skewed fraud data with practical evaluation metrics.",
    tags: ["Anomaly Detection", "Imbalanced Data", "Python", "Modeling"],
    links: [
      {
        label: "Notebook",
        href: "https://github.com/Gazmaths/Credit-card-anomaly-detection-using-machine-learning-/blob/main/Anomalies_detection_in_credit_card_transactions.ipynb",
        variant: "secondary",
      },
      {
        label: "Paper",
        href: "https://drive.google.com/file/d/161G3yPrFjx5xYRpna_SIb3poLg6aMGTv/view?usp=drive_link",
        variant: "primary",
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex-1 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Portfolio</h1>
              <p className="text-gray-600 mt-2">
                Selected work with embedded demos and dashboards. (If an embed is blocked, use the “Open” button.)
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/resume"
                className="rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
              >
                View Resume
              </Link>
              <a
                href="https://github.com/gazmaths"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-300 px-4 py-2.5 font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gazal-agboola-351b44b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-300 px-4 py-2.5 font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#ai" className="text-sm font-semibold text-gray-700 hover:text-blue-700 hover:underline">
              🧠 AI Apps
            </a>
            <a href="#analytics" className="text-sm font-semibold text-gray-700 hover:text-blue-700 hover:underline">
              📊 Analytics
            </a>
            <a href="#research" className="text-sm font-semibold text-gray-700 hover:text-blue-700 hover:underline">
              📚 Research
            </a>
          </div>
        </header>

        {/* AI Applications */}
        <section id="ai" className="space-y-5">
          <SectionTitle title="🧠 AI Applications" subtitle="Live demos + code." />
          <div className="grid grid-cols-1 gap-6">
            {projectsAI.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* Analytics */}
        <section id="analytics" className="space-y-5">
          <SectionTitle title="📊 Data Science & Analytics" subtitle="Interactive dashboards and BI work." />
          <div className="grid grid-cols-1 gap-6">
            {projectsAnalytics.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* Research */}
        <section id="research" className="space-y-5">
          <SectionTitle title="📚 Research & Notebooks" subtitle="Papers and technical write-ups." />
          <div className="grid grid-cols-1 gap-6">
            {projectsResearch.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        <footer className="pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gazali Agboola
        </footer>
      </div>
    </main>
  );
}

/* ----------------------------- UI Components ----------------------------- */

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {subtitle ? <p className="text-gray-600 mt-1">{subtitle}</p> : null}
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        {/* Title row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
            {p.subtitle ? <p className="text-gray-700 font-semibold mt-1">{p.subtitle}</p> : null}
            <p className="text-gray-600 mt-2 leading-relaxed">{p.oneLiner}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  l.variant === "primary"
                    ? "rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
                    : "rounded-md border border-gray-300 px-4 py-2.5 font-semibold text-gray-900 hover:bg-gray-50 transition"
                }
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Embeds */}
        {p.embeds?.length ? (
          <div className="space-y-5 pt-2">
            {p.embeds.map((e, idx) => (
              <EmbedBlock key={`${p.title}-${idx}`} embed={e} fallbackHref={bestFallbackHref(p)} />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function bestFallbackHref(p: Project) {
  // Prefer a "Live App" / "Open Tableau" / "Read Paper" if present
  const preferred = ["Live App", "Open Tableau", "Read Paper", "Open Demo"];
  for (const label of preferred) {
    const hit = p.links.find((x) => x.label === label);
    if (hit) return hit.href;
  }
  return p.links[0]?.href ?? "#";
}

function EmbedBlock({ embed, fallbackHref }: { embed: Embed; fallbackHref: string }) {
  if (embed.kind === "image") {
    return (
      <div className="rounded-xl border overflow-hidden bg-white">
        <div className="p-4 border-b flex items-center justify-between gap-3">
          <p className="font-semibold text-gray-900">{embed.title}</p>
          <a
            href={fallbackHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            Open
          </a>
        </div>

        <div className="p-4">
          {/* remote images: next/image needs next.config.js domains; use <img> to keep it simple */}
          <img src={embed.src} alt={embed.alt} className="w-full rounded-lg border" />
        </div>
      </div>
    );
  }

  const ratio = embed.ratio ?? 0.62;

  return (
    <div className="rounded-xl border overflow-hidden bg-white">
      <div className="p-4 border-b flex items-center justify-between gap-3">
        <p className="font-semibold text-gray-900">{embed.title}</p>
        <a
          href={fallbackHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          Open
        </a>
      </div>

      <div className="p-4">
        <div className="relative w-full rounded-lg border overflow-hidden" style={{ paddingBottom: `${ratio * 100}%` }}>
          <iframe
            src={embed.src}
            className="absolute inset-0 h-full w-full"
            frameBorder={0}
            allowFullScreen
            // Some providers need extra allow attributes; harmless if not needed
            allow="clipboard-read; clipboard-write; fullscreen; autoplay"
          />
        </div>

        <p className="text-xs text-gray-500 mt-3">
          If the embed is blank, it’s likely blocked by the provider’s security headers. Use{" "}
          <a className="text-blue-700 hover:underline" href={fallbackHref} target="_blank" rel="noreferrer">
            Open
          </a>{" "}
          to view it directly.
        </p>
      </div>
    </div>
  );
}
