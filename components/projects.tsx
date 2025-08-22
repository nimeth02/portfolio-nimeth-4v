import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Tea Farming Support Assistant",
      description:
        "AI-powered multi-agent assistant for tea farmers. Includes disease diagnosis via RAG, fertilizer recommendations using weather/land data, and FAQ help service. Integrated LLM-based query routing with LangChain and LangGraph.",
      image: "/tea-farming-assistant.png",
      technologies: [
        "FastAPI",
        "LangChain",
        "LangGraph",
        "Pinecone",
        "Scikit-learn",
        "Pandas",
      ],
      githubUrl: "https://github.com/nimeth02/Tea-support-assistant/tree/main/Chat_Bot"
    },
    {
      title: "Studio Management System",
      description:
        "Comprehensive platform for studio operations with customer bookings, manager dashboard for POS, inventory, and events, plus a staff mobile app. Developed backend and frontend as group leader under Optimize Solutions mentorship.",
      image: "/studio-management.png",
      technologies: [
        "React.js",
        "Node.js",
        "MSSQL",
        "Flutter",
        "Socket.io",
      ],
      githubUrl: "#",
    },
    {
      title: "Tomato Disease Detector",
      description:
        "AI system for detecting crop diseases from tomato leaf images using computer vision and ML. Integrated TensorFlow models, Matplotlib visualization, FastAPI backend, and React.js frontend for real-time diagnosis.",
      image: "/tomato-disease-detector.png",
      technologies: [
        "React.js",
        "FastAPI",
        "TensorFlow",
        "Matplotlib",
      ],
      githubUrl: "#",
    },
    {
      title: "Green Haven - E-commerce Platform",
      description:
        "University group project for a plant shop with customer portal, admin dashboard, Stripe payment integration, and microservice-based performance optimization. Authentication via OAuth and Redis for session management.",
      image: "/green-haven.png",
      technologies: [
        "React.js",
        "Node.js",
        "Redis",
        "gRPC",
        "RabbitMQ",
      ],
      githubUrl: "#",
    },
  ];
  

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
                  {project.technologies.slice(0,5).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="glass text-xs font-medium px-3 py-1 hover:bg-accent/20 text-slate-500 "
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length >5 && (
                    <Badge variant="secondary" className="glass text-xs font-medium px-3 py-1 text-slate-500">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.title + " GitHub"}
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full glass-card border-0 text-slate-500 "
                      >
                        <Github size={16} className="mr-2" />
                        Source
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
