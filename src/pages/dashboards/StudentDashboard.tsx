import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Calendar, 
  BookOpen, 
  FileText, 
  Download,
  Clock,
  User,
  Award
} from "lucide-react";

// Demo data
const timetableData = [
  { day: "Monday", time: "9:00-10:00 AM", subject: "Mathematics", room: "Room 101", professor: "Prof. Sharma" },
  { day: "Tuesday", time: "11:00-12:00 PM", subject: "Physics Lab", room: "Lab A", professor: "Dr. Rao" },
  { day: "Wednesday", time: "2:00-3:00 PM", subject: "AI Elective", room: "Room 204", professor: "Dr. Iyer" },
  { day: "Thursday", time: "10:00-11:00 AM", subject: "Data Structures", room: "Room 103", professor: "Prof. Kumar" },
  { day: "Friday", time: "3:00-4:00 PM", subject: "Software Engineering", room: "Room 205", professor: "Dr. Singh" }
];

const assignments = [
  { title: "Physics Lab Report", subject: "Physics", dueDate: "Sept 12", status: "pending" },
  { title: "AI Project Proposal", subject: "Artificial Intelligence", dueDate: "Sept 15", status: "pending" },
  { title: "Math Assignment 3", subject: "Mathematics", dueDate: "Sept 10", status: "completed" }
];

const creditProgress = {
  major: { current: 18, total: 24 },
  minor: { current: 9, total: 12 },
  aecc: { current: 4, total: 6 }
};

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Welcome back, <span className="text-gradient">Alex!</span>
          </h2>
          <p className="text-muted-foreground">
            Here's your personalized academic overview. Stay on top of your schedule and progress.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">5</div>
              <div className="text-sm text-muted-foreground">Classes This Week</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">2</div>
              <div className="text-sm text-muted-foreground">Pending Assignments</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">31</div>
              <div className="text-sm text-muted-foreground">Total Credits</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">8.4</div>
              <div className="text-sm text-muted-foreground">Current GPA</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Timetable */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Personal Timetable</span>
                </CardTitle>
                <Button variant="outline" size="sm" className="hover-glow">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timetableData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg hover-lift">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 text-center">
                          <div className="text-sm font-medium">{item.day}</div>
                          <div className="text-xs text-muted-foreground">{item.time}</div>
                        </div>
                        <div>
                          <div className="font-medium">{item.subject}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.room} • {item.professor}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Scheduled
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Credit Tracker & Assignments */}
          <div className="space-y-6">
            {/* Credit Tracker */}
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Credit Tracker</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Major Credits</span>
                    <span className="text-sm text-muted-foreground">
                      {creditProgress.major.current}/{creditProgress.major.total}
                    </span>
                  </div>
                  <Progress 
                    value={(creditProgress.major.current / creditProgress.major.total) * 100} 
                    className="h-2"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Minor Credits</span>
                    <span className="text-sm text-muted-foreground">
                      {creditProgress.minor.current}/{creditProgress.minor.total}
                    </span>
                  </div>
                  <Progress 
                    value={(creditProgress.minor.current / creditProgress.minor.total) * 100} 
                    className="h-2"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">AECC Credits</span>
                    <span className="text-sm text-muted-foreground">
                      {creditProgress.aecc.current}/{creditProgress.aecc.total}
                    </span>
                  </div>
                  <Progress 
                    value={(creditProgress.aecc.current / creditProgress.aecc.total) * 100} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Assignments Panel */}
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Assignments</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg hover-lift">
                      <div>
                        <div className="font-medium text-sm">{assignment.title}</div>
                        <div className="text-xs text-muted-foreground">{assignment.subject}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground mb-1">Due: {assignment.dueDate}</div>
                        <Badge 
                          variant={assignment.status === "completed" ? "default" : "secondary"}
                          className={assignment.status === "completed" ? "bg-secondary text-secondary-foreground" : "bg-destructive/10 text-destructive"}
                        >
                          {assignment.status === "completed" ? "Completed" : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}