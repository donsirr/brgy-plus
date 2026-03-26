import Link from "next/link";

const nameFields = [
  {
    id: "first-name",
    label: "First Name",
    placeholder: "Enter your first name here.",
  },
  {
    id: "middle-name",
    label: "Middle Name",
    placeholder: "Enter your middle name here.",
  },
  {
    id: "last-name",
    label: "Last Name",
    placeholder: "Enter your last name here.",
  },
] as const;

export default function RegisterBarangayStepTwoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-5 sm:px-6 lg:px-8">
      <section className="w-full max-w-[58rem] rounded-[1.5rem] border border-white/60 bg-white/90 p-5 shadow-[0_20px_48px_rgba(64,45,148,0.18)] backdrop-blur sm:p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#7b72a5]">
              Register Barangay
            </p>
            <h1 className="text-[1.75rem] font-semibold tracking-tight text-[#171426] sm:text-[1.9rem]">
              Step 2. Barangay Captain Details
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6790]">
              Enter the chairman&apos;s personal details and developer-issued
              access code to validate this account as the barangay super admin.
            </p>
          </div>
          <div className="rounded-full bg-[#f1edff] px-4 py-2 text-sm font-semibold text-[#4b33ff]">
            2 of 2
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-5 border-b border-[#e8e1ff] pb-4 text-sm font-semibold">
          <span className="text-[#8e85b3]">1. Select Barangay</span>
          <span className="text-[#231a48]">2. Barangay Captain Details</span>
        </div>

        <form className="space-y-4.5">
          <div>
            <h2 className="text-base font-semibold text-[#231a48] sm:text-lg">
              Barangay Captain Details
            </h2>
          </div>

          <div className="grid gap-3.5 md:grid-cols-3">
            {nameFields.map((field) => (
              <label key={field.id} className="block">
                <span className="mb-2 block text-sm font-semibold text-[#231a48]">
                  {field.label}
                </span>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-2.5 text-sm text-[#1f1b2e] outline-none transition placeholder:text-[#a39aba] focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
                />
              </label>
            ))}
          </div>

          <div className="grid gap-3.5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#231a48]">
                Gender
              </span>
              <select
                defaultValue=""
                className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-2.5 text-sm text-[#1f1b2e] outline-none transition focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#231a48]">
                Date of Birth
              </span>
              <input
                type="date"
                className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-2.5 text-sm text-[#1f1b2e] outline-none transition focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#231a48]">
              Contact Number
            </span>
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-2.5 text-sm text-[#1f1b2e] outline-none transition placeholder:text-[#a39aba] focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#231a48]">
              Email
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-2.5 text-sm text-[#1f1b2e] outline-none transition placeholder:text-[#a39aba] focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#231a48]">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter your password here."
              className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-2.5 text-sm text-[#1f1b2e] outline-none transition placeholder:text-[#a39aba] focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#231a48]">
              Confirm Password
            </span>
            <input
              type="password"
              placeholder="Enter your password here."
              className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-2.5 text-sm text-[#1f1b2e] outline-none transition placeholder:text-[#a39aba] focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
            />
          </label>

          <div className="grid gap-3.5 md:grid-cols-[1.2fr_1fr]">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#231a48]">
                Valid ID
              </span>
              <input
                type="file"
                className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-[0.6rem] text-sm text-[#1f1b2e] outline-none transition file:mr-4 file:rounded-lg file:border-0 file:bg-[#f1edff] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#4b33ff] hover:file:bg-[#e7e0ff] focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#231a48]">
                Access Code
              </span>
              <input
                type="text"
                placeholder="Access Code"
                className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-2.5 text-sm text-[#1f1b2e] outline-none transition placeholder:text-[#a39aba] focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
              />
            </label>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-between">
            <Link
              href="/register-barangay/step-1"
              className="inline-flex items-center justify-center rounded-xl border border-[#ddd6ff] bg-white px-5 py-3 text-sm font-semibold text-[#2b2353] transition hover:border-[#aa9cff] hover:bg-[#f7f4ff]"
            >
              Go back
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,#5d46ff,#3f28e6)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_26px_rgba(82,58,227,0.28)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_30px_rgba(82,58,227,0.34)]"
            >
              Register
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
