export default function Comparison() {
  const rows = [
    {
      feature: "Child-Friendly Guided Meditations",
      us: { ok: true, text: "Story-based, fun & short" },
      other: { ok: false, text: "Generic adult content" },
    },
    {
      feature: "Safe & Ad-Free Environment",
      us: { ok: true, text: "100% secure for kids" },
      other: { ok: false, text: "Ads & distractions" },
    },
    {
      feature: "Age-Specific Programs",
      us: { ok: true, text: "Tailored for 4–14" },
      other: { ok: false, text: "One-size-fits-all" },
    },
    {
      feature: "Parent & Teacher Support",
      us: { ok: true, text: "Guides, printables, progress insights" },
      other: { ok: false, text: "Limited or none" },
    },
  ];

  return (
    <section className="section py-8 md:py-12">
      <h2 className="reveal text-xl font-extrabold md:text-3xl">
        Why Choose Topmind Over Others?
      </h2>

      <div className="reveal mt-6 overflow-x-auto overflow-hidden rounded-2xl ring-1 ring-black/10">
        <table className="min-w-full bg-white text-xs md:text-sm lg:text-base">
          <thead className="bg-violet-50 text-left">
            <tr>
              <th className="px-2 md:px-4 py-3 font-bold text-left">Feature</th>
              <th className="px-2 md:px-4 py-3 font-bold text-violet-600">
                Topmind
              </th>
              <th className="px-2 md:px-4 py-3 font-bold text-rose-600">
                Other Apps
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {rows.map((row) => (
              <tr key={row.feature}>
                {/* Feature */}
                <td className="px-2 md:px-4 py-3 md:py-4 font-semibold text-slate-700">
                  {row.feature}
                </td>

                {/* Our App */}
                <td className="px-2 md:px-4 py-3 md:py-4">
                  <span
                    className={`flex items-center gap-1 md:gap-2 font-semibold text-xs md:text-sm ${
                      row.us.ok ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {row.us.ok ? "✅" : "❌"} {row.us.text}
                  </span>
                </td>

                {/* Other Apps */}
                <td className="px-2 md:px-4 py-3 md:py-4">
                  <span
                    className={`flex items-center gap-1 md:gap-2 font-semibold text-xs md:text-sm ${
                      row.other.ok ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {row.other.ok ? "✅" : "❌"} {row.other.text}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
