import Link from "next/link";

const selectFields = [
  {
    id: "region",
    label: "Region",
    placeholder: "Select region",
  },
  {
    id: "province",
    label: "Province",
    placeholder: "Select province",
  },
  {
    id: "city",
    label: "City/Municipality",
    placeholder: "Select city/municipality",
  },
  {
    id: "barangay",
    label: "Barangay",
    placeholder: "Select barangay",
  },
] as const;

export default function RegisterBarangayStepOnePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <section className="w-full max-w-3xl rounded-[1.7rem] border border-white/60 bg-white/90 p-6 shadow-[0_22px_54px_rgba(64,45,148,0.2)] backdrop-blur sm:p-8">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#7b72a5]">
              Register Barangay
            </p>
            <h1 className="text-[2rem] font-semibold tracking-tight text-[#171426]">
              Step 1. Select Barangay
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6e6790]">
              Choose the official barangay location details before proceeding to
              the next registration step.
            </p>
          </div>
          <div className="rounded-full bg-[#f1edff] px-4 py-2 text-sm font-semibold text-[#4b33ff]">
            1 of 2
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-5 border-b border-[#e8e1ff] pb-4 text-sm font-semibold">
          <span className="text-[#231a48]">1. Select Barangay</span>
          <span className="text-[#8e85b3]">2. Barangay Captain Details</span>
        </div>

        <form className="space-y-5">
          {selectFields.map((field) => (
            <label key={field.id} className="block">
              <span className="mb-2 block text-sm font-semibold text-[#231a48]">
                {field.label}
              </span>
              <select
                defaultValue=""
                className="w-full rounded-xl border border-[#ddd6ff] bg-white px-4 py-3 text-sm text-[#1f1b2e] outline-none transition focus:border-[#7c66ff] focus:ring-4 focus:ring-[#7c66ff]/15"
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
              </select>
            </label>
          ))}

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-[#ddd6ff] bg-white px-5 py-3 text-sm font-semibold text-[#2b2353] transition hover:border-[#aa9cff] hover:bg-[#f7f4ff]"
            >
              Back to Landing
            </Link>
            <Link
              href="/register-barangay/step-2"
              className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,#5d46ff,#3f28e6)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_26px_rgba(82,58,227,0.28)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_30px_rgba(82,58,227,0.34)]"
            >
              Next Step
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
