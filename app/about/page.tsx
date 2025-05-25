import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
            Who Are We?
          </h1>
          <p className="text-2xl text-[#f0f2f4]/80 max-w-3xl">
            A team of passionate creators dedicated to building exceptional digital experiences.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="text-white p-8 rounded-2xl bg-[#296089] h-full flex flex-col justify-center">
              <h2 className="text-5xl font-black mb-6 text-[#f0f2f4]">Our Mission</h2>
              <p className="leading-relaxed font-bold opacity-90 text-[#f0f2f4]">
                We are ZenStudios, a dynamic development studio powered by a team of young, talented professionals. We
                specialize in creating custom software solutions that elevate startups with tailored branding, websites,
                apps, and more. With a keen understanding of the new wave of business, we craft innovative digital
                experiences that drive growth and success.
              </p>
            </div>
            <div className="bg-[#f0f2f4] p-8 rounded-2xl flex items-center justify-center shadow-lg h-full">
              <div className="text-center">
                <div className="text-6xl font-black mb-2 text-[#243342]">
                  ZenStudios
                </div>
                <div className="text-xl font-bold text-[#296089]">
                  Studios
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <h2 className="text-5xl font-black mb-12 text-[#f0f2f4]">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  desc: "Pushing boundaries and exploring new possibilities in every project.",
                  color: "bg-[#296089]",
                  textColor: "text-[#f0f2f4]"
                },
                {
                  title: "Excellence",
                  desc: "Delivering the highest quality work in everything we do.",
                  color: "bg-[#f0f2f4]",
                  textColor: "text-[#243342]"
                },
                {
                  title: "Collaboration",
                  desc: "Working together to achieve extraordinary results.",
                  color: "bg-[#296089]",
                  textColor: "text-[#f0f2f4]"
                }
              ].map((value) => (
                <Card key={value.title} className={`${value.color} border-none`}>
                  <CardContent className="p-8">
                    <h3 className={`text-3xl font-black mb-4 ${value.textColor}`}>{value.title}</h3>
                    <p className={`${value.textColor}/80`}>{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-24">
            <h2 className="text-5xl font-black mb-12 text-[#f0f2f4]">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#f0f2f4] border-none">
                <CardContent className="p-8">
                  <div className="aspect-square bg-[#296089] rounded-lg mb-6"></div>
                  <h3 className="text-3xl font-black mb-2 text-[#243342]">Faseeh</h3>
                  <p className="text-lg font-bold mb-4 text-[#243342]/80">Founder & CEO</p>
                  <p className="text-[#243342]/80">
                    Visionary leader with over 5 years of experience in digital product development and team management.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#296089] border-none">
                <CardContent className="p-8">
                  <div className="aspect-square bg-[#f0f2f4] rounded-lg mb-6"></div>
                  <h3 className="text-3xl font-black mb-2 text-[#f0f2f4]">Jane Smith</h3>
                  <p className="text-lg font-bold mb-4 text-[#f0f2f4]/80">Creative Director</p>
                  <p className="text-[#f0f2f4]/80">
                    Award-winning designer with a passion for creating beautiful and functional user experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-[#296089] border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-black mb-6 text-[#f0f2f4]">Join Our Journey</h2>
              <p className="text-xl mb-8 text-[#f0f2f4]/80 max-w-2xl mx-auto">
                Let's create something amazing together. Get in touch to discuss your project or explore opportunities to join our team.
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#f0f2f4] text-[#243342] font-bold rounded-full hover:opacity-90 transition-opacity"
                >
                  Contact Us <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#f0f2f4] text-[#f0f2f4] font-bold rounded-full hover:opacity-90 transition-opacity"
                >
                  View Careers <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
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
