"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, GraduationCap } from "lucide-react"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Laravel", level: 85 },
    { name: "C#", level: 80 },
    { name: "SQL", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "GSAP Animations", level: 75 },
    { name: "Framer Motion", level: 80 },
  ]

  const projects = [
    {
      name: "E-commerce Platform (CasawiTech)",
      description: "Custom online store for electronics & gaming.",
      technologies: ["Next.js", "Laravel", "Tailwind CSS", "SQL"],
    },
    {
      name: "Insurance Management Software",
      description: "C#-based vehicle & motorcycle insurance system.",
      technologies: ["C#", ".NET", "SQL Server", "WPF"],
    },
    {
      name: "Performance Testing Website",
      description: "Speed test and download time estimator.",
      technologies: ["JavaScript", "Next.js", "Framer Motion"],
    },
    {
      name: "Word Add-in with AI Integration",
      description: "JavaScript-based AI-powered document assistant.",
      technologies: ["JavaScript", "Office API", "AI Integration"],
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-12">
          <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-4">
            About Me
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="sticky top-24">
              <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://iili.io/3xQZByl.md.jpg"
                  alt="Amine Zaghi"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">Amine Zaghi</h2>
              <p className="text-moroccan-terracotta font-medium mb-4">Full Stack Developer</p>
              <p className="text-muted-foreground mb-6">
                Passionate about automation, competitive environments, and optimizing speed in web-based solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium w-24">Location:</span>
                  <span className="text-muted-foreground">Casablanca, Morocco</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Email:</span>
                  <span className="text-muted-foreground">amine@zaghi.dev</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Phone:</span>
                  <span className="text-muted-foreground">+212 5 99999999</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Languages:</span>
                  <span className="text-muted-foreground">English, French, Arabic</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="mb-8 bg-moroccan-sand/20 flex flex-wrap justify-center">
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-moroccan-terracotta data-[state=active]:text-white"
                >
                  About Me
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-moroccan-terracotta data-[state=active]:text-white"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="data-[state=active]:bg-moroccan-terracotta data-[state=active]:text-white"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-moroccan-terracotta data-[state=active]:text-white"
                >
                  Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Professional Profile</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Results-driven full-stack developer with expertise in Next.js, JavaScript, Laravel, and C#,
                        specializing in web automation, SaaS platforms, and e-commerce solutions. Experienced in
                        developing high-performance web applications, cloud-based management systems, and AI-integrated
                        tools. Strong background in database management (SQL) and frontend design (Tailwind CSS, GSAP
                        animations, Framer Motion).
                      </p>
                      <p>
                        Passionate about automation, competitive environments, and optimizing speed in web-based
                        solutions. Previously worked on projects like:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>E-commerce Platform (CasawiTech): Custom online store for electronics & gaming.</li>
                        <li>Insurance Management Software: C#-based vehicle & motorcycle insurance system.</li>
                        <li>Performance Testing Website: Speed test and download time estimator.</li>
                        <li>Word Add-in with AI Integration: JavaScript-based AI-powered document assistant.</li>
                      </ul>
                      <p>
                        Adept at problem-solving, performance optimization, and UI/UX design. Open to roles in software
                        development, automation engineering, or SaaS product development.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div
                              className="bg-moroccan-terracotta h-2.5 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10">
                      <h2 className="text-2xl font-bold mb-6">Other Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">Web Automation</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">SaaS Development</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">E-commerce Solutions</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">Performance Optimization</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">UI/UX Design</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">RESTful APIs</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">Cloud Services</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">AI Integration</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">Database Design</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">Responsive Design</Badge>
                        <Badge className="bg-moroccan-sand text-moroccan-terracotta">Git & GitHub</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
                    <div className="space-y-8">
                      {projects.map((project, index) => (
                        <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
                          <div className="flex items-start">
                            <div className="mr-4 mt-1">
                              <Code className="h-5 w-5 text-moroccan-terracotta" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{project.name}</h3>
                              <p className="text-muted-foreground mb-3">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <Badge key={i} variant="outline" className="border-moroccan-terracotta/30">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Education</h2>
                    <div className="space-y-8">
                      <div className="flex">
                        <div className="mr-4 mt-1">
                          <GraduationCap className="h-5 w-5 text-moroccan-terracotta" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">IFIAG</h3>
                          <p className="text-moroccan-terracotta">Vocational School</p>
                          <p className="text-muted-foreground">
                            Specialized in Information Technology and Software Development
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 mt-1">
                          <GraduationCap className="h-5 w-5 text-moroccan-terracotta" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Jodour</h3>
                          <p className="text-moroccan-terracotta">High School</p>
                          <p className="text-muted-foreground">General education with focus on sciences</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-muted rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Note</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This website is a demonstration of a restaurant website design. The "Zaghi Restaurant" is a fictional
            establishment created to showcase web development skills and design capabilities for potential clients
            interested in restaurant websites.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

