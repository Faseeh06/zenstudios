import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b334f]">
      {/* Header */}
      <div className="px-6 pt-6">
        <Navbar />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-black mb-8 text-[#f0f2f4]">Privacy Policy</h1>
        <p className="text-[#f0f2f4]/80 mb-8 font-bold">Last updated: 25/05/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-black mb-4 text-[#f0f2f4]">Information We Collect</h2>
          <p className="text-[#f0f2f4] leading-relaxed mb-4 font-bold">
            We collect information you provide directly to us, such as when you create an account, contact us, or use
            our services. This may include your name, email address, phone number, and any other information you
            choose to provide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-black mb-4 text-[#f0f2f4]">How We Use Your Information</h2>
          <p className="text-[#f0f2f4] leading-relaxed mb-4 font-bold">
            We use the information we collect to provide, maintain, and improve our services, communicate with you,
            and comply with legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-black mb-4 text-[#f0f2f4]">Information Sharing</h2>
          <p className="text-[#f0f2f4] leading-relaxed mb-4 font-bold">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your
            consent, except as described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-black mb-4 text-[#f0f2f4]">Contact Us</h2>
          <p className="text-[#f0f2f4] leading-relaxed font-bold">
            If you have any questions about this Privacy Policy, please contact us at
            <a href="mailto:faseehsafdar06@gmail.com" className="text-[#f0f2f4] hover:underline ml-1 font-bold">
              faseehsafdar06@gmail.com
            </a>
          </p>
        </section>
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
