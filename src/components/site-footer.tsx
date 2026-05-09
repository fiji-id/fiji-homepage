"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Share2, Video, Music } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { SOCIAL_MEDIA } from "@/constants/social";

export default function SiteFooter() {
  const year = useMemo(() => new Date().getFullYear(), []);

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Share2 className="h-5 w-5" />;
      case "youtube":
        return <Video className="h-5 w-5" />;
      case "tiktok":
        return <Music className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#111111] text-white pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section - Modified for better blending */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A] text-[10px] font-bold tracking-widest transition group-hover:border-[#C62828]">
                FIJI
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/90">
                  FIJI
                </p>
                <p className="text-[10px] text-white/50">Martial Arts</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Japanese Ju-Jutsu training for all ages. Building confidence,
              discipline, and community through traditional practice.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Navigation
            </h3>
            <nav className="mt-5 flex flex-col gap-3">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-[#C62828]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Resources
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {["Programs", "Schedule", "Contact", "Gallery"].map((label) => (
                <li key={label}>
                  <Link
                    href={`/#${label.toLowerCase()}`}
                    className="text-sm text-white/70 transition hover:text-[#C62828]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Follow Us
            </h3>
            <div className="mt-5 flex gap-3">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-[#C62828] hover:bg-[#C62828] hover:text-white"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="space-y-1">
              <p className="text-xs font-medium text-white/70">
                © {year} FIJI (Firman Ishikawaryu Ju-Jutsu Indonesia)
              </p>
              <p className="text-[11px] text-white/40 uppercase tracking-wider">
                Japanese Martial Arts • Self-Defense • Excellence
              </p>
            </div>

            {/* Privacy and Terms stay right-aligned but cleared by padding */}
            <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-white/40">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
