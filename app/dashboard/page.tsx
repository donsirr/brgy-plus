import Link from "next/link";

const overviewCards = [
  {
    label: "Total Residents",
    value: "4,286",
    delta: "+138 this quarter",
  },
  {
    label: "Total Households",
    value: "1,042",
    delta: "+24 newly registered",
  },
  {
    label: "Registered Voters",
    value: "2,918",
    delta: "68.1% of residents",
  },
  {
    label: "Senior Citizens",
    value: "412",
    delta: "9.6% of population",
  },
] as const;

const demographicGroups = [
  { label: "Male", value: 2117, width: "49.4%" },
  { label: "Female", value: 2089, width: "48.8%" },
  { label: "Prefer not to say", value: 80, width: "1.8%" },
] as const;

const employmentGroups = [
  { label: "Employed", value: "2,145", width: "64%" },
  { label: "Self-employed", value: "624", width: "18%" },
  { label: "Unemployed", value: "398", width: "12%" },
  { label: "Students / Others", value: "201", width: "6%" },
] as const;

const ageGroups = [
  { label: "Children (0-12)", value: "846", width: "20%" },
  { label: "Youth (13-17)", value: "452", width: "11%" },
  { label: "Adults (18-59)", value: "2,576", width: "60%" },
  { label: "Seniors (60+)", value: "412", width: "9%" },
] as const;

const specialGroups = [
  { label: "PWD", value: "126" },
  { label: "Solo Parents", value: "94" },
  { label: "4Ps Beneficiaries", value: "318" },
  { label: "Indigent Families", value: "173" },
] as const;

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-[1.7rem] border border-white/60 bg-white/88 px-6 py-6 shadow-[0_22px_54px_rgba(64,45,148,0.18)] backdrop-blur sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7b72a5]">
                Barangay Dashboard
              </p>
              <h1 className="mt-2 text-[2rem] font-semibold tracking-tight text-[#171426]">
                Community statistics overview
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6e6790]">
                Monitor resident and household totals, then review demographic
                trends that can guide planning, budget allocation, and barangay
                programs.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-xl border border-[#ddd6ff] bg-[#f8f5ff] px-4 py-3 text-sm font-medium text-[#5e5681]">
                Demo captain session
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,#5d46ff,#3f28e6)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_26px_rgba(82,58,227,0.24)] transition hover:translate-y-[-1px]"
              >
                Log out
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card) => (
            <article
              key={card.label}
              className="rounded-[1.4rem] border border-white/60 bg-white/88 p-5 shadow-[0_18px_40px_rgba(64,45,148,0.12)] backdrop-blur"
            >
              <p className="text-sm font-medium text-[#6e6790]">{card.label}</p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-[#171426]">
                {card.value}
              </p>
              <p className="mt-2 text-sm font-medium text-[#4b33ff]">
                {card.delta}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[1.5rem] border border-white/60 bg-white/88 p-6 shadow-[0_18px_40px_rgba(64,45,148,0.12)] backdrop-blur">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7b72a5]">
                Demographics
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[#171426]">
                Gender and employment breakdown
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold text-[#231a48]">
                  Gender
                </p>
                <div className="space-y-4">
                  {demographicGroups.map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-[#4d456f]">{item.label}</span>
                        <span className="font-semibold text-[#231a48]">
                          {item.value}
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full bg-[#efeaff]">
                        <div
                          className="h-2.5 rounded-full bg-[linear-gradient(90deg,#6d57ff,#3f28e6)]"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-[#231a48]">
                  Employment
                </p>
                <div className="space-y-4">
                  {employmentGroups.map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-[#4d456f]">{item.label}</span>
                        <span className="font-semibold text-[#231a48]">
                          {item.value}
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full bg-[#efeaff]">
                        <div
                          className="h-2.5 rounded-full bg-[linear-gradient(90deg,#8ad3ff,#5b63ff)]"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-white/60 bg-white/88 p-6 shadow-[0_18px_40px_rgba(64,45,148,0.12)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7b72a5]">
              Planning Data
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#171426]">
              Age groups and special sectors
            </h2>

            <div className="mt-5 space-y-4">
              {ageGroups.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-[#4d456f]">{item.label}</span>
                    <span className="font-semibold text-[#231a48]">
                      {item.value}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#efeaff]">
                    <div
                      className="h-2.5 rounded-full bg-[linear-gradient(90deg,#7fd6ef,#4b33ff)]"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {specialGroups.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.1rem] border border-[#e6e0ff] bg-[#faf8ff] p-4"
                >
                  <p className="text-sm text-[#6e6790]">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#171426]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
