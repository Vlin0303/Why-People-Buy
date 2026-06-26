"use client";

/**
 * PROVIDERS
 * Wraps the entire app in all context providers.
 * This is a client component; layout.jsx (server) imports it.
 * Add new providers here as the app grows.
 */

import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
