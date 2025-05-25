import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="border border-secondary-main/50 border-dashed rounded-xl p-8">
        <h3 className="text-3xl font-black mb-8 text-[#f0f2f4]">Socials</h3>
        <div className="space-y-4">
          <div className="border-b border-dotted border-white/40 pb-4">
            <a
              href="https://www.linkedin.com/in/faseeh06/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between hover:opacity-80 transition-colors font-bold text-lg group text-[#f0f2f4]"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          <div className="border-b border-dotted border-white/40 pb-4">
            <a
              href="https://www.instagram.com/itx._.faseeh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between hover:opacity-80 transition-colors font-bold text-lg group text-[#f0f2f4]"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          <div className="border-b border-dotted border-white/40 pb-4">
            <a
              href="https://www.faseeh.zenstudios.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between hover:opacity-80 transition-colors font-bold text-lg group text-[#f0f2f4]"
            >
              <span>Portfolio Site</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      <div className="border border-secondary-main/50 border-dashed rounded-xl p-8">
        <h3 className="text-3xl font-black mb-8 text-[#f0f2f4]">Site</h3>
        <div className="space-y-4">
          <div className="border-b border-dotted border-white/40 pb-4">
            <Link
              href="/contact"
              className="flex items-center justify-between hover:opacity-80 transition-colors font-bold text-lg group text-[#f0f2f4]"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="border-b border-dotted border-white/40 pb-4">
            <Link
              href="/projects"
              className="flex items-center justify-between hover:opacity-80 transition-colors font-bold text-lg group text-[#f0f2f4]"
            >
              <span>Projects</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="border-b border-dotted border-white/40 pb-4">
            <Link
              href="/privacy"
              className="flex items-center justify-between hover:opacity-80 transition-colors font-bold text-lg group text-[#f0f2f4]"
            >
              <span>Privacy Policy</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 