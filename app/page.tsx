import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header and Hero Section - Light Background */}
      <div className="bg-main pb-16">
        {/* Header */}
        <div className="px-6 pt-6">
          <Navbar />
        </div>
        {/* Add top padding to main content to prevent overlap with fixed navbar */}
        <div className="pt-32">
          {/* Hero Section */}
          <section className="px-8 py-32 text-center">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black  mb-6 leading-tight tracking-tight text-foreground "
              
            >
              Developing
              <br />
              tomorrow, today
            </h1>
            <p className="text-3xl  mb-20 text-secondary">
              We make what you say :)
            </p>
          </section>
        </div>
      </div>

      {/* Everything else - Dark Blue Background */}
      <div className="bg-dark-blue text-white">
        {/* Brand Logos Section */}
        <section className="py-12 overflow-hidden">
          <div className="rounded-3xl py-8 px-8 overflow-hidden bg-secondary-main max-w-7xl mx-auto">
            <div style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
              <div className="flex animate-marquee whitespace-nowrap opacity-80">
                {/* First set of names */}
                <div className="flex items-center space-x-32 text-white text-2xl font-bold" style={{ fontFamily: 'Horizon, sans-serif' }}>
                  <span>ZenBud</span>
                  <span>ZenIt</span>
                  <span>CightBrowser</span>
                  <span>Project Shaoor</span>
                  <span>Karobar Box</span>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-32 text-white text-2xl font-bold ml-32" style={{ fontFamily: 'Horizon, sans-serif' }}>
                  <span>ZenBud</span>
                  <span>ZenIt</span>
                  <span>CightBrowser</span>
                  <span>Project Shaoor</span>
                  <span>Karobar Box</span>
                </div>
                {/* Third set for seamless loop */}
                <div className="flex items-center space-x-32 text-white text-2xl font-bold ml-32" style={{ fontFamily: 'Horizon, sans-serif' }}>
                  <span>ZenBud</span>
                  <span>ZenIt</span>
                  <span>CightBrowser</span>
                  <span>Project Shaoor</span>
                  <span>Karobar Box</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Zenbud Project */}
            <Link href="/projects/zenbud">
              <div
                className="relative overflow-hidden rounded-2xl h-96 w-full group cursor-pointer border border-dashed border-[#f3f4f6]"
                style={{ minHeight: '22rem', borderWidth: '1px', borderStyle: 'dashed', borderColor: '#f3f4f6', borderRadius: '1rem', borderImage: 'none', borderSpacing: 0, boxSizing: 'border-box' }}
              >
                <img
                  src="/images/zenbud.png"
                  alt="Zenbud project image"
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[95%] rounded-2xl bg-black/70 backdrop-blur-sm px-6 py-2 flex flex-col items-start shadow-lg"
                  style={{ background: 'rgba(0,0,0,0.7)' }}
                >
                  <p className="text-xs font-medium text-[#f0f2f4]/80 mb-0.5">March,2025</p>
                  <h3 className="text-base md:text-lg font-black text-[#f0f2f4] mb-0.5">Zenbud: Your Ultimate Academic Companion</h3>
                  <span className="text-[#f0f2f4] text-xs font-medium">Explore how Zenbud helps students stay organized, focused, and productive.</span>
                </div>
              </div>
            </Link>

            {/* Zenit Project */}
            <Link href="/projects/zenit">
              <div
                className="relative overflow-hidden rounded-2xl h-96 w-full group cursor-pointer border border-dashed border-[#f3f4f6]"
                style={{ minHeight: '22rem', borderWidth: '1px', borderStyle: 'dashed', borderColor: '#f3f4f6', borderRadius: '1rem', borderImage: 'none', borderSpacing: 0, boxSizing: 'border-box' }}
              >
                <img
                  src="/images/zenit.png"
                  alt="Zenit project image"
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[95%] rounded-2xl bg-black/70 backdrop-blur-sm px-6 py-2 flex flex-col items-start shadow-lg"
                  style={{ background: 'rgba(0,0,0,0.7)' }}
                >
                  <p className="text-xs font-medium text-[#f0f2f4]/80 mb-0.5">May,2025</p>
                  <h3 className="text-base md:text-lg font-black text-[#f0f2f4] mb-0.5">Zenit: The NUST Student Resource Hub</h3>
                  <span className="text-[#f0f2f4] text-xs font-medium">All your study resources in one place: past papers, assignments, labs, quizzes, project ideas, and more.</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-16 bg-secondary-main/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-5xl font-black mb-6 text-white">
                  So, what do we do?
                </h2>
              </div>
              <div>
                <p className="text-xl font-bold leading-relaxed text-white/90">
                  We specialize in creating compelling digital experiences, designing user-friendly websites, apps, and
                  interfaces that align perfectly with your brand and captivate your audience.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { name: "Branding", color: "bg-secondary-main" },
                { name: "Web Design", color: "bg-secondary-main/80" },
                { name: "Product Design", color: "bg-secondary-main" },
                { name: "Mobile Apps", color: "bg-secondary-main/80" },
                { name: "Consulting", color: "bg-secondary-main" },
                { name: "Marketing", color: "bg-secondary-main/80" },
                { name: "Web Apps", color: "bg-secondary-main" },
              ].map((service) => (
                <div
                  key={service.name}
                  className={`px-6 py-3 rounded-full text-white font-black hover:scale-105 transition-transform cursor-pointer ${service.color}`}
                >
                  {service.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Are We Section */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="text-white p-8 rounded-2xl bg-secondary-main h-full flex flex-col justify-center">
                <h2 className="text-5xl font-black mb-6">Who are we ?</h2>
                <p className="leading-relaxed font-bold opacity-90">
                  We are ZenStudios, a dynamic development studio powered by a team of young, talented professionals. We
                  specialize in creating custom software solutions that elevate startups with tailored branding, websites,
                  apps, and more. With a keen understanding of the new wave of business, we craft innovative digital
                  experiences that drive growth and success.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl flex items-center justify-center shadow-lg h-full">
                <div className="flex items-center justify-center w-full h-full">
                  <img src="/images/logo.png" alt="ZenStudios Logo" className="max-h-32 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Toolkit Section */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <h2 className="text-5xl font-black">Our toolkit:</h2>
              <p className="max-w-md font-bold text-lg opacity-90 leading-relaxed">
                Our toolkit is a blend of creativity and technology, allowing us to deliver top-notch design and
                development services for every project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  name: "Figma",
                  desc: "All the design things.",
                  icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-10 h-10" />
                },
                {
                  name: "Flutter",
                  desc: "Building sleek apps.",
                  icon: <img src="/images/flutter.png" alt="Flutter" className="w-10 h-10" />
                },
                {
                  name: "Next.js",
                  desc: "Modern web apps.",
                  icon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" className="w-10 h-10" />
                },
                {
                  name: "React.js",
                  desc: "Interactive UIs.",
                  icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" className="w-10 h-10" />
                },
                {
                  name: "Firebase",
                  desc: "Realtime backend.",
                  icon: <img src="/images/firebase.png" alt="Firebase" className="w-10 h-10" />
                },
                {
                  name: "Web Scraping",
                  desc: "Extracting data from the web.",
                  icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Web Scraping" className="w-10 h-10" />
                }
              ].map((tool) => (
                <Card key={tool.name} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div>{tool.icon}</div>
                      <div>
                        <h3 className="text-xl font-black mb-1 text-foreground">
                          {tool.name}
                        </h3>
                        <p className="font-bold text-secondary">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </section>
      </div>
    </div>
  )
}
