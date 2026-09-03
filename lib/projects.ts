export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  status?: string;
  href: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "ig-easy-auto",
    number: "01",
    title: "IG Easy Auto",
    category: "PRODUCT / WEB",
    description: "A production vehicle dealership platform built for customer-facing sales and procurement workflows, with dealership data management on the backend.",
    href: "https://www.igeasyauto.com",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    slug: "ai-engineer-roadmap",
    number: "02",
    title: "AI Engineer Roadmap",
    category: "PRODUCT / SOFTWARE",
    description: "A web-based roadmap and progress tracker for structuring an AI engineering learning path.",
    href: "https://airoadmaplearn.vercel.app/",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "ai-ml-learning",
    number: "03",
    title: "AI/ML Learning",
    category: "MACHINE LEARNING",
    description: "An active learning repository documenting progression from Python and data analysis into machine learning with scikit-learn.",
    status: "IN PROGRESS",
    href: "https://github.com/b-a-r-n-s/ai-ml-learning",
    stack: ["Python", "NumPy", "Pandas", "scikit-learn"],
  },
  {
    slug: "arduino-smart-home",
    number: "04",
    title: "Arduino Smart Home",
    category: "EMBEDDED / IOT",
    description: "An ESP32 smart-home automation system combining environmental sensing, relay control, MQTT communication and Alexa integration.",
    href: "https://github.com/b-a-r-n-s/arduino-smart-home",
    stack: ["ESP32", "C++", "MQTT", "Sinric Pro"],
  },
  {
    slug: "autonomous-ground-vehicle",
    number: "05",
    title: "Autonomous Ground Vehicle",
    category: "CONTROL SYSTEMS",
    description: "An ongoing engineering project modelling an autonomous ground vehicle with nonlinear vehicle dynamics and feedback-control methods.",
    status: "IN PROGRESS",
    href: "https://github.com/b-a-r-n-s/autonomous-ground-vehicle",
    stack: ["Python", "NumPy", "Matplotlib", "PID / LQR"],
  },
];
