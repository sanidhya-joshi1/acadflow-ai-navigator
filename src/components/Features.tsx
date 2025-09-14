import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  ShieldCheck, 
  AlertTriangle, 
  Download, 
  Expand, 
  Calendar,
  Users,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Timetable Generator",
    description: "Advanced AI creates optimized, conflict-free schedules automatically, considering all constraints and preferences."
  },
  {
    icon: ShieldCheck,
    title: "NEP 2020 Compliance",
    description: "Fully supports FYUP, B.Ed., M.Ed., and ITEP programs with flexible credit systems and multidisciplinary approaches."
  },
  {
    icon: AlertTriangle,
    title: "Smart Conflict Detector",
    description: "Instantly identifies and flags scheduling conflicts across rooms, faculty, and student timetables."
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Export schedules to PDF, Excel, or sync directly with Google Calendar and other calendar applications."
  },
  {
    icon: Expand,
    title: "Scalable & Flexible",
    description: "Easily accommodate new programs, courses, and changing requirements without system limitations."
  },
  {
    icon: Calendar,
    title: "Interactive Calendar",
    description: "Beautiful, intuitive calendar interface with drag-and-drop functionality for easy schedule management."
  },
  {
    icon: Users,
    title: "Multi-Role Access",
    description: "Separate dashboards for students, faculty, and administrators with role-specific features and permissions."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Comprehensive insights into faculty workload, room utilization, and schedule optimization metrics."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for <span className="text-gradient">Modern Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage academic schedules efficiently and effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift shadow-card border-0 card-gradient"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 hero-gradient rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}