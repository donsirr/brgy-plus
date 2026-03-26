"use client";

import { useState } from "react";

type PanelMode = "register" | "staff" | "resident";

const panelContent: Record<
  PanelMode,
  {
    badge: string;
    title: string;
    description: string;
    primary: string;
    footer: string;
    footerAction: string;
    fields: Array<{
      id: string;
      label: string;
      placeholder: string;
      type?: string;
    }>;
  }
> = {
  register: {
    badge: "Chairman Access",
    title: "Create a barangay system",
    description:
      "Set up your barangay workspace, appoint staff access, and prepare resident services from one secured dashboard.",
    primary: "Create Barangay",
    footer: "Already managing a barangay?",
    footerAction: "Staff login",
    fields: [
      {
        id: "barangay",
        label: "Barangay name",
        placeholder: "Barangay San Isidro",
      },
      {
        id: "chairman",
        label: "Chairman full name",
        placeholder: "Hon. Juan Dela Cruz",
      },
      {
        id: "email",
        label: "Official email",
        placeholder: "captain@barangay.gov.ph",
        type: "email",
      },
      {
        id: "password",
        label: "Password",
        placeholder: "Create a secure password",
        type: "password",
      },
    ],
  },
  staff: {
    badge: "Staff Access",
    title: "Log in as barangay staff",
    description:
      "Access internal records, requests, and service operations with your assigned staff credentials.",
    primary: "Staff Login",
    footer: "Need a barangay workspace first?",
    footerAction: "Register barangay",
    fields: [
      {
        id: "staff-email",
        label: "Staff email",
        placeholder: "staff@barangay.gov.ph",
        type: "email",
      },
      {
        id: "staff-password",
        label: "Password",
        placeholder: "Enter your password",
        type: "password",
      },
    ],
  },
  resident: {
    badge: "Resident Access",
    title: "Log in as resident",
    description:
      "Track requests, announcements, and barangay services using your registered resident account.",
    primary: "Resident Login",
    footer: "New barangay deployment?",
    footerAction: "Register barangay",
    fields: [
      {
        id: "resident-id",
        label: "Resident email or ID",
        placeholder: "juan@email.com or BRGY-1029",
      },
      {
        id: "resident-password",
        label: "Password",
        placeholder: "Enter your password",
        type: "password",
      },
    ],
  },
};

const modeButtons: Array<{ key: PanelMode; label: string }> = [
  { key: "register", label: "Register Barangay" },
  { key: "staff", label: "Staff Login" },
  { key: "resident", label: "Resident Login" },
];

export default function Home() {
  const [mode, setMode] = useState<PanelMode>("register");
  const activePanel = panelContent[mode];

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
      <section className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 shadow-[0_28px_65px_rgba(64,45,148,0.22)] backdrop-blur md:grid-cols-[0.92fr_1.08fr]">
        <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[linear-gradient(155deg,#7cd8ff_0%,#5f6cff_18%,#4a23ea_40%,#c9dbff_100%)] px-7 py-7 text-white sm:px-10 sm:py-9">
          <div className="absolute inset-0">
            <div className="absolute -left-12 top-16 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-[-4.5rem] right-[-2.5rem] h-64 w-64 rounded-full bg-[#ede9ff]/50 blur-3xl" />
            <div className="absolute inset-y-0 right-8 w-24 bg-white/18 blur-2xl" />
          </div>

          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-4xl font-black leading-none">
            *
          </div>

          <div className="relative z-10 max-w-sm space-y-4">
            <p className="text-sm font-medium text-white/76">Chairman portal</p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Build your barangay&apos;s digital command center.
            </h1>
            <p className="max-w-xs text-sm leading-6 text-white/82 sm:text-base">
              Launch resident services, assign staff roles, and manage community
              requests in one place.
            </p>
          </div>
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,243,255,0.94))] px-6 py-7 sm:px-10 sm:py-9 lg:px-12">
          <div className="mx-auto max-w-xl">
            <div className="mb-8 flex flex-wrap gap-3">
              {modeButtons.map((button) => {
                const isActive = button.key === mode;

                return (
                  <button
                    key={button.key}
                    type="button"
                    onClick={() => setMode(button.key)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 ${
                      isActive
                        ? "bg-[#4b33ff] text-white shadow-[0_12px_25px_rgba(75,51,255,0.28)]"
                        : "border border-[#d8d1fb] bg-white text-[#5c547a] hover:border-[#b8acf8] hover:text-[#2f235f]"
                    }`}
                  >
                    {button.label}
                  </button>
                );
              })}
            </div>

            <div className="mb-8">
              <div className="mb-3 text-3xl font-black leading-none text-[#4b33ff]">
                *
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#7b72a5]">
                {activePanel.badge}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#171426] sm:text-[2.2rem]">
                {activePanel.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#6e6790] sm:text-[0.96rem]">
                {activePanel.description}
              </p>
            </div>

            <form className="space-y-4">
              {activePanel.fields.map((field) => (
                <label key={field.id} className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#231a48]">
                    {field.label}
                  </span>
                  <input
                    type={field.type ?? "text"}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-3 text-sm text-[#1f1b2e] outline-none transition placeholder:text-[#a39aba] focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
                  />
                </label>
              ))}

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-[linear-gradient(135deg,#5d46ff,#3f28e6)] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_14px_26px_rgba(82,58,227,0.28)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_30px_rgba(82,58,227,0.34)]"
              >
                {activePanel.primary}
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#ddd6fb]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#9a91ba]">
                quick access
              </span>
              <div className="h-px flex-1 bg-[#ddd6fb]" />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => setMode("register")}
                className="rounded-xl border border-[#ddd6ff] bg-white px-4 py-3 text-sm font-semibold text-[#2b2353] transition hover:border-[#aa9cff] hover:bg-[#f7f4ff]"
              >
                New Barangay
              </button>
              <button
                type="button"
                onClick={() => setMode("staff")}
                className="rounded-xl border border-[#ddd6ff] bg-white px-4 py-3 text-sm font-semibold text-[#2b2353] transition hover:border-[#aa9cff] hover:bg-[#f7f4ff]"
              >
                Staff Portal
              </button>
              <button
                type="button"
                onClick={() => setMode("resident")}
                className="rounded-xl border border-[#ddd6ff] bg-white px-4 py-3 text-sm font-semibold text-[#2b2353] transition hover:border-[#aa9cff] hover:bg-[#f7f4ff]"
              >
                Resident Portal
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-[#857ca9]">
              {activePanel.footer}{" "}
              <button
                type="button"
                onClick={() =>
                  setMode(mode === "register" ? "staff" : "register")
                }
                className="font-semibold text-[#4b33ff] transition hover:text-[#3119e6]"
              >
                {activePanel.footerAction}
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
