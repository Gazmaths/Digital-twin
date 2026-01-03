import Link from "next/link";

const quickLinks = [
  { href: "#summary", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

const strengthChips = [
  "End-to-end ML delivery",
  "GeoAI + Remote Sensing",
  "FastAPI / Streamlit",
  "AWS + Terraform",
  "Transformers / CV / NLP",
  "Explainability (SHAP)",
];

export default function ResumePage() {
  return (
    <main className="flex-1 bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white/70 backdrop-blur">
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />

          {/* CONTENT */}
          <div className="p-6 sm:p-10 lg:p-12">
            {/* TOP BAR */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border-b border-slate-200 pb-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  Gazali Agboola
                </h1>
                <h2 className="text-lg sm:text-xl text-blue-700 font-semibold mt-2">
                  AI Engineer • Machine Learning Engineer • Data Scientist • GeoAI Researcher
                </h2>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
                  <span>📍 Greensboro, NC</span>
                  <span>📞 +1 (779) 777-8515</span>

                  <a
                    className="text-blue-700 hover:underline"
                    href="mailto:agboolagazal@gmail.com"
                  >
                    📧 agboolagazal@gmail.com
                  </a>

                  <a
                    className="text-blue-700 hover:underline"
                    href="mailto:goagboola@aggies.ncat.edu"
                  >
                    📧 goagboola@aggies.ncat.edu
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gazal-agboola-351b44b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    🔗 LinkedIn
                  </a>

                  <a
                    href="https://github.com/gazmaths"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    🐙 GitHub
                  </a>
                </div>

                {/* Strength chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {strengthChips.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:pt-1">
                <a
                  href="/GO_Agboola_Resume.pdf"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:opacity-95 transition"
                >
                  Download PDF
                </a>

                <a
                  href="mailto:agboolagazal@gmail.com"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-4 py-2.5 font-semibold text-slate-900 hover:bg-white transition"
                >
                  Email
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-4 py-2.5 font-semibold text-slate-900 hover:bg-white transition"
                >
                  Ask my Digital Twin
                </Link>
              </div>
            </div>

            {/* Sticky quick nav */}
            <div className="sticky top-0 z-10 mt-6 -mx-6 sm:-mx-10 lg:-mx-12 px-6 sm:px-10 lg:px-12 py-3 bg-white/80 backdrop-blur border-y border-slate-200">
              <div className="flex flex-wrap gap-3">
                {quickLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-semibold text-slate-700 hover:text-blue-700 hover:underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* BODY */}
            <div className="mt-8 space-y-10">
              {/* Professional Summary */}
              <section id="summary">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Professional Summary
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Ph.D. Candidate in Data Science &amp; Analytics (GPA: 3.95/4.0) with hands-on experience
                  building machine learning and GeoAI solutions for disaster risk assessment, operational
                  decision support, and customer/credit analytics. Experienced in developing end-to-end
                  pipelines—from data engineering and feature building to model training (deep learning +
                  classical ML), explainability, and deployment (Streamlit/FastAPI, cloud, CI/CD). Strong
                  background in geospatial analytics and remote sensing, with a focus on transforming large,
                  multi-source datasets into reliable, insight-driven products.
                </p>
              </section>

              {/* EXPERIENCE */}
              <section id="experience">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Experience</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="text-xl font-bold text-slate-900">
                      Data Science Research Assistant
                    </h4>
                    <p className="text-blue-700 font-semibold">
                      North Carolina A&amp;T State University
                    </p>
                    <p className="text-slate-600 text-sm">
                      Aug 2022 – Present | Greensboro, NC
                    </p>
                    <ul className="mt-3 space-y-2 text-[15px] text-slate-700">
                      <li>
                        • Designed and deployed deep learning models for disaster risk assessment, achieving strong performance
                        (e.g., 93% F1-score) using transformer-based vision architectures.
                      </li>
                      <li>
                        • Built an Agentic AI chatbot for disaster vulnerability analysis by integrating OpenAI APIs, large-scale
                        geospatial datasets, and Streamlit for decision support and rapid insight retrieval.
                      </li>
                      <li>
                        • Developed ML pipelines and ensemble strategies to improve landslide susceptibility prediction (AUC-ROC up to 99%+).
                      </li>
                      <li>
                        • Collaborated with cross-functional teams on monitoring concepts for real-time alerts and analysis under uncertainty.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="text-xl font-bold text-slate-900">
                      Operations Data Analyst Intern (Incoming)
                    </h4>
                    <p className="text-blue-700 font-semibold">
                      Toshiba Global Commerce Solutions
                    </p>
                    <p className="text-slate-600 text-sm">
                      Jan 2026 – Apr 2026 | Durham, NC (Onsite / Hybrid)
                    </p>
                    <ul className="mt-3 space-y-2 text-[15px] text-slate-700">
                      <li>
                        • Build and automate operational KPI reporting by cleaning, validating, and transforming multi-source data into analysis-ready tables.
                      </li>
                      <li>
                        • Develop forecasting and performance-tracking dashboards to support operational planning and decision-making.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PROJECTS */}
              <section id="projects">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Selected Projects
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white/70">
                    <p className="font-semibold text-slate-900">
                      Disaster Risk Agent (GeoAI + LLMs)
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Agentic assistant integrating geospatial datasets with LLM-driven retrieval for real-time vulnerability analysis.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white/70">
                    <p className="font-semibold text-slate-900">
                      Sentiment Analysis with Transformers
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Fine-tuned Hugging Face models to extract insights from customer feedback and generate actionable summaries.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white/70">
                    <p className="font-semibold text-slate-900">
                      Credit Card Fraud Detection
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Built anomaly detection workflows to flag suspicious behavior and reduce false positives.
                    </p>
                  </div>
                </div>
              </section>

              {/* SKILLS */}
              <section id="skills">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Technical Skills
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-xl border border-slate-200 bg-white/70 p-5">
                    <h4 className="font-bold text-slate-900 mb-3">Languages &amp; Core</h4>
                    <ul className="text-slate-700 space-y-1 text-[15px]">
                      <li>• Python, R, SQL (Hive)</li>
                      <li>• JavaScript / TypeScript</li>
                      <li>• Data Structures &amp; Algorithms</li>
                      <li>• Statistical Computing &amp; EDA</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white/70 p-5">
                    <h4 className="font-bold text-slate-900 mb-3">ML &amp; AI</h4>
                    <ul className="text-slate-700 space-y-1 text-[15px]">
                      <li>• Scikit-learn, PyTorch, TensorFlow</li>
                      <li>• NLP, Transformers, LLM Fine-tuning</li>
                      <li>• Computer Vision (CNNs, ViTs)</li>
                      <li>• Vector DBs, RAG, Agentic Workflows</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white/70 p-5">
                    <h4 className="font-bold text-slate-900 mb-3">Geospatial / GeoAI</h4>
                    <ul className="text-slate-700 space-y-1 text-[15px]">
                      <li>• GeoPandas, Rasterio, Shapely, Folium</li>
                      <li>• Remote Sensing + Raster Analytics (DEM/terrain)</li>
                      <li>• ArcGIS / Web Mapping &amp; Dashboards</li>
                      <li>• PostGIS / Spatial SQL, GeoJSON, KML</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white/70 p-5">
                    <h4 className="font-bold text-slate-900 mb-3">Cloud, Data &amp; DevOps</h4>
                    <ul className="text-slate-700 space-y-1 text-[15px]">
                      <li>• AWS (S3, Lambda, CloudFront, API Gateway)</li>
                      <li>• Docker, Terraform (IaC), CI/CD</li>
                      <li>• BigQuery, Snowflake, PostgreSQL</li>
                      <li>• FastAPI, Next.js, React, Streamlit</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* EDUCATION */}
              <section id="education">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Education</h3>

                <div className="border-l-4 border-blue-600 pl-4 space-y-5">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Ph.D. — Data Science &amp; Analytics
                    </h4>
                    <p className="text-blue-700 font-semibold">
                      North Carolina A&amp;T State University
                    </p>
                    <p className="text-slate-600 text-sm">
                      Expected: Dec 2026 | GPA: 3.95/4.0
                    </p>
                    <p className="text-slate-700 text-sm mt-1">
                      Focus: Machine Learning, GeoAI, Disaster Risk Assessment, Predictive Modeling, Applied Analytics
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-900">University of Ilorin</h4>
                    <p className="text-blue-700 font-semibold">M.S. &amp; B.S. — Mathematics</p>
                    <ul className="mt-2 space-y-1 text-slate-700 text-sm">
                      <li>
                        • <span className="font-semibold">M.S.</span> — Dec 2015 | GPA: 3.66/4.0
                      </li>
                      <li>
                        • <span className="font-semibold">B.S.</span> — Jul 2013 | GPA: 3.54/4.0
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Awards */}
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Awards, Certifications &amp; Leadership
                </h3>
                <ul className="text-slate-700 space-y-2 text-[15px]">
                  <li>• HP Future of Work Academy (FOWA) Winner</li>
                  <li>• North Carolina ArcGIS Users’ Graduate Academic Excellence Award</li>
                  <li>• Thermo Fisher Scientific Innovation Challenge — First Position</li>
                  <li>
                    • Certifications: DeepLearning.AI Deep Learning Specialization; IBM Data Analyst; Google BI; NLP in Python;
                    Financial Engineering &amp; Risk Management
                  </li>
                  <li>• Leadership: President, ASPRS NCAT Chapter; Mentor Collective Ambassador</li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Gazali Agboola
        </footer>
      </div>
    </main>
  );
}
