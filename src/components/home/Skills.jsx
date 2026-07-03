import { Server, Code2, Database, Wrench } from "lucide-react";
import skillsData from "../../data/skills";
import Card from "../ui/Card";
import { useTranslation } from "react-i18next";

const ICONS = {
  Backend: Server,
  Frontend: Code2,
  Databases: Database,
  "Tools & DevOps": Wrench,
};

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold mb-12">{t("skills.title")}</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillsData.map((group) => {
          const Icon = ICONS[group.category] ?? Code2;
          return (
            <Card key={group.category}>
              <div className="flex items-center gap-2 mb-4">
                <Icon size={18} className="text-[var(--muted)]" />
                <h3 className="font-semibold text-lg">{t(`skills_categories.${group.category}`)}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-md text-[var(--foreground)]/80 bg-[var(--surface)] border border-[var(--border)]/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}