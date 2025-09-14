import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Calendar, 
  AlertTriangle, 
  Settings, 
  BarChart3,
  Users,
  Building,
  Clock,
  BookOpen,
  PieChart
} from "lucide-react";

// Demo data
const globalTimetable = [
  { program: "B.Tech CS", room: "Room 101", time: "9:00-10:00 AM", subject: "Data Structures", students: 45 },
  { program: "B.Ed", room: "Room 203", time: "10:00-11:00 AM", subject: "Educational Psychology", students: 35 },
  { program: "M.Ed", room: "Lab A", time: "11:00-12:00 PM", subject: "Research Methods", students: 25 },
  { program: "ITEP", room: "Room 105", time: "2:00-3:00 PM", subject: "Teaching Methodology", students: 30 }
];

const conflicts = [
  { type: "Room Conflict", description: "Room 101 booked by two classes on Tuesday 11 AM", severity: "high" },
  { type: "Faculty Conflict", description: "Dr. Sharma assigned to multiple classes at same time", severity: "medium" },
  { type: "Capacity Issue", description: "Room 205 overcapacity for 60 students", severity: "low" }
];

const facultyWorkload = [
  { name: "Dr. Sharma", hours: 10, courses: 3, utilization: 62 },
  { name: "Dr. Iyer", hours: 12, courses: 4, utilization: 75 },
  { name: "Dr. Rao", hours: 8, courses: 2, utilization: 50 },
  { name: "Prof. Kumar", hours: 14, courses: 5, utilization: 87 }
];

const roomUsage = [
  { room: "Room 101", utilization: 80, hours: 32 },
  { room: "Lab A", utilization: 65, hours: 26 },
  { room: "Room 203", utilization: 70, hours: 28 },
  { room: "Room 105", utilization: 55, hours: 22 }
];

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            System Overview, <span className="text-gradient">Admin!</span>
          </h2>
          <p className="text-muted-foreground">
            Monitor and manage the entire academic scheduling system across all programs.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 hero-gradient rounded-full flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gradient mb-1">24</div>
              <div className="text-xs text-muted-foreground">Active Programs</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 hero-gradient rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gradient mb-1">1,247</div>
              <div className="text-xs text-muted-foreground">Total Students</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 hero-gradient rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gradient mb-1">89</div>
              <div className="text-xs text-muted-foreground">Faculty Members</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 hero-gradient rounded-full flex items-center justify-center">
                <Building className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gradient mb-1">45</div>
              <div className="text-xs text-muted-foreground">Rooms Available</div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card card-gradient border-0">
            <CardContent className="p-6 text-center">
              <div className="w-10 h-10 mx-auto mb-3 hero-gradient rounded-full flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gradient mb-1">3</div>
              <div className="text-xs text-muted-foreground">Active Conflicts</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Global Timetable Manager */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Global Timetable Manager</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {globalTimetable.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg hover-lift">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="text-xs">
                          {item.program}
                        </Badge>
                        <div>
                          <div className="font-medium">{item.subject}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.room} • {item.time} • {item.students} students
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover-glow">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conflict Detector */}
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <span>Conflict Detector</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {conflicts.map((conflict, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg hover-lift">
                      <div>
                        <div className="font-medium text-sm">{conflict.type}</div>
                        <div className="text-xs text-muted-foreground">{conflict.description}</div>
                      </div>
                      <Badge 
                        variant={conflict.severity === "high" ? "destructive" : conflict.severity === "medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {conflict.severity.toUpperCase()}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 hero-gradient hover-glow text-white border-0">
                  Auto-Resolve Conflicts
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Analytics & Tools */}
          <div className="space-y-6">
            {/* Scenario Simulator */}
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Scenario Simulator</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Test Scenario</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scenario..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="faculty-unavailable">Faculty Unavailable</SelectItem>
                      <SelectItem value="room-maintenance">Room Maintenance</SelectItem>
                      <SelectItem value="course-addition">New Course Addition</SelectItem>
                      <SelectItem value="capacity-change">Capacity Change</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="p-3 bg-accent/20 rounded-lg">
                  <div className="text-sm font-medium mb-1">Current Simulation:</div>
                  <div className="text-xs text-muted-foreground">
                    If Dr. Rao is unavailable → reassign Physics Lab to Dr. Menon
                  </div>
                </div>

                <Button className="w-full hero-gradient hover-glow text-white border-0">
                  Run Simulation
                </Button>
              </CardContent>
            </Card>

            {/* Faculty Workload Chart */}
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Faculty Load</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {facultyWorkload.map((faculty, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{faculty.name}</span>
                        <span className="text-xs text-muted-foreground">{faculty.hours}hrs</span>
                      </div>
                      <div className="w-full bg-accent/30 rounded-full h-2">
                        <div 
                          className="hero-gradient h-2 rounded-full transition-all" 
                          style={{ width: `${faculty.utilization}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {faculty.courses} courses • {faculty.utilization}% utilization
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Room Usage */}
            <Card className="shadow-elegant hover-lift card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  <span>Room Usage</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {roomUsage.map((room, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-accent/20 rounded">
                      <div>
                        <div className="text-sm font-medium">{room.room}</div>
                        <div className="text-xs text-muted-foreground">{room.hours}hrs/week</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-primary">{room.utilization}%</div>
                        <div className="text-xs text-muted-foreground">occupied</div>
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