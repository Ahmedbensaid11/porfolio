// src/components/home/Experience.jsx
import { useTranslation } from "react-i18next";
import experience from "../../data/experience";

export default function Experience() {
  const { t } = useTranslation();
  const months = t("months", { returnObjects: true });

  function formatDate(value) {
    if (value === "Present") return t("education.present");
    const [year, month] = value.split("-");
    return `${months[parseInt(month, 10) - 1]} ${year}`;
  }

  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold mb-12">{t("experience.title")}</h2>

      <div className="relative border-l border-[var(--border)] pl-8 space-y-12">
        {experience.map((job) => (
          <div key={job.id} className="relative">
            <span
              className={`absolute -left-[41px] top-1.5 w-3 h-3 rounded-full ${
                job.current ? "bg-[var(--foreground)]" : "bg-[var(--border)]"
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {t(`experience.items.${job.id}.position`)} · {job.company}
              </h3>
              <span className="text-sm text-[var(--muted)]">
                {formatDate(job.startDate)} — {formatDate(job.endDate)}
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] mt-1">
              {t(`experience.items.${job.id}.location`)}
            </p>

            <p className="mt-3 text-[var(--foreground)]/90">
              {t(`experience.items.${job.id}.longDescription`)}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md border border-[var(--border)] text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}