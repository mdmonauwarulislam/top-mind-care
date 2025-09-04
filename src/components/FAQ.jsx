"use client"

export default function FAQ() {
  const qas = [
    ["What ages is this for?", "Suitable for kids aged 4–12 years."],
    ["How long are the sessions?", "Each session is between 3 to 10 minutes."],
    [
      "Is it safe and ad-free?",
      "Yes. It’s designed for children with no ads, strong privacy, and parent controls.",
    ],
    ["Can schools use it?", "Yes, schools can integrate it easily for classrooms."],
  ]

  return (
    <section id="faq" className="section py-8 md:py-12">
      <h2 className="text-xl font-extrabold md:text-5xl tracking-tight text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="mt-6 rounded-2xl border border-gray-100 bg-white divide-y divide-gray-100">
        {qas.map(([q, a], i) => (
          <div
            key={i}
            className="group p-3 md:p-4 cursor-pointer"
          >
            <p className="font-semibold text-base md:text-[20px] text-gray-900">{q}</p>
            <p className="mt-2 text-sm md:text-lg font-medium text-gray-600 hidden group-hover:block transition">
              {a}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
