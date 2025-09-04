export default function Why() {
    return (
      <section id="why" className="section py-8 md:py-12">
        <h2 className="reveal text-xl font-extrabold tracking-tight md:text-5xl">Why Topmind Care?</h2>
        <p className="reveal mt-5 max-w-prose text-base md:text-[20px] font-semibold" style={{ color: 'var(--color-muted)' }}>
          Children learn best through play and stories. Our sessions blends gentle breathing, guided imagery, and music to mindfulness enjoyable and effective.
        </p>
  
        <div className="mt-6 grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-3">
          {[
            ["Story Meditations","Guided Adventures", "Short, age-wise journeys that help kids calm their bodies and name their feelings."],
            ["Anytime Calm","Toolkits for Big Feelings", "Quick \"reset\" audios for anger, worry. pre-exam jitters, and bedtime battles."],
            ["Parent Hub","Guides & Routines", "Weekly tips, printable charts, and simple routines you can use at home or school."],
          ].map(([topic,title, desc], i) => (
            <div key={i} className="reveal p-4 md:p-6 bg-slate-50 rounded-2xl shadow-[0_8px_24px_rgba(2,6,23,0.06)] ring-1 ring-black/5">
              <div className="pill bg-green-50 text-green-800 ring-1 ring-green-300 font-extrabold tracking-tight">{topic}</div>
              <h3 className="mt-2 text-lg md:text-[20px] font-extrabold">{title}</h3>
              <p className="mt-2 text-sm md:text-[16px] font-semibold" style={{ color: 'var(--color-muted)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  