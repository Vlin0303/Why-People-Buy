import { Suspense } from "react";
import SearchClient from "./SearchClient";

export const metadata = {
  title: "Search — WPB Lab",
  description: "Search brands, psychology, campaigns, and frameworks across WPB Lab.",
};

function SearchFallback() {
  return (
    <main className="pt-20 pb-24">
      <div className="container-wide max-w-3xl">
        <div className="relative mb-12">
          <div className="w-full py-3 border-b border-border" />
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchClient />
    </Suspense>
  );
}
