"use client";

export default function Header({ onStart }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="section flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="h-10 w-10 rounded-xl 
  bg-[radial-gradient(circle_at_top_left,#10b981,transparent_60%),radial-gradient(circle_at_top_right,#3b82f6,transparent_60%),radial-gradient(circle_at_bottom_right,#f97316,transparent_60%),radial-gradient(circle_at_bottom_left,#6d5cff,transparent_60%)]"
          ></span>

          <span className="text-xl font-extrabold">Topmind Care</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden items-end gap-6 text-lg md:flex font-semibold" style={{ color: 'var(--color-brand)' }}>
            <a href="#why" className="hover:text-slate-900">
              Why
            </a>
            <a href="#programs" className="hover:text-slate-900">
              Programs
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#forparents" className="hover:text-slate-900">
              For Parents
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
          <button className="btn btn-brand" onClick={onStart}>
            Start Free
          </button>
        </div>
      </div>
    </header>
  );
}
