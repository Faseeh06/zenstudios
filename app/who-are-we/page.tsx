import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function WhoAreWePage() {
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
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight tracking-tight text-foreground">
              Who are we?
            </h1>
          </section>
        </div>
      </div>

      {/* Main Content - Dark Blue Background */}
      <div className="bg-dark-blue text-white">
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="text-white p-8 rounded-2xl bg-secondary-main h-full flex flex-col justify-center">
                <h2 className="text-5xl font-black mb-6">Who are we?</h2>
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
} 