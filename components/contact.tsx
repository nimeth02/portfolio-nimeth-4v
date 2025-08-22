"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, User, AtSign } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm very approachable and would love to speak to you. Feel free to call, send me an email, or simply
            complete the inquiry form.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-in-left">
            <Card className="glass-card border-0 hover:scale-105 transition-all duration-500 hover:shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">nimeth@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+94 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Moratuwa, Sri Lanka</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card border-0 hover:shadow-xl transition-all duration-500 animate-slide-in-right">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-accent" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-0 pl-12 h-14 text-lg focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative group">
                  <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass border-0 pl-12 h-14 text-lg focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative group">
                  <MessageCircle className="absolute left-4 top-4 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-0 pl-12 pt-4 min-h-32 text-lg resize-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold h-14 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Send className="mr-3 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
