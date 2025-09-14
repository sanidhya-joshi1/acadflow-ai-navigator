import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-accent-foreground/20 mb-8 hover-lift">
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium">AI-Powered Timetable System</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">AcadFlow</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Smart, Conflict-Free Academics Powered by AI
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            AcadFlow is an AI-powered timetable system aligned with NEP 2020. It helps students, 
            faculty, and administrators manage multidisciplinary courses with ease — ensuring 
            optimized schedules, balanced workloads, and flexibility.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="lg" className="hero-gradient hover-glow text-white border-0 px-8 py-6 text-lg">
                🚀 Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-lift px-8 py-6 text-lg"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔍 Explore Features
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Conflict-Free Schedules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Supported Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">AI Optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}