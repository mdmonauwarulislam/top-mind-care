"use client";

export default function Hero({ onStart }) {
  return (
    <section className="section grid gap-6 py-8 md:grid-cols-[1.15fr_.95fr] md:py-16 lg:py-20">
      <div className="flex flex-col justify-center gap-3">
        <div className="flex items-center text-sm font-bold">
          <span className=" py-1 px-3 rounded-full bg-violet-50 text-violet-700 ring-1 ring-violet-200">
            🌈 Calm Minds, Happy Hearts
          </span>
        </div>
        <h1 className="text-3xl font-extrabold leading-none md:text-4xl lg:text-6xl">
          Mindfulness & Meditation for Kids (4–14)
        </h1>
        <p className="max-w-prose text-[18px] font-semibold" style={{ color: 'var(--color-muted)' }}>
          Fun, story‑based meditations that build focus, kindness, and
          confidence. Safe, ad‑free, and crafted with child-development experts.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2">
          <button className="btn btn-brand" onClick={onStart}>
            Start Free Trial
          </button>
          <button className="btn btn-green">Explore Programs</button>
        </div>

        <div className="mt-4 grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4 w-full">
          {[
            { icon: "🧠", label: "Improves", text: "Focus" },
            { icon: "😊", label: "Reduces", text: "Stress" },
            { icon: "💤", label: "Better", text: "Sleep" },
            { icon: "❤️", label: "Builds", text: "Empathy" },
          ].map((item) => (
            <div
              key={item.text}
              className="card flex items-center justify-evenly px-3 md:px-4 py-3 md:py-4 text-center gap-2"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex flex-col items-start leading-0">
                <span className="text-sm font-semibold text-gray-500">{item.label}</span>
                <span className="text-2xl font-extrabold text-gray-900">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="relative reveal">
  {/* Background image */}
  <div className="w-full overflow-hidden rounded-2xl bg-slate-100">
    <img
      src="/child-on-city-balcony-at-sunset.png"
      alt="Kids mindfulness card preview"
      className="h-full w-full object-cover"
      loading="lazy"
    />
  </div>

  {/* Tilted floating card */}
  <div className="absolute bottom-4 left-2 md:bottom-18 md:-left-14 card p-3 md:p-4 w-64 md:w-80 rotate-[-3deg]">
    <h3 className="font-extrabold text-base md:text-lg text-gray-900 mb-2">Today's Journey</h3>
    <ul className="space-y-1 text-sm md:text-[18px] font-semibold list-disc leading-none text-gray-500 pl-6 md:pl-10">
      <li>🌬️ Dragon Breath (3 min)</li>
      <li>🦋 Butterfly Body Scan (5 min)</li>
      <li>🌙 Sleep Story: Star Boat (7 min)</li>
    </ul>
  </div>
</aside>

    </section>
  );
}
