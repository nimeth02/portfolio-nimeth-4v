import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Facebook, Download, Sparkles, Code, Brain, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-none">
            <div className="relative animate-scale-in">
              <div className="absolute -top-8 -left-8 glass-card p-3 rounded-full animate-float">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div
                className="absolute -bottom-8 -right-8 glass-card p-3 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <div
                className="absolute top-1/2 -right-12 glass-card p-3 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Sparkles className="w-6 h-6 text-accent" />
              </div>

              <div className="w-64 h-64 sm:w-80 sm:h-80 glass-card rounded-full p-2 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/Nimeth Nimdinu Profile Picture.png"
                    alt="Nimeth Nimdinu"
                    className="w-60 h-60 sm:w-72 sm:h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left animate-slide-in-left order-2 lg:order-none">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Nimeth
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                  Nimdinu
                </span>
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <span className="glass-card px-4 py-2 rounded-full text-sm font-semibold text-primary">
                  Intern Software Engineer
                </span>
                <span className="glass-card px-4 py-2 rounded-full text-sm font-semibold text-secondary">
                  AI Enthusiest
                </span>
              </div>
            </div>

            <Card className="glass-card p-6 sm:p-8 mb-8 border-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                I  am a final year undergraduate student at the Faculty of Information
                Technology, University of Moratuwa, specializing in machine learning and
                artificial intelligence. I am on the verge of completing my internship and
                am now seeking an Associate AI Engineer role to apply my full-stack and
                AI skills to solve complex challenges and contribute to innovative IT
                solutions.
              </p>
            </Card>

            <div
              className="flex justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://www.linkedin.com/in/nimeth-nimdinu-231396213"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card hover:glass border-0 hover:text-accent hover:scale-110 transition-all duration-300 bg-transparent"
                >
                  <Linkedin size={20} />
                </Button>
              </a>
              <a
                href="https://github.com/nimeth02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card hover:glass border-0 hover:text-accent hover:scale-110 transition-all duration-300 bg-transparent"
                >
                  <Github size={20} />
                </Button>
              </a>
              <a
                href="https://medium.com/@20011002nimeth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass-card hover:glass border-0 hover:text-accent hover:scale-110 transition-all duration-300 bg-transparent"
                >
                  <BookOpen size={20} />
                </Button>
              </a>
            </div>

            <a
              href="/Nimeth-AI.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:to-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                <Download className="mr-2" size={20} />
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
