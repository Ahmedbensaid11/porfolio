// src/components/home/Education.jsx
import education from "../../data/education";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  const months = t("months", { returnObjects: true });

  function formatDate(v) {
    if (v === "Present") return t("education.present");
    if (!v.includes("-")) return v; // year-only, e.g. "2020"
    const [year, month] = v.split("-");
    return `${months[parseInt(month, 10) - 1]} ${year}`;
  }

  return (
    <section id="education" className="py-24">
      <h2 className="text-3xl font-bold mb-12">{t("education.title")}</h2>
      <div className="relative border-l border-[var(--border)] pl-8 space-y-12">
        {education.map((item) => (
          <div key={item.id} className="relative">
            <span className={`absolute -left-[41px] top-1.5 w-3 h-3 rounded-full ${item.current ? "bg-[var(--foreground)]" : "bg-[var(--border)]"}`} />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{t(`education_data.items.${item.id}.degree`)}</h3>
              <span className="text-sm text-[var(--muted)]">
                {item.startDate === item.endDate
                  ? formatDate(item.startDate)
                  : `${formatDate(item.startDate)} — ${formatDate(item.endDate)}`}
              </span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-1">
              {t(`education_data.items.${item.id}.school`)} · {t(`education_data.items.${item.id}.location`)}
            </p>
            <p className="mt-3 text-[var(--foreground)]/90">
              {t(`education_data.items.${item.id}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}