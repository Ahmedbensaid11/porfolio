import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {

        document.documentElement.classList.toggle("dark", dark);

        localStorage.setItem("theme", dark ? "dark" : "light");

    }, [dark]);

    return (

        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--surface)] transition"
        >

            {dark ? <Sun size={20} /> : <Moon size={20} />}

        </button>

    );

}