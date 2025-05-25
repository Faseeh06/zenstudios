import { ArrowUpRight, ArrowLeft, Calendar, Tag, Users, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// This would typically come from a database or CMS
const projects = {
  zenbud: {
    title: "Zenbud",
    description: "Zenbud, Your Ultimate Academic Companion. A Flutter-based mobile app designed to revolutionize student life with powerful features to help you stay organized, focused, and productive.",
    fullDescription: `Study Partner is a Flutter-based mobile app designed to revolutionize student life. With powerful features, it helps you stay organized, focused, and productive.`,
    category: "Mobile App",
    year: "2024",
    duration: "6 months",
    team: "7 members",
    technologies: ["Flutter", "Dart", "AI", "Firebase"],
    challenges: [
      "Task and Timetable Management: Organize tasks, timetables, and breaks effortlessly. Plan your day and never miss a deadline or class.",
      "Zenbud AI: Meet Zenbud, your personal AI assistant! Zenbud optimizes your study schedule, offers productivity tips, and keeps you motivated.",
      "Screen Time Usage Dashboard: Monitor your app usage with our detailed dashboard. Balance your study and leisure time effectively.",
      "Lofi Music: Boost concentration with our curated lofi music selection, perfect for creating a calm study environment.",
      "Pomodoro Clock: Enhance focus and productivity with the Pomodoro Technique using our built-in Pomodoro Clock.",
      "Attractive Dashboard: Navigate your academic life with our sleek, user-friendly dashboard. Access all features and insights at a glance.",
      "Quran: Incorporate spirituality with easy access to the Quran. Take breaks for reflection and spiritual growth.",
      "Reminders and Alarm Clock: Set reminders for tasks, classes, and breaks to stay on top of your schedule."
    ],
    solutions: [
      "All-in-One Solution: Integrates task management, AI assistance, music, and more in a single app.",
      "Productivity Boost: Tools like the Pomodoro Clock and screen time dashboard maximize efficiency.",
      "User-Centric Design: Crafted for students, our intuitive interface ensures a seamless experience."
    ],
    results: [
      "Thousands of students have improved their productivity and organization.",
      "Positive feedback for the AI assistant and lofi music integration.",
      "Study Partner is transforming academic routines with Zenbud!"
    ],
    color: "bg-[#296089]",
    textColor: "text-[#f0f2f4]",
    image: "/images/zenbud.png"
  },
  zenit: {
    title: "ZenIt",
    description: "ZenIt – Study Helper is a web-based platform designed to centralize and streamline academic resources for university students. Built with a student-first mindset, ZenIt aims to ease academic pressure by offering tailored content and smart navigation—all through a clean, intuitive interface.",
    fullDescription: "ZenIt is a web-based platform designed to centralize and streamline academic resources for university students. Built with a student-first mindset, ZenIt aims to ease academic pressure by offering tailored content and smart navigation—all through a clean, intuitive interface.",
    category: "Web App",
    year: "2025",
    duration: "6 months",
    team: "7 members",
    technologies: ["Next.js", "React", "Firebase"],
    challenges: [
      "Centralized Academic Resources: Access a comprehensive collection of past papers, lab manuals, assignments, quizzes, and more—organized by course and semester.",
      "Teacher-Specific Helper UI: Personalized layouts and resources tailored to specific university teachers and course requirements.",
      "Admin Panel: Powerful backend for administrators to upload, manage, and moderate all content.",
      "Modular and Scalable Design: Built to support multiple departments and universities, with easy integration of new subjects and features.",
      "Smart Search & Filters: Quickly find what you need using smart filters for department, semester, course, and teacher-based resources.",
      "Minimalist UI for Focus: Distraction-free interface optimized for clarity, accessibility, and speed."
    ],
    solutions: [
      "Centralized resource hub for students.",
      "Teacher-specific layouts for personalized experience.",
      "Admin tools for easy content management."
    ],
    results: [
      "ZenIt is designed to be a go-to academic support system for university students. It reduces time wasted searching for resources, and early feedback shows strong interest in its teacher-specific interface and streamlined resource hub.",
      "Expanding coverage to more departments and universities. AI-based content suggestions and smart notifications. Peer-submitted content with moderation tools. Integration with student portals and LMS systems.",
      "ZenIt – Study Helper is transforming how students access and engage with academic materials. With its personalized UI, centralized database, and admin control, ZenIt is your academic companion—made by students, for students."
    ],
    color: "bg-[#296089]",
    textColor: "text-[#f0f2f4]",
    image: "/images/zenit.png"
  },
  shaoor: {
    title: "Project Shaoor",
    description: "Project Shaoor is a web and mobile-based educational platform built to connect orphanages, remote villages, and underserved communities to quality education. Born out of a desire to bridge the educational gap, Shaoor leverages technology to bring virtual classrooms and live teaching sessions to places where traditional schooling is limited or absent.",
    fullDescription: "Designed with scalability, simplicity, and impact in mind, Project Shaoor is built using modern frameworks and optimized for low-bandwidth environments to ensure accessibility for all.",
    category: "EdTech Platform",
    year: "2024",
    duration: "8 months",
    team: "8 members",
    technologies: ["Next.js", "React Native", "Firebase", "WebRTC"],
    challenges: [
      "🎥 Live Virtual Classrooms: Enable real-time teaching via video sessions with volunteers. One teacher can reach multiple orphanages or villages simultaneously.",
      "🏫 Multi-Center Broadcast: Deliver live educational content to several orphanages at once using projectors and speaker systems, managed from a single dashboard.",
      "🧑‍🏫 Volunteer Teaching Portal: A dedicated interface for teachers and volunteers to schedule sessions, manage content, and track engagement with students.",
      "🗂️ Resource Library: Upload and access recorded lectures, assignments, notes, and quizzes—organized by subject and level.",
      "📅 Smart Scheduling System: Coordinate classes across various centers with an intelligent, conflict-free scheduling tool.",
      "🧑‍💼 Admin & Center Management Panel: Central control for managing users, orphanage data, session logs, and feedback from across the network.",
      "🌐 Optimized for Low Connectivity: Lightweight UI and offline-first features ensure that education continues, even in areas with limited internet access."
    ],
    solutions: [
      "Cross-platform development with Next.js and React Native.",
      "WebRTC integration for reliable video streaming.",
      "Offline-first architecture for low-connectivity areas."
    ],
    results: [
      "Project Shaoor is already making waves in underserved communities. By connecting orphanages with educators across the globe, it empowers hundreds of children with the gift of learning—fostering hope, knowledge, and opportunity where it's needed most.",
      "AI-based learning assistance and student progress tracking. Multi-language support for wider regional adoption. Gamified learning modules to increase engagement. Local NGO and government partnerships for broader reach.",
      "Project Shaoor is more than just an app—it's a movement. A step toward educational equity and empowerment through innovation. By bringing together technology, volunteers, and underserved communities, Shaoor is shaping a future where every child, no matter where they live, has access to quality education."
    ],
    color: "bg-[#296089]",
    textColor: "text-[#f0f2f4]",
    image: "/images/shaoor.png"
  },
  cight: {
    title: "Cight Browser",
    description: "Cight Browser is an innovative voice-controlled web browser designed to revolutionize how users interact with the internet. Built with cutting-edge technologies like Next.js and advanced voice recognition, Cight empowers users to browse hands-free, making web navigation more accessible and efficient.",
    fullDescription: "The browser leverages AI-driven web scraping and content analysis to provide intuitive voice commands that enhance browsing speed and convenience.",
    category: "Web Browser",
    year: "2024",
    duration: "7 months",
    team: "6 members",
    technologies: ["Next.js", "Web Speech API", "AI", "Web Scraping"],
    challenges: [
      "🎙️ Voice Command Navigation: Control browsing with simple voice commands—search, open links, scroll, and interact without touching your device.",
      "🔍 AI-Powered Content Analysis: Cight intelligently understands and summarizes webpage content, helping users find relevant information faster.",
      "🌐 Seamless Web Scraping: Efficiently extracts key information from web pages to enable voice interaction with complex sites.",
      "🖱️ Interactive Voice-Controlled Actions: Perform clicks, open tabs, and navigate menus through voice, making browsing accessible for all users, including those with disabilities.",
      "⚡ Fast and Lightweight: Optimized for speed and low resource consumption, delivering a smooth browsing experience.",
      "🛠️ Customizable Settings: Adjust voice sensitivity, command preferences, and accessibility options to suit your needs."
    ],
    solutions: [
      "Next.js-based browser with Web Speech API integration.",
      "AI-powered content analysis and web scraping.",
      "Accessibility-first design approach."
    ],
    results: [
      "Cight Browser is breaking barriers in web accessibility and user interaction. Early adopters praise its ease of use and the freedom it offers from traditional input devices, making browsing more inclusive and convenient.",
      "Integration with smart home devices and wearables. Multi-language voice recognition and commands. Enhanced AI for personalized browsing experiences. Support for voice-controlled extensions and plugins.",
      "Cight Browser redefines the browsing experience by putting your voice in control. Designed for accessibility, speed, and intelligence, it's the future of hands-free internet navigation—helping everyone browse smarter, faster, and easier."
    ],
    color: "bg-[#296089]",
    textColor: "text-[#f0f2f4]",
    image: "/images/cightbrowser.png"
  },
  alcranium: {
    title: "Alcranium",
    description: "Alcranium is a web-based productivity suite crafted specifically for students. Inspired by real academic challenges, it brings together every essential tool a student needs to stay productive, organized, and focused—all under one sleek digital roof.",
    fullDescription: "Built using modern web technologies, Alcranium provides a seamless experience with powerful integrations and intelligent design, making it the go-to platform for academic success.",
    category: "Web App",
    year: "2024",
    duration: "6 months",
    team: "6 members",
    technologies: ["Next.js", "React", "Firebase", "AI"],
    challenges: [
      "📋 Task Manager: Plan, organize, and track academic tasks, assignments, and deadlines with ease. Prioritize tasks and never miss a due date.",
      "📆 Active Calendar: A smart, interactive calendar to manage class schedules, exams, and events. Stay on top of your academic life at a glance.",
      "⏱️ Pomodoro Timer: Boost concentration and beat procrastination with the built-in Pomodoro timer. Customize session durations for better productivity.",
      "🧠 AI Study Assistant: Leverage AI to get help with topics, summaries, study planning, and productivity advice—available 24/7.",
      "📚 Study Material Hub: Access a curated repository of notes, guides, and essential resources categorized by subject and semester.",
      "🕒 Time Management Tools: Visualize and optimize how you spend your day with time tracking insights and custom schedules.",
      "🌌 Minimal UI with Focus Mode: Distraction-free design with a sleek interface to help you stay in the zone. Switch to dark mode for late-night sessions.",
      "🔧 Admin Dashboard: A powerful backend system for managing users, resources, and content updates across the platform."
    ],
    solutions: [
      "Modern web stack with Next.js and React for optimal performance.",
      "AI integration for smart study assistance.",
      "Firebase backend for real-time updates and data management."
    ],
    results: [
      "Alcranium is reshaping how students interact with productivity tools by combining them into one coherent ecosystem. Early feedback highlights the value of its all-in-one model and smart interface—making it easier for students to stay consistent in their academic journey.",
      "Integration with university portals and LMS systems. Peer-to-peer resource sharing and collaborative tools. AI-enhanced study insights based on user behavior. Mobile version for on-the-go productivity.",
      "Alcranium is not just a tool—it's a digital academic companion. From planning your day to studying smarter, it's built to support students in every aspect of their educational life. With its unified interface and powerful backend, Alcranium is the future of student productivity."
    ],
    color: "bg-[#296089]",
    textColor: "text-[#f0f2f4]",
    image: "/images/alcranium.png"
  },
  karobarbox: {
    title: "KAROBAR BOX",
    description: "Karobar Box is a desktop application tailored for small business owners and entrepreneurs managing multiple clothing brands. Designed with simplicity and performance in mind, it helps streamline inventory, sales, and data management—all from a single, powerful platform.",
    fullDescription: "Built using Python (Tkinter for frontend) and Firebase for secure real-time database integration, Karobar Box delivers a smooth, bug-free experience to keep business operations efficient and organized.",
    category: "Desktop App",
    year: "2024",
    duration: "4 months",
    team: "5 members",
    technologies: ["Python", "Tkinter", "Firebase"],
    challenges: [
      "🧾 Stock & Sales Management: Track product inventory, sales, and quantities for multiple clothing brands. Add, update, and remove items with ease.",
      "🔐 Secure Access: Ensure only authorized users can access sensitive business data with a secure login system.",
      "🗂️ Record Management System: Easily view, filter, and update records related to products, orders, and customer transactions.",
      "🧠 Smart Data Handling: Real-time syncing with Firebase keeps your data safe, up-to-date, and accessible from anywhere.",
      "📊 Performance Dashboard: Gain insights into brand performance, top-selling items, and current stock levels via a clean, visual dashboard.",
      "💾 Backup & Recovery: Automatic and manual backup options to keep business data safe from unexpected losses.",
      "🖥️ Offline-First Design: Continue managing your business even without an internet connection; the system syncs once reconnected."
    ],
    solutions: [
      "Python-based desktop application with Tkinter UI.",
      "Firebase integration for real-time data management.",
      "Offline-first architecture for reliable operation."
    ],
    results: [
      "Karobar Box has empowered small business owners to ditch spreadsheets and manage their operations with speed and confidence. Users report significant improvements in organization and time efficiency across their brands.",
      "Multi-user collaboration with role-based access. Mobile companion app for on-the-go updates. Analytics for seasonal trends and customer behavior. Integration with barcode scanners and printers.",
      "Karobar Box is more than just a tool—it's a business partner. Built for real-world entrepreneurs, it simplifies complex operations so you can focus on growth. Whether you're running one brand or many, Karobar Box keeps your business in check—efficiently, securely, and smartly."
    ],
    color: "bg-[#296089]",
    textColor: "text-[#f0f2f4]",
    image: "/images/karobarbox.png"
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b334f]">
        <div className="px-6 pt-6">
          <Navbar />
        </div>
        <div className="px-6 pt-32 pb-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl font-black mb-6 text-[#f0f2f4]">Project Not Found</h1>
            <Link 
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-[#f0f2f4] text-[#243342] font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              Back to Projects <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0b334f]">
      {/* Header */}
      <div className="px-6 pt-6">
        <Navbar />
          </div>

      {/* Project Top Section: Centered Heading, Description, and Image */}
      <div className="px-6 pt-32 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4" style={{ color: '#f0f2f4' }}>{project.title}</h1>
          <p className="text-xl mb-8 font-medium" style={{ color: '#f0f2f4' }}>{project.description}</p>
          {project.image && (
            <div className="flex justify-center mb-8">
              <img
                src={project.image}
                alt={project.title + " image"}
                className="rounded-2xl shadow-lg max-h-72 object-contain bg-white"
                style={{ maxWidth: '100%', margin: '0 auto' }}
              />
            </div>
          )}
          </div>
      </div>

      {/* Project Details - Single Column Vertical Layout */}
      <div className="px-6 py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {/* Development Process */}
          <section>
            <h2 className="text-2xl font-black mb-2" style={{ color: '#f0f2f4' }}>Development Process</h2>
            <p className="text-base font-medium" style={{ color: '#f0f2f4' }}>{project.fullDescription}</p>
          </section>

          {/* Features and Functionality */}
          <section>
            <h2 className="text-2xl font-black mb-2" style={{ color: '#f0f2f4' }}>Features and Functionality</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.challenges.map((challenge: string, idx: number) => (
                <li key={idx} className="text-base font-medium" style={{ color: '#f0f2f4' }}>{challenge}</li>
              ))}
            </ul>
          </section>

          {/* Impact and Reception */}
          <section>
            <h2 className="text-2xl font-black mb-2" style={{ color: '#f0f2f4' }}>Impact and Reception</h2>
            <p className="text-base font-medium" style={{ color: '#f0f2f4' }}>{project.results[0]}</p>
          </section>

          {/* Future Directions */}
          <section>
            <h2 className="text-2xl font-black mb-2" style={{ color: '#f0f2f4' }}>Future Directions</h2>
            <p className="text-base font-medium" style={{ color: '#f0f2f4' }}>{project.results[1]}</p>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-black mb-2" style={{ color: '#f0f2f4' }}>Conclusion</h2>
            <p className="text-base font-medium" style={{ color: '#f0f2f4' }}>{project.results[2]}</p>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-[#296089] border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-black mb-6 text-[#f0f2f4]">Ready to Start Your Project?</h2>
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

      {/* Footer */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}