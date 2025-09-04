"use client"

export default function FinalCTA() {
  return (
    <section className="section py-8 md:py-12">
      <div className="rounded-3xl bg-gradient-to-r from-purple-50 to-cyan-50 shadow-md px-4 py-6 md:px-10 md:py-12 gap-6 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Left content */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Start Your Child’s Mindfulness Journey
          </h3>
          <p className="mt-2 text-base md:text-lg font-semibold text-gray-600">
            Try it free. Build calm, focus, and kindness—one small practice a day.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <button className="btn btn-brand">
            Create Account
          </button>
          <button className="btn btn-green">
            Download App
          </button>
        </div>
      </div>
    </section>
  )
}
