// src/components/home/About.jsx
import { useTranslation } from "react-i18next";
import { MapPin, GraduationCap, Briefcase, Globe } from "lucide-react";
import Card from "../ui/Card";

export default function About() {
  const { t } = useTranslation();

  const facts = [
    { icon: MapPin, text: t("about.location") },
    { icon: GraduationCap, text: t("about.student") },
    { icon: Briefcase, text: t("about.internships") },
    { icon: Globe, text: t("about.languages") },
  ];

  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold mb-12">{t("about.title")}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <p className="text-[var(--foreground)]/90 leading-relaxed">{t("about.bio")}</p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-4">{t("about.quickFacts")}</h3>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon size={16} className="shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}