"use client";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-border p-0.5 font-mono text-xs">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "rounded-[5px] px-2 py-1 transition-colors",
          lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ur")}
        className={cn(
          "rounded-[5px] px-2 py-1 transition-colors",
          lang === "ur" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
        )}
      >
        اردو
      </button>
    </div>
  );
}
