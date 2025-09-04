"use client"
import { Check } from "lucide-react"

export default function Pricing({ onStart }) {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for new explorers",
      price: "Free",
      features: ["5 guided meditations", "2 sleep stories", "Parent starter kit"],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Premium",
      desc: "Unlock full potential",
      price: "₹299/mo",
      features: ["Unlimited meditations", "Sleep stories & calming music", "Printable guides for parents"],
      cta: "Upgrade Now",
      highlight: true,
    },
    {
      name: "Family",
      desc: "For multiple kids",
      price: "₹499/mo",
      features: ["4 child profiles", "Rewards & streaks", "Classroom meditation pack"],
      cta: "Get Family Plan",
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="section py-8 md:py-12 bg-violet-50 rounded-2xl">
      <h2 className="text-center text-2xl md:text-5xl font-extrabold text-gray-900">Choose Your Plan</h2>
      <p className="mt-2 text-center text-lg font-semibold text-gray-600">
        Start free, cancel anytime. No hidden charges.
      </p>

      <div className="mt-8 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className="bg-slate-50 rounded-2xl shadow-sm p-4 md:p-6 flex flex-col items-center text-center hover:shadow-md transition"
          >
            <h3 className="text-xl md:text-lg font-extrabold text-gray-800">{p.name}</h3>
            <p className="mt-1 text-sm md:text-base font-semibold tracking-tight text-gray-500">{p.desc}</p>
            <div className="mt-3 text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--color-brand)' }}>{p.price}</div>

            <ul className="mt-4 space-y-2 text-sm md:text-base font-semibold text-gray-700 w-full">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onStart}
              className="mt-6 w-full btn btn-brand"
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
