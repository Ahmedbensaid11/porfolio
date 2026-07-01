import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {

    return (

        <footer
            className="border-t border-[var(--border)] mt-20"
        >

            <div
                className="max-w-7xl mx-auto py-10 px-6 text-center"
            >

                <h2 className="font-semibold text-xl">

                    Ahmed Ben Said

                </h2>

                <p className="mt-3 text-[var(--muted)]">

                    Software Engineering Intern

                </p>

                <div
                    className="flex justify-center gap-6 mt-6"
                >

                    <a
                        href="https://github.com/Ahmedbensaid11"
                        target="_blank"
                    >

                        <Github />

                    </a>

                    <a
                        href="https://www.linkedin.com/in/ahmed-bensaid-83844225b/"
                        target="_blank"
                    >

                        <Linkedin />

                    </a>

                    <a
                        href="mailto:ahmed.ben.said660@gmail.com"
                    >

                        <Mail />

                    </a>

                </div>

                <p
                    className="text-sm mt-8 text-[var(--muted)]"
                >

                    © 2026 Ahmed Ben Said. Built with React & Tailwind CSS.

                </p>

            </div>

        </footer>

    );

}