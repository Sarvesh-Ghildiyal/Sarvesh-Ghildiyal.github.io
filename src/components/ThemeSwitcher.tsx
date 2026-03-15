import { useState, useEffect, useCallback } from "react";
import { Palette, Sun, Moon } from "lucide-react";

type ThemeId = "amber" | "terminal" | "ocean" | "rose";

interface ThemeOption {
    id: ThemeId;
    label: string;
    dot: string;
}

const themes: ThemeOption[] = [
    { id: "amber", label: "Amber", dot: "bg-amber-500" },
    { id: "terminal", label: "Terminal", dot: "bg-emerald-500" },
    { id: "ocean", label: "Ocean", dot: "bg-sky-500" },
    { id: "rose", label: "Rosé", dot: "bg-rose-400" },
];

function getSystemMode(): "light" | "dark" {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function pickNewTheme(): ThemeId {
    const ids = themes.map((t) => t.id);
    const last = sessionStorage.getItem("sg-last-theme") as ThemeId | null;
    // Filter out the previous colour so we always get something fresh
    const candidates = last ? ids.filter((id) => id !== last) : ids;
    const picked = candidates[Math.floor(Math.random() * candidates.length)];
    sessionStorage.setItem("sg-last-theme", picked);
    return picked;
}

const ThemeSwitcher = () => {
    const [open, setOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<ThemeId>("amber");
    const [isDark, setIsDark] = useState(true);

    // Initialise: system preference for mode, random accent colour
    useEffect(() => {
        // --- Mode: respect system preference, or saved override ---
        const savedMode = localStorage.getItem("sg-mode") as
            | "light"
            | "dark"
            | null;
        const resolvedMode = savedMode ?? getSystemMode();
        setIsDark(resolvedMode === "dark");
        document.documentElement.setAttribute("data-mode", resolvedMode);

        // --- Accent colour: always random on fresh load ---
        const picked = pickNewTheme();
        setCurrentTheme(picked);
        document.documentElement.setAttribute("data-theme", picked);
    }, []);

    // Listen for OS preference changes (only if the user hasn't manually overridden)
    const handleSystemChange = useCallback(() => {
        if (!localStorage.getItem("sg-mode")) {
            const mode = getSystemMode();
            setIsDark(mode === "dark");
            document.documentElement.setAttribute("data-mode", mode);
        }
    }, []);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        mq.addEventListener("change", handleSystemChange);
        return () => mq.removeEventListener("change", handleSystemChange);
    }, [handleSystemChange]);

    // Simple binary toggle: light ↔ dark
    const toggleMode = () => {
        const next = isDark ? "light" : "dark";
        setIsDark(!isDark);
        document.documentElement.setAttribute("data-mode", next);
        localStorage.setItem("sg-mode", next);
    };

    const selectTheme = (id: ThemeId) => {
        setCurrentTheme(id);
        document.documentElement.setAttribute("data-theme", id);
    };

    return (
        <div className="relative flex items-center gap-1">
            {/* Dark / Light toggle */}
            <button
                onClick={toggleMode}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                title={isDark ? "Light mode" : "Dark mode"}
                className="p-1.5 rounded-md text-foreground/30 hover:text-accent transition-colors"
            >
                {isDark ? (
                    <Moon className="h-4 w-4" />
                ) : (
                    <Sun className="h-4 w-4" />
                )}
            </button>

            {/* Colour palette picker */}
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Switch accent colour"
                    className="p-1.5 rounded-md text-foreground/30 hover:text-accent transition-colors"
                >
                    <Palette className="h-4 w-4" />
                </button>

                {open && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setOpen(false)}
                        />
                        {/* Dropdown */}
                        <div className="absolute right-0 top-8 z-50 bg-card border border-foreground/10 rounded-lg shadow-xl p-2 min-w-[140px] fade-in">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => {
                                        selectTheme(theme.id);
                                        setOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                                        currentTheme === theme.id
                                            ? "text-accent bg-accent/10"
                                            : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
                                    }`}
                                >
                                    <span
                                        className={`w-2.5 h-2.5 rounded-full ${theme.dot}`}
                                    />
                                    {theme.label}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ThemeSwitcher;
