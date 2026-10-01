"use client";

import { useState } from "react";

const HomePage = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

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
        {/* Step 0 */}
        {step === 0 && (
          <div className="animate-in fade-in zoom-in duration-700">
            <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full bg-pink-100/40 [animation-duration:3s]" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 shadow-[0_12px_40px_rgba(244,114,182,0.15)]">
                <span className="text-5xl">💌</span>
              </div>
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
              JUST A LITTLE SOMETHING
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-gray-900 sm:text-5xl">
              Wait...
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              I made something for you.
              <br />
              But there&apos;s one tiny problem...
            </p>

            <p className="mt-2 text-sm text-gray-400">
              you have to find it. <span className="text-rose-400">♡</span>
            </p>

            <button
              onClick={nextStep}
              className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-full border border-rose-200 bg-white px-7 py-3.5 text-sm font-medium text-rose-400 shadow-[0_10px_35px_rgba(244,114,182,0.14)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-pink-300 hover:text-rose-500 hover:shadow-[0_15px_45px_rgba(244,114,182,0.25)] active:scale-95"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-pink-200/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative text-base transition-all duration-300 group-hover:scale-125">
                💗
              </span>

              <span className="relative">Find it</span>

              <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
              ♡ 01
            </p>

            <div className="mt-8">
              <p className="text-2xl font-medium leading-10 tracking-tight text-gray-800 sm:text-3xl">
                There&apos;s something
                <br />
                For You
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-500">
                A little reminder
                <br />
                that you are genuinely appreciated. ♡
              </p>
            </div>

            <button
              onClick={nextStep}
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-rose-100 bg-white px-6 py-3 text-sm font-medium text-rose-400 shadow-[0_8px_30px_rgba(244,114,182,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50/50 hover:shadow-[0_12px_35px_rgba(244,114,182,0.18)]"
            >
              <span>See next</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ♡
              </span>
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
              ♡ 02
            </p>

            <div className="mt-8">
              <p className="text-2xl font-medium leading-10 tracking-tight text-gray-800 sm:text-3xl">
                You are beautiful.
              </p>

              <div className="my-7 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-rose-100" />

                <span className="text-rose-300">✦</span>

                <span className="h-px w-12 bg-rose-100" />
              </div>

              <p className="text-lg leading-8 text-gray-500">
                And believe it,
                <br />
                you really are.
                <br />
                Never forget that. ♡
              </p>
            </div>

            <button
              onClick={nextStep}
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-rose-100 bg-white px-6 py-3 text-sm font-medium text-rose-400 shadow-[0_8px_30px_rgba(244,114,182,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50/50 hover:shadow-[0_12px_35px_rgba(244,114,182,0.18)]"
            >
              <span>One more thing</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ✨
              </span>
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
              ♡ 03
            </p>

            <div className="mt-8">
              <p className="text-2xl font-medium leading-10 tracking-tight text-gray-800 sm:text-3xl">
                You are also a good person.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-500">
                Your kindness,
                <br />
                your little moments,
                <br />
                and the way you treat people
                <br />
                make you more special than you think.
              </p>
            </div>

            <button
              onClick={nextStep}
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-rose-100 bg-white px-6 py-3 text-sm font-medium text-rose-400 shadow-[0_8px_30px_rgba(244,114,182,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50/50 hover:shadow-[0_12px_35px_rgba(244,114,182,0.18)]"
            >
              <span>Okay... last one</span>

              <span className="transition-transform duration-300 group-hover:scale-125">
                💗
              </span>
            </button>
          </div>
        )}

        {/* Final message */}
        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full bg-pink-100/40 [animation-duration:3s]" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 shadow-[0_12px_40px_rgba(244,114,182,0.15)]">
                <span className="animate-pulse text-4xl">💗</span>
              </div>
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-rose-400">
              SO... HERE&apos;S THE THING
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-gray-900 sm:text-5xl">
              You deserve to be appreciated.
            </h1>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-rose-200" />

              <span className="text-sm text-rose-300">♡</span>

              <span className="h-px w-16 bg-gradient-to-l from-transparent to-rose-200" />
            </div>

            <p className="text-lg leading-8 text-gray-500">
              So keep being yourself,
              <br />
              keep smiling,
              <br />
              and never forget how wonderful you are.
            </p>

            <p className="mt-8 text-sm leading-7 text-gray-400">
              Anyway...
              <br />
              just wanted you to know that.{" "}
              <span className="text-rose-400">♡</span>
            </p>

            <div className="mt-9">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/80 px-5 py-2.5 text-sm font-medium text-rose-400 shadow-[0_8px_30px_rgba(244,114,182,0.08)] backdrop-blur-sm">
                Made with HRIDOY...
                <span>🤍</span>
              </span>
            </div>

            <p className="mt-12 text-[11px] tracking-[0.2em] text-gray-400">
              Made with HRIDOY... ♡
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
