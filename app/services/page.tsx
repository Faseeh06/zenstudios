import { ArrowLeft, Code, Palette, Smartphone, Globe, TrendingUp, Users, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding",
      description:
        "Complete brand identity design including logos, color schemes, and brand guidelines that make your business stand out.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design",
      description: "Modern, responsive websites that look great on all devices and provide excellent user experiences.",
      features: ["Responsive Design", "UI/UX Design", "Landing Pages", "E-commerce Sites"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Product Design",
      description: "End-to-end product design from concept to launch, focusing on user needs and business goals.",
      features: ["User Research", "Prototyping", "Design Systems", "User Testing"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
      features: ["iOS Development", "Android Development", "Cross-platform", "App Store Optimization"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting",
      description: "Strategic guidance to help you make informed decisions about your digital transformation journey.",
      features: ["Digital Strategy", "Technology Consulting", "Process Optimization", "Team Training"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing",
      description:
        "Digital marketing strategies that drive growth and help you reach your target audience effectively.",
      features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics"],
    },
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
            Our Services
          </h1>
          <p className="text-2xl text-[#f0f2f4]/80 max-w-3xl">
            We offer a comprehensive suite of services to help your business thrive in the digital landscape.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Branding Service */}
          <Card className="bg-[#296089] border-none">
            <CardContent className="p-8">
              <h3 className="text-4xl font-black mb-4 text-[#f0f2f4]">Branding</h3>
              <p className="text-lg mb-6 text-[#f0f2f4]/80">
                Create a powerful brand identity that resonates with your audience and sets you apart from competitors.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#f0f2f4]">
                  <span className="mr-2">•</span>
                  Logo Design
                </li>
                <li className="flex items-center text-[#f0f2f4]">
                  <span className="mr-2">•</span>
                  Brand Guidelines
                </li>
                <li className="flex items-center text-[#f0f2f4]">
                  <span className="mr-2">•</span>
                  Visual Identity
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-[#f0f2f4] font-bold hover:opacity-80 transition-opacity">
                Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </CardContent>
          </Card>

          {/* Web Design Service */}
          <Card className="bg-[#f0f2f4] border-none">
            <CardContent className="p-8">
              <h3 className="text-4xl font-black mb-4 text-[#243342]">Web Design</h3>
              <p className="text-lg mb-6 text-[#243342]/80">
                Craft stunning, responsive websites that deliver exceptional user experiences and drive conversions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#243342]">
                  <span className="mr-2">•</span>
                  Responsive Design
                </li>
                <li className="flex items-center text-[#243342]">
                  <span className="mr-2">•</span>
                  UI/UX Design
                </li>
                <li className="flex items-center text-[#243342]">
                  <span className="mr-2">•</span>
                  E-commerce Solutions
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-[#243342] font-bold hover:opacity-80 transition-opacity">
                Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </CardContent>
          </Card>

          {/* Product Design Service */}
          <Card className="bg-[#f0f2f4] border-none">
            <CardContent className="p-8">
              <h3 className="text-4xl font-black mb-4 text-[#243342]">Product Design</h3>
              <p className="text-lg mb-6 text-[#243342]/80">
                Design intuitive and engaging digital products that solve real user problems and drive business growth.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#243342]">
                  <span className="mr-2">•</span>
                  User Research
                </li>
                <li className="flex items-center text-[#243342]">
                  <span className="mr-2">•</span>
                  Prototyping
                </li>
                <li className="flex items-center text-[#243342]">
                  <span className="mr-2">•</span>
                  User Testing
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-[#243342] font-bold hover:opacity-80 transition-opacity">
                Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </CardContent>
          </Card>

          {/* Mobile Apps Service */}
          <Card className="bg-[#296089] border-none">
            <CardContent className="p-8">
              <h3 className="text-4xl font-black mb-4 text-[#f0f2f4]">Mobile Apps</h3>
              <p className="text-lg mb-6 text-[#f0f2f4]/80">
                Build powerful, scalable mobile applications that provide seamless experiences across all devices.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#f0f2f4]">
                  <span className="mr-2">•</span>
                  iOS Development
                </li>
                <li className="flex items-center text-[#f0f2f4]">
                  <span className="mr-2">•</span>
                  Android Development
                </li>
                <li className="flex items-center text-[#f0f2f4]">
                  <span className="mr-2">•</span>
                  Cross-platform Solutions
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-[#f0f2f4] font-bold hover:opacity-80 transition-opacity">
                Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Process Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12 text-[#f0f2f4]">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery",
                desc: "Understanding your needs and objectives",
                color: "bg-[#296089]",
                textColor: "text-[#f0f2f4]"
              },
              {
                title: "Strategy",
                desc: "Planning the perfect solution",
                color: "bg-[#f0f2f4]",
                textColor: "text-[#243342]"
              },
              {
                title: "Design",
                desc: "Creating beautiful, functional designs",
                color: "bg-[#296089]",
                textColor: "text-[#f0f2f4]"
              },
              {
                title: "Development",
                desc: "Building with precision and care",
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
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-[#296089] border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-black mb-6 text-[#f0f2f4]">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-[#f0f2f4]/80 max-w-2xl mx-auto">
                Let's work together to bring your vision to life. Contact us today to discuss your project.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#f0f2f4] text-[#243342] font-bold rounded-full hover:opacity-90 transition-opacity"
              >
                Contact Us <ArrowUpRight className="ml-2 w-5 h-5" />
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
