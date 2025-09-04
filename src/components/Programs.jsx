import { Star, Heart, Moon, Smile, Timer, Gift, Map } from "lucide-react";

export default function Programs() {
  const blocks = [
    {
      title: "Little Explorers (4–8)",
      desc: "Short, fun adventures with simple breath tools that build calm bodies, flexible thinking, and gentle courage.",
      img: "/public/group-of-kids-laughing.png",
      tags: [
        { label: "Calm Corner", icon: <Smile className="h-4 w-4 text-emerald-500" /> },
        { label: "Zen Mode", icon: <Heart className="h-4 w-4 text-pink-500" /> },
        { label: "Sticker Badges", icon: <Gift className="h-4 w-4 text-violet-500" /> },
      ],
    },
    {
      title: "Brave Thinkers (7–10)",
      desc: "Mindful stories, focus quests, and kindness practices that build confidence and classroom teamwork.",
      img: "/public/little-explorers-mindfulness.png",
      tags: [
        { label: "Focus Timer", icon: <Timer className="h-4 w-4 text-blue-500" /> },
        { label: "Gratitude Notes", icon: <Heart className="h-4 w-4 text-rose-500" /> },
        { label: "Streak Rewards", icon: <Star className="h-4 w-4 text-yellow-500" /> },
      ],
    },
    {
      title: "Calm & Curious (11–14)",
      desc: "Longer mindful trainings, breathing drills, and sleep stories for deeper rest and emotional balance.",
      img: "/public/child-smiling-city-evening.png",
      tags: [
        { label: "Mindset Maps", icon: <Map className="h-4 w-4 text-green-500" /> },
        { label: "Sleep Stories", icon: <Moon className="h-4 w-4 text-indigo-500" /> },
        { label: "Goal Cards", icon: <Star className="h-4 w-4 text-yellow-500" /> },
      ],
    },
  ];

  return (
    <section id="programs" className="section py-8 md:py-12">
      <h2 className="reveal text-xl font-extrabold tracking-tight md:text-5xl">
        Programs for Every Age
      </h2>
      <p className="reveal mt-5 max-w-prose text-base md:text-[20px] font-semibold" style={{ color: 'var(--color-muted)' }}>
        Pick a track or mix and match. Each program grows with your child.
      </p>

      <div className="mt-6 grid gap-8 md:gap-16">
        {blocks.map((b, i) => (
          <div
            key={i}
            className="reveal grid items-center gap-6 md:gap-10 md:grid-cols-2"
          >
            {/* Image */}
            <div
              className={`card overflow-hidden h-full flex justify-center items-center ${
                i % 2 === 1 ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={b.img || "/placeholder.svg"}
                alt={b.title}
                className="h-full w-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div
              className={`flex flex-col justify-center ${
                i % 2 === 1 ? "md:order-1" : "md:order-2"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold">{b.title}</h3>
              <p className="mt-2 text-sm md:text-base font-semibold" style={{ color: 'var(--color-muted)' }}>
                {b.desc}
              </p>

              {/* Tags with icons */}
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {b.tags.map((t) => (
                  <span
                    key={t.label}
                    className="pill bg-slate-50 font-medium ring-1 ring-black/10 flex items-center gap-1" style={{ color: 'var(--color-ink)' }}
                  >
                    {t.icon}
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
