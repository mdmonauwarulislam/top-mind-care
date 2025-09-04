
export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 text-xs">
      <div className="section flex flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span
            className="h-10 w-10 rounded-xl 
  bg-[radial-gradient(circle_at_top_left,#10b981,transparent_60%),radial-gradient(circle_at_top_right,#3b82f6,transparent_60%),radial-gradient(circle_at_bottom_right,#f97316,transparent_60%),radial-gradient(circle_at_bottom_left,#6d5cff,transparent_60%)]"
          ></span>
            <span className="font-extrabold text-xl text-gray-900">Topmind Care</span>
          </div>
          <p className="text-gray-500 mt-2 text-base font-semibold">
            Mindfulness for growing minds. © {new Date().getFullYear()} Mindery Kids.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start w-1/2 justify-between md:flex-row md:items-start gap-8">
          
          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-semibold text-base text-gray-700">Contact</span>
            <div className="flex gap-4 text-sm font-semibold text-(--color-brand)">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">YouTube</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">X</a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-semibold text-base text-gray-700">Legal</span>
            <div className="flex gap-4 text-sm font-semibold text-(--color-brand)">
              <a href="#privacy" className="hover:text-gray-900">Privacy</a>
              <a href="#terms" className="hover:text-gray-900">Terms</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
