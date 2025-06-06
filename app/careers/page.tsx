import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Code2, Globe, Brain, Users, Megaphone, Heart, Award, Briefcase, Sparkles, Rocket } from "lucide-react"

export default function CareersPage() {
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
          <section className="px-8 py-12 text-center">
            <div className="inline-block bg-secondary/20 px-6 py-2 rounded-full mb-6">
              <p className="text-secondary font-bold">Open Positions</p>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-tight tracking-tight text-foreground">
              Internship Opportunities
            </h1>
            <p className="text-3xl mb-6 text-secondary">
              Contribute to Real Startup Projects
            </p>
            <div className="flex items-center justify-center gap-2 text-secondary font-bold">
              <Calendar className="w-5 h-5" />
              <span>Application Deadline: June 20, 2025</span>
            </div>
          </section>
        </div>
      </div>

      {/* Main Content - Dark Blue Background */}
      <div className="bg-dark-blue text-white">
        {/* Main Content Section */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Image */}
              <div className="lg:-ml-24">
                <div className="relative w-full max-w-xl">
                  <Image
                    src="/images/careers.png"
                    alt="Careers at ZenStudios"
                    width={1090}
                    height={1920}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="max-w-2xl">
                {/* Introduction */}
                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-xl font-bold leading-relaxed text-white/80">
                    We are offering internship positions across a range of domains for individuals eager to gain hands-on experience 
                    and contribute to real, impactful projects. These projects are being developed with the vision of transforming 
                    into fully operational startups.
                  </p>
                </div>

                {/* Available Domains */}
                <div className="mb-8">
                  <h2 className="text-4xl font-black mb-6 flex items-center gap-3">
                    <Sparkles className="w-8 h-8" />
                    Available Internship Domains
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { name: "App Development", icon: Code2 },
                      { name: "Web Development", icon: Globe },
                      { name: "Artificial Intelligence (AI)", icon: Brain },
                      { name: "Human Resources (HR)", icon: Users },
                      { name: "Marketing", icon: Megaphone },
                      { name: "Social Media Manager", icon: Megaphone },
                      { name: "Psychology & User Research", icon: Heart },
                      { name: "And more", icon: Sparkles }
                    ].map(({ name, icon: Icon }) => (
                      <div key={name} className="bg-secondary-main/50 p-4 rounded-xl flex items-center gap-3 hover:bg-secondary-main/70 transition-colors">
                        <Icon className="w-6 h-6 text-white/80" />
                        <p className="font-bold text-lg text-white/90">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Internship Details */}
                <div className="mb-8">
                  <h2 className="text-4xl font-black mb-6 flex items-center gap-3">
                    <Briefcase className="w-8 h-8" />
                    Internship Details
                  </h2>
                  <div className="space-y-3">
                    <div className="bg-secondary-main/50 p-4 rounded-xl hover:bg-secondary-main/70 transition-colors">
                      <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                        <Calendar className="w-6 h-6" />
                        Duration
                      </h3>
                      <p className="text-lg ml-8 text-white/80">1 to 2 months</p>
                    </div>
                    <div className="bg-secondary-main/50 p-4 rounded-xl hover:bg-secondary-main/70 transition-colors">
                      <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                        <Award className="w-6 h-6" />
                        Type
                      </h3>
                      <p className="text-lg ml-8 text-white/80">Unpaid (You might get equity in the projects)</p>
                    </div>
                    <div className="bg-secondary-main/50 p-4 rounded-xl hover:bg-secondary-main/70 transition-colors">
                      <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                        <Globe className="w-6 h-6" />
                        Mode
                      </h3>
                      <p className="text-lg ml-8 text-white/80">Remote or Hybrid (depending on the project)</p>
                    </div>
                    <div className="bg-secondary-main/50 p-4 rounded-xl hover:bg-secondary-main/70 transition-colors">
                      <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                        <Users className="w-6 h-6" />
                        Mentorship & Collaboration
                      </h3>
                      <p className="text-lg ml-8 text-white/80">In collaboration with Dr. Momena Moetsum</p>
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-8">
                  <h2 className="text-4xl font-black mb-6 flex items-center gap-3">
                    <Rocket className="w-8 h-8" />
                    Deliverables
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { name: "Internship Certificate", icon: Award },
                      { name: "Contributor Acknowledgment", icon: Users },
                      { name: "Real-world startup experience", icon: Briefcase },
                      { name: "Opportunity to work on impactful, live projects", icon: Sparkles }
                    ].map(({ name, icon: Icon }) => (
                      <div key={name} className="bg-secondary-main/50 p-4 rounded-xl flex items-center gap-3 hover:bg-secondary-main/70 transition-colors">
                        <Icon className="w-6 h-6 text-white/80" />
                        <p className="font-bold text-lg text-white/90">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Apply */}
                <div className="mb-8">
                  <h2 className="text-4xl font-black mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8" />
                    Why Apply?
                  </h2>
                  <div className="bg-secondary-main/50 p-6 rounded-xl hover:bg-secondary-main/70 transition-colors">
                    <p className="text-lg leading-relaxed text-white/80">
                      This is a valuable opportunity for students and fresh graduates to gain industry-level experience, 
                      expand their professional network, and be part of startup ventures from the ground up. While the 
                      internships are unpaid, high-performing interns may be considered for long-term roles or equity in 
                      the projects they contribute to.
                    </p>
                  </div>
                </div>

                {/* Apply Now Section */}
                <div className="text-center mb-16">
                  <Link href="https://forms.gle/gRrkD2b3CzZrnZ9D9" target="_blank">
                    <Button className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-full font-black">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </section>
      </div>
    </div>
  )
} 