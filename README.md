# Welcome to my Lovable project
## AcadFlow 💜

**URL**: https://lovable.dev/projects/b9ea3e89-f5bb-42e1-aac3-0a1efb508aab

**Smart, Conflict-Free Academics Powered by AI**

AcadFlow is a modern, multi-page web application designed to help students, faculty, and administrators manage academic schedules efficiently. It aligns with NEP 2020 guidelines and provides AI-powered timetable generation, conflict detection, and analytics — all in a sleek, responsive, and interactive interface.

---

## 🌐 Features

### General
- Modern, eye-catching UI with smooth animations
- Fully responsive design (desktop + mobile)
- Dark Mode toggle 🌙 for light/dark themes
- Consistent branding:
  - **Light Mode:** White + Purple (#6C63FF) + Teal (#00C7B7)  
  - **Dark Mode:** Dark Gray (#1E1E2E) + Neon Purple (#A78BFA) + Aqua (#4ADEDE)

### Landing Page
- Hero Section: Headline, tagline, description, and call-to-action buttons
- Features Section: Cards with icons highlighting:
  - AI Timetable Generator
  - NEP 2020 Compliance
  - Smart Conflict Detector
  - Export & Share (PDF, Excel, Calendar sync)
  - Scalable & Flexible
- Contact Section with form and email contact
- Footer with links: Privacy Policy | Terms | Help

### Authentication
- Role-based Login: Student | Faculty | Admin
- Role-specific Sign Up forms:
  - Student → Name, Roll No, Program, Email, Password
  - Faculty → Name, Department, Email, Password
  - Admin → Institution, Email, Password
- Forgot Password support

### Dashboards (Demo Data Included)
#### Student
- Weekly personal timetable (calendar view)
  - Example:
    - Monday 9-10 AM: Math (Room 101, Prof. Sharma)
    - Tuesday 11-12 PM: Physics Lab (Lab A, Dr. Rao)
    - Wednesday 2-3 PM: AI Elective (Room 204, Dr. Iyer)
- Credit Tracker (progress bars)
  - Major: 18/24, Minor: 9/12, AECC: 4/6
- Assignments panel with demo tasks
- Export timetable → PDF, Excel, Calendar

#### Faculty
- Teaching Schedule (demo data)
  - Example:
    - Monday 10-11 AM: OOP Class, Room 103
    - Wednesday 9-11 AM: DBMS Lab, Lab B
- Workload Overview (hours/week)
- Leave/Block Hours form

#### Admin
- Global Timetable Manager (dummy data pre-filled)
- Conflict Detector with alerts
  - Example: “Conflict detected: Room 101 booked by two classes on Tuesday 11 AM.”
- Scenario Simulator (e.g., reassign classes if a faculty is unavailable)
- Reports & Analytics (charts)
  - Faculty Load Distribution
  - Room Usage

### Extra Features
- Notifications 🔔 (e.g., “Your timetable has been updated.”)
- Smooth transitions between pages
- Fully functional demo data for instant usability

---

## 🛠 Technology Stack
- **Frontend:** HTML, CSS, JavaScript (React.js recommended)
- **Animations & Interactivity:** CSS3 animations, React transitions
- **Responsive Design:** Flexbox/Grid, media queries
- **State Management:** React Context / Redux (optional)
- **Data Handling:** Demo JSON data; ready to integrate backend
- **Export Features:** PDF (jsPDF), Excel (SheetJS), Calendar Sync (ICS files)
- **Dark Mode:** CSS variables / Tailwind/DaisyUI (optional)

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm or yarn
- Modern web browser

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/acadflow.git
