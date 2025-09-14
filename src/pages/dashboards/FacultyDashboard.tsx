import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Calendar, 
  Clock, 
  Users, 
  BookOpen,
  BarChart3,
  PauseCircle,
  CheckCircle
} from "lucide-react";

// Demo data
const teachingSchedule = [
  { day: "Monday", time: "10:00-11:00 AM", subject: "OOP Concepts", room: "Room 103", students: 45 },
  { day: "Wednesday", time: "9:00-11:00 AM", subject: "DBMS Lab", room: "Lab B", students: 30 },
  { day: "Thursday", time: "2:00-3:00 PM", subject: "Software Engineering", room: "Room 205", students: 50 },
  { day: "Friday", time: "11:00-12:00 PM", subject: "Data Structures", room: "Room 104", students: 42 }
];

const workloadData = {
  totalHours: 12,
  theoryHours: 8,
  practicalHours: 4,
  maxHours: 16
};

export default function FacultyDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Welcome, <span className="text-gradient">Dr. Sarah Johnson!</span>
          </h2>
          <p className="text-muted-foreground">
            Manage your teaching schedule, track workload, and optimize your academic time.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">4</div>
              <div className="text-sm text-muted-foreground">Active Courses</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">167</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">12</div>
              <div className="text-sm text-muted-foreground">Hours/Week</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">92%</div>
              <div className="text-sm text-muted-foreground">Attendance Rate</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Teaching Schedule */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Teaching Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teachingSchedule.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg hover-lift">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 text-center">
                          <div className="text-sm font-medium">{item.day}</div>
                          <div className="text-xs text-muted-foreground">{item.time}</div>
                        </div>
                        <div>
                          <div className="font-medium">{item.subject}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.room} • {item.students} students
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Active
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Workload Overview */}
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Workload Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Total Hours</span>
                    <span className="text-sm text-muted-foreground">
                      {workloadData.totalHours}/{workloadData.maxHours} hrs/week
                    </span>
                  </div>
                  <Progress 
                    value={(workloadData.totalHours / workloadData.maxHours) * 100} 
                    className="h-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-accent/20 rounded-lg">
                    <div className="text-lg font-semibold text-primary">{workloadData.theoryHours}</div>
                    <div className="text-xs text-muted-foreground">Theory Hours</div>
                  </div>
                  <div className="text-center p-3 bg-accent/20 rounded-lg">
                    <div className="text-lg font-semibold text-secondary">{workloadData.practicalHours}</div>
                    <div className="text-xs text-muted-foreground">Practical Hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span className="text-muted-foreground">Within optimal range</span>
                </div>
              </CardContent>
            </Card>

            {/* Block Hours Form */}
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PauseCircle className="h-5 w-5 text-primary" />
                  <span>Block Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      placeholder="Select date"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="start-time">Start Time</Label>
                      <Input 
                        id="start-time" 
                        type="time"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-time">End Time</Label>
                      <Input 
                        id="end-time" 
                        type="time"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason</Label>
                    <Input 
                      id="reason" 
                      placeholder="Meeting, conference, etc."
                    />
                  </div>

                  <Button className="w-full hero-gradient hover-glow text-white border-0">
                    Block Time Slot
                  </Button>
                </div>

                {/* Blocked Hours List */}
                <div className="mt-6 space-y-2">
                  <h4 className="text-sm font-medium">Upcoming Blocks</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-accent/20 rounded text-xs">
                      <div className="font-medium">Faculty Meeting</div>
                      <div className="text-muted-foreground">Sept 15, 2:00-3:00 PM</div>
                    </div>
                    <div className="p-2 bg-accent/20 rounded text-xs">
                      <div className="font-medium">Research Conference</div>
                      <div className="text-muted-foreground">Sept 18, 10:00 AM-12:00 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}