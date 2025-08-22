import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A comprehensive admin panel application for inventory management. Super admins manage user accounts, while admins oversee product management. Each manager works on a personalized dashboard for efficient task handling.",
      image: "/modern-ecommerce-platform.png",
      technologies: ["Frontend", "Next.js", "TypeScript", "Backend", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Account Manager",
      description:
        "Developing an account details manager for app allows users to organize their account information efficiently. Users can add, edit, and delete account details while also accessing details of any account.",
      image: "/task-management-dashboard.png",
      technologies: ["Frontend", "Next.js", "Backend", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Booking Chat Application",
      description:
        "Real time chat application that allows users to chat individually and in groups with instant messaging. The application also incorporates personal and group conversations, offering a dynamic platform for both personal and group conversations.",
      image: "/mobile-banking-app.png",
      technologies: ["Frontend", "Next.js", "Backend", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Home Price Prediction Application",
      description:
        "Developing a home price prediction application that allows machine learning and data analytics to estimate home prices based on features such as the number of rooms and the location. Items are input through a user-friendly interface.",
      image: "/ai-analytics-dashboard.png",
      technologies: ["Frontend", "React.js", "Backend", "Flask", "Python", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Phone Price Prediction Application",
      description:
        "Creating an iPhone price prediction application for the Sri Lankan market, our app allows machine learning to estimate phone prices based on features such as the iPhone model, memory capacity, and color. Prices are input through a user-friendly interface.",
      image: "/creative-portfolio-website.png",
      technologies: ["Frontend", "React.js", "Backend", "Flask", "Python"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Event Managing Application",
      description:
        "Event Management Application simplifies event creation and management for organizers. It handles event planning and personal booking. The application uses comprehensive event management through a streamlined booking system and enhanced user experience.",
      image: "/task-management-dashboard.png",
      technologies: ["Frontend", "Backend", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group glass-card border-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 glass-card p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="glass text-xs font-medium px-3 py-1 hover:bg-accent/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="glass text-xs font-medium px-3 py-1">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass-card border-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass-card border-0 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
