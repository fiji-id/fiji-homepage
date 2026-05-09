import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#111111] text-white/90 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-xs uppercase tracking-widest text-[#C62828]">
          Last Updated: {lastUpdated}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/70">
          {children}
        </div>

        {/* Static Back Button - Standard Website Style */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C62828] hover:bg-[#C62828] hover:shadow-[0_0_20px_rgba(198,40,40,0.3)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
