"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fffdfd] px-6 py-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rose-100/50 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-100/50 blur-[100px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-50/50 blur-[100px]" />

      {/* Floating decorations */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-[18%] animate-bounce text-xl text-rose-200">
          ♡
        </span>

        <span className="absolute left-[18%] top-[70%] animate-pulse text-sm text-violet-200">
          ✦
        </span>

        <span className="absolute right-[10%] top-[22%] animate-pulse text-lg text-pink-200">
          ✧
        </span>

        <span className="absolute bottom-[22%] right-[18%] animate-bounce text-xl text-rose-200">
          ♡
        </span>

        <span className="absolute left-[50%] top-[10%] text-xs text-pink-200">
          ✦
        </span>

        <span className="absolute bottom-[12%] right-[45%] text-xs text-violet-200">
          ✧
        </span>
      </div>

      {/* Main content */}
      <section className="relative z-10 w-full max-w-xl text-center">
        {/* Gift icon */}
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-pink-100/40 [animation-duration:3s]" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 shadow-[0_12px_40px_rgba(244,114,182,0.15)] transition-transform duration-500 hover:scale-110">
            <span className="text-6xl">🎁</span>
          </div>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
          A LITTLE SURPRISE FOR YOU
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-gray-900 sm:text-5xl">
          I have a gift for you.! ✨
        </h1>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          Nothing complicated...
          <br />
          just a small gift made with good vibes. 💗
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/sign-up")}
          className="cursor-pointer group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-full border border-rose-200 bg-white px-8 py-3.5 text-sm font-medium text-rose-400 shadow-[0_10px_35px_rgba(244,114,182,0.14)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-pink-300 hover:text-rose-500 hover:shadow-[0_15px_45px_rgba(244,114,182,0.25)] active:scale-95"
        >
          {/* Hover shine */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-pink-200/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative text-base transition-transform duration-300 group-hover:scale-125">
            🎁
          </span>

          <p className="relative ">Open Your Gift</p>

          <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        <p className="mt-6 text-[11px] tracking-[0.18em] text-gray-300">
          SOMETHING SMALL • JUST FOR YOU ♡
        </p>
      </section>
    </main>
  );
};

export default HomePage;
