"use client"

import type React from "react"

import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
            Let's Talk
          </h1>
          <p className="text-2xl text-[#f0f2f4]/80 max-w-3xl">
            Have a project in mind? We'd love to hear about it. Send us a message and let's create something amazing together.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-7">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="w-full h-full flex flex-col justify-center py-20 px-4 md:px-8">
              <form className="space-y-4 mb-12">
                <input
                  type="text"
                  placeholder="* YOUR NAME"
                  className="w-full border border-[#f0f2f4] bg-transparent px-4 py-3 text-[#f0f2f4] placeholder:uppercase placeholder:font-bold placeholder:text-[#f0f2f4]/60 rounded-none focus:outline-none focus:ring-2 focus:ring-[#296089] transition"
                  required
                />
                <input
                  type="email"
                  placeholder="* EMAIL ADDRESS"
                  className="w-full border border-[#f0f2f4] bg-transparent px-4 py-3 text-[#f0f2f4] placeholder:uppercase placeholder:font-bold placeholder:text-[#f0f2f4]/60 rounded-none focus:outline-none focus:ring-2 focus:ring-[#296089] transition"
                  required
                />
                <input
                  type="text"
                  placeholder="ORDER NUMBER"
                  className="w-full border border-[#f0f2f4] bg-transparent px-4 py-3 text-[#f0f2f4] placeholder:uppercase placeholder:font-bold placeholder:text-[#f0f2f4]/60 rounded-none focus:outline-none focus:ring-2 focus:ring-[#296089] transition"
                />
                <input
                  type="text"
                  placeholder="* SUBJECT"
                  className="w-full border border-[#f0f2f4] bg-transparent px-4 py-3 text-[#f0f2f4] placeholder:uppercase placeholder:font-bold placeholder:text-[#f0f2f4]/60 rounded-none focus:outline-none focus:ring-2 focus:ring-[#296089] transition"
                  required
                />
                <textarea
                  placeholder="* YOUR MESSAGE"
                  className="w-full border border-[#f0f2f4] bg-transparent px-4 py-3 text-[#f0f2f4] placeholder:uppercase placeholder:font-bold placeholder:text-[#f0f2f4]/60 rounded-none focus:outline-none focus:ring-2 focus:ring-[#296089] transition min-h-[120px]"
                  required
                />
                <button
                  type="submit"
                  className="mt-4 px-8 py-3 bg-[#296089] text-[#f0f2f4] font-bold uppercase tracking-widest rounded-none hover:bg-[#243342] transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Location */}
              <Card className="bg-[#f0f2f4] border-none">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-[#296089] text-[#f0f2f4]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2 text-[#243342]">Our Office</h3>
                      <p className="text-[#243342]/80">
                        Nust, H-12<br />
                        Islamabad, 44000<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-[#296089] border-none">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-[#f0f2f4] text-[#243342]">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black mb-2 text-[#f0f2f4]">Email Us</h3>
                        <a href="mailto:faseehsafdar06@gmail" className="text-[#f0f2f4]/80  hover:opacity-90 transition-opacity">
                        faseehsafdar06@gmail
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#f0f2f4] border-none">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-[#296089] text-[#f0f2f4]">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black mb-2 text-[#243342]">Call Us</h3>
                        <a href="tel:+92 321 9854008" className="text-[#243342]/80 hover:opacity-90 transition-opacity">
                          +923219854008
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <Card className="bg-[#296089] border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black mb-6 text-[#f0f2f4]">Connect With Us</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "LinkedIn", href: "https://linkedin.com" },
                      { name: "Instagram", href: "https://instagram.com" },
                      { name: "Discord", href: "https://discord.com" }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-[#f0f2f4] text-[#243342] font-bold rounded-lg text-center hover:opacity-90 transition-opacity"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
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
