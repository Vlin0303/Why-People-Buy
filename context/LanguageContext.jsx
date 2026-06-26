"use client";

import { createContext, useContext, useState } from "react";

/**
 * LANGUAGE CONTEXT
 * ─────────────────────────────────────────────────────────────────
 * Provides the current UI language ("zh" | "en") to all components.
 * Wrap the app in <LanguageProvider> (done in app/Providers.jsx).
 * Access in any client component: const { lang, setLang } = useLanguage()
 * ─────────────────────────────────────────────────────────────────
 */

const LanguageContext = createContext({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }) {
  // Default to English; user can toggle to Chinese
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook: use in any "use client" component */
export function useLanguage() {
  return useContext(LanguageContext);
}
