import { ReactNode } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  GraduationCap, 
  LogOut, 
  Bell,
  User,
  Users,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardLayoutProps {
  children: ReactNode;
}

const roleIcons = {
  student: User,
  faculty: Users,
  admin: Shield
};

const roleTitles = {
  student: "Student Dashboard",
  faculty: "Faculty Dashboard", 
  admin: "Admin Dashboard"
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "Thank you for using AcadFlow!",
    });
    navigate("/");
  };

  const RoleIcon = roleIcons[role as keyof typeof roleIcons] || User;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="glass border-b sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 hover-lift">
              <div className="p-2 rounded-lg hero-gradient">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">AcadFlow</span>
            </Link>

            {/* Dashboard Title */}
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg hero-gradient">
                <RoleIcon className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-lg font-semibold">
                {roleTitles[role as keyof typeof roleTitles]}
              </h1>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover-glow rounded-full">
                <Bell className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="hover-lift"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}