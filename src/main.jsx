import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


export default function Mount() {
  // Progressive reveal on scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"))
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return <App />
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Mount />
  </StrictMode>
)
