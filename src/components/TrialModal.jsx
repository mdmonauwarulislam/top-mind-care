"use client"

import { useEffect } from "react"

export default function TrialModal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose()
    if (open) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 md:items-center"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="card w-full max-w-lg animate-in fade-in zoom-in duration-200">
        <div className="border-b border-black/5 p-4">
          <h3 className="text-lg font-extrabold">Start Free Trial</h3>
          <p className="mt-1 text-sm text-(--color-muted)">Tell us a few details and we’ll get you started.</p>
        </div>

        <form
          className="grid gap-3 p-4"
          onSubmit={(e) => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(e.currentTarget))
            console.log("[v0] trial-submission", data)
            e.currentTarget.reset()
            onClose()
            alert("Thanks! We’ll reach out shortly.")
          }}
        >
          <label className="grid gap-1 text-sm">
            Name
            <input
              name="name"
              required
              className="rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-brand/30 focus:ring-2"
            />
          </label>

          <label className="grid gap-1 text-sm">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-brand/30 focus:ring-2"
            />
          </label>

          <label className="grid gap-1 text-sm">
            Phone Number
            <input
              type="tel"
              name="phone"
              inputMode="tel"
              className="rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-brand/30 focus:ring-2"
            />
          </label>

          <label className="grid gap-1 text-sm">
            Class
            <input
              name="class"
              placeholder="e.g., Grade 3"
              className="rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-brand/30 focus:ring-2"
            />
          </label>

          <label className="grid gap-1 text-sm">
            Message
            <textarea
              name="message"
              rows="3"
              className="resize-y rounded-lg border border-black/10 bg-white px-3 py-2 outline-none ring-brand/30 focus:ring-2"
            ></textarea>
          </label>

          <div className="mt-1 flex items-center justify-end gap-2">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-brand">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
