import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-7xl mx-auto py-10 px-6 text-center">
        <h2 className="font-semibold text-xl">Ahmed Ben Said</h2>

        <p className="mt-3 text-[var(--muted)]">{t("footer.role")}</p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/Ahmedbensaid11" target="_blank" rel="noreferrer">
            <Github />
          </a>

          <a href="https://www.linkedin.com/in/ahmed-ben-said-83844225b/" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>

          <a href="mailto:ahmed.ben.said660@gmail.com">
            <Mail />
          </a>
        </div>

        <p className="text-sm mt-8 text-[var(--muted)]">{t("footer.builtWith")}</p>
      </div>
    </footer>
  );
}