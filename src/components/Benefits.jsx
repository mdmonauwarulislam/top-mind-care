export default function Benefits() {
    const items = [
      ["Ad‑Free & Safe", "Child‑friendly design with no advertising or tracking."],
      ["Rewards that Motivate", "Streaks, badges, and gentle goals build healthy habits."],
      ["Offline Access", "Download favorites to listen or use on the go."],
      ["Sleep Mode", "Peaceful music and stories that help kids drift to rest."],
      ["Classroom Friendly", "Teacher packs with 5‑minute routines and printables."],
      ["Multi‑Child Profiles", "Personalized tracks for each child in the family."],
    ]
    return (
      <section className="section py-8 md:py-16">
        <h2 className="reveal text-xl font-extrabold tracking-tight md:text-5xl">Built for Kids, Loved by Parents</h2>
        <div className="mt-6 grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-3">
          {items.map(([t, d]) => (
            <div key={t} className="reveal p-4 md:p-6 bg-slate-50 rounded-2xl shadow-[0_8px_24px_rgba(2,6,23,0.06)] ring-1 ring-black/5">
              <h3 className="mt-2 text-lg md:text-[20px] font-extrabold">{t}</h3>
              <p className="mt-3 text-sm md:text-[16px] font-semibold" style={{ color: 'var(--color-muted)' }}>{d}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  