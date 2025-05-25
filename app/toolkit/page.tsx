import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ToolkitPage() {
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
            Our Toolkit
          </h1>
          <p className="text-2xl text-[#f0f2f4]/80 max-w-3xl">
            A carefully curated collection of tools and technologies we use to bring your ideas to life.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Design Tools Section */}
          <div className="mb-24">
            <h2 className="text-5xl font-black mb-12 text-[#f0f2f4]">Design Tools</h2>
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
                  icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="Flutter" className="w-10 h-10" />
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
                  icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase" className="w-10 h-10" />
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
          </div>

          {/* Development Tools Section */}
          <div className="mb-24">
            <h2 className="text-5xl font-black mb-12 text-[#f0f2f4]">Development Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Flutter",
                  desc: "Building cross-platform mobile apps with beautiful native performance.",
                  icon: "📱",
                  color: "bg-[#f0f2f4]",
                  textColor: "text-[#243342]"
                },
                {
                  name: "Django",
                  desc: "Powerful backend framework for building scalable web applications.",
                  icon: "🐍",
                  color: "bg-[#296089]",
                  textColor: "text-[#f0f2f4]"
                },
                {
                  name: "Serverpod",
                  desc: "Modern backend framework for Flutter applications.",
                  icon: "⚡",
                  color: "bg-[#f0f2f4]",
                  textColor: "text-[#243342]"
                }
              ].map((tool) => (
                <Card key={tool.name} className={`${tool.color} border-none`}>
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className={`text-3xl font-black mb-4 ${tool.textColor}`}>{tool.name}</h3>
                    <p className={`${tool.textColor}/80`}>{tool.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Workflow Section */}
          <div className="mb-24">
            <h2 className="text-5xl font-black mb-12 text-[#f0f2f4]">Our Workflow</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Planning",
                  desc: "Understanding requirements and creating project roadmap",
                  color: "bg-[#296089]",
                  textColor: "text-[#f0f2f4]"
                },
                {
                  title: "Design",
                  desc: "Creating wireframes and visual designs",
                  color: "bg-[#f0f2f4]",
                  textColor: "text-[#243342]"
                },
                {
                  title: "Development",
                  desc: "Building and testing the solution",
                  color: "bg-[#296089]",
                  textColor: "text-[#f0f2f4]"
                },
                {
                  title: "Launch",
                  desc: "Deploying and monitoring the project",
                  color: "bg-[#f0f2f4]",
                  textColor: "text-[#243342]"
                }
              ].map((step, index) => (
                <Card key={step.title} className={`${step.color} border-none`}>
                  <CardContent className="p-6">
                    <div className={`text-2xl font-black mb-2 ${step.textColor}`}>0{index + 1}</div>
                    <h3 className={`text-2xl font-black mb-2 ${step.textColor}`}>{step.title}</h3>
                    <p className={`${step.textColor}/80`}>{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-[#296089] border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-black mb-6 text-[#f0f2f4]">Ready to Build Something Amazing?</h2>
              <p className="text-xl mb-8 text-[#f0f2f4]/80 max-w-2xl mx-auto">
                Let's discuss your project and see how our toolkit can help bring your vision to life.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#f0f2f4] text-[#243342] font-bold rounded-full hover:opacity-90 transition-opacity"
              >
                Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </CardContent>
          </Card>
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
