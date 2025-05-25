import { ArrowUpRight, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Zenbud",
      description: "All-in-one study companion for students.",
      category: "Mobile App",
      year: "2025",
      image: "/images/zenbud.png",
      color: "bg-[#296089]",
      textColor: "text-[#f0f2f4]",
      date: "March,2025",
      slug: "zenbud"
    },
    {
      title: "Zenit",
      description: "NUST student resource hub for past papers, assignments, and more.",
      category: "Web App",
      year: "2025",
      image: "/images/zenit.png",
      color: "bg-[#296089]",
      textColor: "text-[#f0f2f4]",
      date: "May,2025",
      slug: "zenit"
    },
    {
      title: "Project Shaoor",
      description: "Bridging the educational gap for orphanages with live and scalable learning.",
      category: "EdTech Platform",
      year: "Upcoming",
      image: "/images/shaoor.png",
      color: "bg-[#296089]",
      textColor: "text-[#f0f2f4]",
      date: "Upcoming",
      slug: "shaoor"
    },
    {
      title: "Cight Browser",
      description: "Hands-free, AI-powered web browsing and voice navigation.",
      category: "AI Browser",
      year: "Upcoming",
      image: "/images/cightbrowser.png",
      color: "bg-[#296089]",
      textColor: "text-[#f0f2f4]",
      date: "Upcoming",
      slug: "cight"
    },
    {
      title: "Alcranium",
      description: "Ultimate productivity hub for students—tasks, AI, calendar, and more.",
      category: "Productivity Platform",
      year: "Upcoming",
      image: "/images/alcranium.png",
      color: "bg-[#296089]",
      textColor: "text-[#f0f2f4]",
      date: "Upcoming",
      slug: "alcranium"
    },
    {
      title: "KAROBAR BOX",
      description: "Seamless payment verification for merchants—UI design for a sound box that works with all major banking apps and Raast integration.",
      category: "Fintech UI",
      year: "Upcoming",
      image: "/images/karobarbox.png",
      color: "bg-[#296089]",
      textColor: "text-[#f0f2f4]",
      date: "Upcoming",
      slug: "karobarbox"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0b334f]">
      {/* Header */}
      <div className="px-6 pt-6">
        <Navbar />
      </div>

      {/* Header Section */}
      <div className="px-6 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-[#f0f2f4]">
            Our Projects
          </h1>
          <p className="text-2xl text-[#f0f2f4]/80 max-w-3xl">
            Explore our portfolio of innovative digital solutions and creative designs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="mb-12 flex justify-end">
            <div className="relative">
              <Search className="w-5 h-5 text-[#f0f2f4] absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full md:w-64 pl-12 pr-4 py-2 rounded-full bg-[#f0f2f4]/10 border border-[#f0f2f4]/20 text-[#f0f2f4] placeholder-[#f0f2f4]/50 focus:outline-none focus:ring-2 focus:ring-[#f0f2f4]/30 transition-all"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.title} href={`/projects/${project.slug}`}>
                <div
                  className="relative overflow-hidden rounded-2xl h-96 w-full group cursor-pointer border border-dashed border-[#f3f4f6]"
                  style={{ minHeight: '22rem', borderWidth: '1px', borderStyle: 'dashed', borderColor: '#f3f4f6', borderRadius: '1rem', borderImage: 'none', borderSpacing: 0, boxSizing: 'border-box' }}
                >
                  <img
                    src={project.image}
                    alt={project.title + ' project image'}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[95%] rounded-2xl bg-black/70 backdrop-blur-sm px-6 py-2 flex flex-col items-start shadow-lg"
                    style={{ background: 'rgba(0,0,0,0.7)' }}
                  >
                    <p className="text-xs font-medium text-[#f0f2f4]/80 mb-0.5">{project.date}</p>
                    <h3 className="text-base md:text-lg font-black text-[#f0f2f4] mb-0.5">{project.title}</h3>
                    <span className="text-[#f0f2f4] text-xs md:text-sm font-medium">{project.description}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24">
            <Card className="bg-[#296089] border-none">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-black mb-6 text-[#f0f2f4]">Have a Project in Mind?</h2>
                <p className="text-xl mb-8 text-[#f0f2f4]/80 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#f0f2f4] text-[#243342] font-bold rounded-full hover:opacity-90 transition-opacity"
                >
                  Get in Touch <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}
