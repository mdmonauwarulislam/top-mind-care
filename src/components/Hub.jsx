"use client"
import { FileDown, CalendarDays, School } from "lucide-react"

export default function Hub() {
  return (
    <section className="section py-8 md:py-12">
      <div className="rounded-3xl bg-gradient-to-br from-purple-50 via-violet-50 to-cyan-50 shadow-sm p-8">
        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Parent & Teacher Hub
        </h3>
        <p className="mt-2 max-w-2xl text-base font-semibold text-gray-600">
          Practical guides, printable routines, and progress insights so you can support
          mindfulness at home and school.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href="#download-starter-kit"
            className="flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-3 md:px-4 py-2 text-sm md:text-base font-bold text-purple-600 hover:bg-purple-50 transition"
          >
            <FileDown className="h-5 w-5 text-blue-500" />
            Download Starter Kit (PDF)
          </a>
          <a
            href="#7-day-calm-plan"
            className="flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-3 md:px-4 py-2 text-sm md:text-base font-bold text-purple-600 hover:bg-purple-50 transition"
          >
            <CalendarDays className="h-5 w-5 text-red-500" />
            7-Day Calm Plan
          </a>
          <a
            href="#classroom-pack"
            className="flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-3 md:px-4 py-2 text-sm md:text-base font-bold text-purple-600 hover:bg-purple-50 transition"
          >
            <School className="h-5 w-5 text-green-500" />
            Classroom Pack
          </a>
        </div>
      </div>
    </section>
  )
}
