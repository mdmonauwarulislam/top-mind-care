"use client"
import { Star } from "lucide-react"

function Stars() {
  return (
    <div className="flex text-balck/50 space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const cards = [
    [
      "“Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.”",
      "— Priya, Mom of 6-year-old",
    ],
    [
      "“The 5-minute ‘reset’ before homework has been a game changer for focus.”",
      "— Ravi, Dad of 10-year-old",
    ],
    [
      "“Our class uses the breathing games after lunch. Kids come back calm and ready.”",
      "— Anika, Grade 4 Teacher",
    ],
  ]

  return (
    <section className="section py-8 md:py-12">
      <h2 className="text-xl font-extrabold md:text-5xl text-gray-900">
        What Families Say
      </h2>

      <div className="mt-6 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        {cards.map(([quote, author]) => (
          <div
            key={quote}
            className="rounded-2xl bg-white p-4 md:p-6 shadow-sm ring-1 ring-gray-100"
          >
            <Stars />
            <p className="mt-3 text-sm md:text-base font-semibold text-gray-800">{quote}</p>
            <p className="mt-2 text-xs md:text-sm font-semibold text-gray-500">{author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
