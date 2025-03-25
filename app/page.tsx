"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Users,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Testimonial } from "@/components/testimonial"
import { ContactForm } from "@/components/contact-form"
import { ParticlesBackground } from "@/components/particles-background"
import { FloatingShapes } from "@/components/floating-shapes"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "why-us", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image src="/images/logo.png" alt="Ego Fusion Logo" width={40} height={40} className="h-10 w-auto" />
              </motion.div>
              <span className="text-xl font-bold">Ego Fusion</span>
            </Link>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["about", "services", "why-us", "contact"].map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={`#${section}`}
                  className={`text-sm font-medium relative ${activeSection === section ? "text-primary" : "hover:text-primary"}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeSection"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button asChild className="hidden md:flex" whileTap={{ scale: 0.95 }}>
                <Link href="#contact">Get Started</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="md:hidden">
              <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t bg-background"
            >
              <div className="container py-4 flex flex-col space-y-4">
                {["about", "services", "why-us", "contact"].map((section, index) => (
                  <motion.div
                    key={section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link href={`#${section}`} className="text-lg font-medium block py-2" onClick={toggleMobileMenu}>
                      {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button asChild className="w-full" onClick={toggleMobileMenu}>
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <ParticlesBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                  >
                    Financial Excellence Meets Innovation
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                  >
                    Trusted, innovative, and client-centered financial solutions that drive business growth and success.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                    >
                      <Link href="#contact">Get Started</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="#services">Our Services</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-3xl" />
                  <Image
                    src="/images/logo.png"
                    width={400}
                    height={400}
                    alt="Ego Fusion Logo"
                    className="max-w-full h-auto relative z-10"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <FloatingShapes />
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                >
                  Our Vision & Mission
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  At Ego Fusion, we're passionate about empowering businesses to thrive in an ever-evolving landscape.
                  Our team of experts specializes in providing tailored financial and accounting services designed to
                  meet the unique needs of each client.
                </motion.p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-blue-600/20 blur-xl" />
                <Image
                  src="/images/team-ethics.jpg"
                  width={550}
                  height={400}
                  alt="Team discussing ethical business practices"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full relative z-10"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center space-y-4"
              >
                <ul className="grid gap-6">
                  {[
                    {
                      title: "Our Vision",
                      content:
                        "To redefine the standards of financial excellence by delivering trusted, innovative, and client-centered solutions.",
                    },
                    {
                      title: "Our Mission",
                      content:
                        "Through our unwavering commitment to accuracy, transparency, and expert insight, we help businesses navigate financial complexities, optimize performance, and achieve their strategic goals.",
                    },
                    {
                      title: "Our Commitment",
                      content:
                        "Join us on our mission to revolutionize the world of finance and accounting. Let's connect and explore how our expertise can help your business soar to new heights.",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="grid gap-1 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                >
                  Comprehensive Financial Solutions
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  We offer a wide range of financial and accounting services tailored to meet the unique needs of
                  startups, SMEs, and small business owners.
                </motion.p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <BarChart3 className="h-6 w-6 text-primary" />,
                  title: "Financial Analysis",
                  description:
                    "Comprehensive financial analysis to help you understand your business's financial health and make informed decisions.",
                },
                {
                  icon: <DollarSign className="h-6 w-6 text-primary" />,
                  title: "Tax Planning",
                  description:
                    "Strategic tax planning and preparation services to minimize your tax burden and ensure compliance.",
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Business Advisory",
                  description:
                    "Expert business advisory services to help you navigate challenges and capitalize on opportunities.",
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />,
                  title: "Bookkeeping",
                  description:
                    "Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.",
                },
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  title: "Audit & Assurance",
                  description:
                    "Comprehensive audit and assurance services to enhance credibility and identify areas for improvement.",
                },
                {
                  icon: <ArrowRight className="h-6 w-6 text-primary" />,
                  title: "Financial Planning",
                  description:
                    "Strategic financial planning to help you achieve your short-term and long-term business goals.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
                  className="bg-background rounded-xl border shadow-sm overflow-hidden"
                >
                  <Card className="border-0 shadow-none h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                >
                  The Ego Fusion Advantage
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  What sets us apart from other financial and accounting service providers.
                </motion.p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Expertise",
                  description:
                    "Our team consists of highly qualified professionals with extensive experience in finance and accounting.",
                },
                {
                  title: "Personalized Approach",
                  description: "We tailor our services to meet the unique needs and goals of each client.",
                },
                {
                  title: "Innovation",
                  description:
                    "We leverage the latest technologies and methodologies to deliver efficient and effective solutions.",
                },
                {
                  title: "Transparency",
                  description: "We maintain open and honest communication with our clients throughout the engagement.",
                },
                {
                  title: "Reliability",
                  description: "We deliver on our promises and meet deadlines consistently.",
                },
                {
                  title: "Client-Centric",
                  description:
                    "Your success is our priority, and we go above and beyond to help you achieve your goals.",
                },
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)",
                  }}
                  className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
                  >
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{advantage.title}</h3>
                  <p className="text-center text-muted-foreground">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                >
                  What Our Clients Say
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </motion.p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Ego Fusion transformed our financial operations. Their expertise and personalized approach have been invaluable to our business growth.",
                  author: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                },
                {
                  quote:
                    "Working with Ego Fusion has been a game-changer for our startup. Their strategic financial advice helped us secure funding and scale efficiently.",
                  author: "Michael Chen",
                  role: "Founder, GrowthLabs",
                },
                {
                  quote:
                    "The team at Ego Fusion goes above and beyond. Their attention to detail and commitment to excellence is unmatched in the industry.",
                  author: "Jessica Williams",
                  role: "CFO, Innovate Solutions",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Testimonial quote={testimonial.quote} author={testimonial.author} role={testimonial.role} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                >
                  Get In Touch
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Ready to take your business to the next level? Contact us today to schedule a consultation.
                </motion.p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-4"
              >
                {[
                  {
                    icon: <MapPin className="h-5 w-5 text-primary" />,
                    title: "Location",
                    content: "Toronto, Ontario, Canada",
                  },
                  {
                    icon: <Mail className="h-5 w-5 text-primary" />,
                    title: "Email",
                    content: "info.egofusion@gmail.com",
                  },
                  {
                    icon: <Phone className="h-5 w-5 text-primary" />,
                    title: "Phone",
                    content: "1 (437) 973-4037",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
                    >
                      {item.icon}
                    </motion.div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-6"
                >
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="font-medium">Monday - Friday</div>
                    <div className="text-muted-foreground">9:00 AM - 5:00 PM</div>
                    <div className="font-medium">Saturday</div>
                    <div className="text-muted-foreground">10:00 AM - 2:00 PM</div>
                    <div className="font-medium">Sunday</div>
                    <div className="text-muted-foreground">Closed</div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-lg border bg-card p-6 shadow-sm relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-lg blur-sm" />
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image src="/images/logo.png" alt="Ego Fusion Logo" width={32} height={32} className="h-8 w-auto" />
              </motion.div>
              <span className="text-lg font-bold">Ego Fusion</span>
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-sm text-muted-foreground md:text-left"
          >
            &copy; {new Date().getFullYear()} Ego Fusion. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
                label: "Facebook",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                ),
                label: "Instagram",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                ),
                label: "Twitter",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <motion.div key={index} whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

