"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState<"fullstack" | "aiml">("fullstack")

  const fullstackTechnologies = [
    { name: "React.js", category: "Frontend", level: 90 },
    { name: "JavaScript", category: "Language", level: 85 },
    { name: "Next.js", category: "Framework", level: 88 },
    { name: "TypeScript", category: "Language", level: 82 },
    { name: "Express.js", category: "Backend", level: 80 },
    { name: "Node.js", category: "Runtime", level: 83 },
    { name: "Tailwind CSS", category: "Styling", level: 92 },
    { name: "MongoDB", category: "Database", level: 78 },
    { name: "MySQL", category: "Database", level: 76 },
    { name: "Python", category: "Language", level: 85 },
    { name: "Flask", category: "Framework", level: 75 },
    { name: "Git", category: "Version Control", level: 88 },
  ]

  const aimlTechnologies = [
    { name: "Python", category: "Language", level: 90 },
    { name: "TensorFlow", category: "Framework", level: 85 },
    { name: "PyTorch", category: "Framework", level: 80 },
    { name: "Scikit-learn", category: "Library", level: 88 },
    { name: "Pandas", category: "Data Analysis", level: 92 },
    { name: "NumPy", category: "Computing", level: 90 },
    { name: "Matplotlib", category: "Visualization", level: 85 },
    { name: "Jupyter", category: "Environment", level: 88 },
    { name: "OpenCV", category: "Computer Vision", level: 75 },
    { name: "NLTK", category: "NLP", level: 70 },
    { name: "Keras", category: "Deep Learning", level: 82 },
    { name: "SQL", category: "Database", level: 85 },
  ]

  const currentTechnologies = activeCategory === "fullstack" ? fullstackTechnologies : aimlTechnologies

  const education = [
    {
      degree: "B.Sc (Hons) Information Technology",
      institution: "University of Moratuwa",
      status: "Current Student & Freelancer",
      year: "2022 - Present",
    },
  ]

  return (
    <section id="technologies" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Technologies & Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across modern web technologies and machine learning frameworks
          </p>
        </div>

        <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="glass-card p-2 rounded-full flex gap-2">
            <button
              onClick={() => setActiveCategory("fullstack")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === "fullstack"
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Full Stack Development
            </button>
            <button
              onClick={() => setActiveCategory("aiml")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === "aiml"
                  ? "bg-gradient-to-r from-secondary to-accent text-white shadow-lg"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              AI/ML & Data Science
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {currentTechnologies.map((tech, index) => (
            <Card
              key={`${activeCategory}-${index}`}
              className="glass-card border-0 hover:scale-105 transition-all duration-500 hover:shadow-xl animate-scale-in group leading-7"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4 sm:p-6 sm:px-1 sm:py-0.5">
                <div className="text-center mb-4">
                  <div className="text-base sm:text-lg font-bold text-foreground mb-1">{tech.name}</div>
                  

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      
                      
                    </div>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Education & Experience
          </h3>
          <div className="max-w-4xl mx-auto">
            {education.map((item, index) => (
              <Card key={index} className="glass-card border-0 hover:scale-105 transition-all duration-500 mb-6">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center text-center md:text-left">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{item.degree}</h4>
                      <p className="text-base sm:text-lg text-primary font-semibold mb-1">{item.institution}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{item.status}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="glass px-4 py-2 rounded-full inline-block">
                        <span className="text-accent font-bold text-sm sm:text-base">{item.year}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
