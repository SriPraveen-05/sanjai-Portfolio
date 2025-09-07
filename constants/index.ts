import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail, MdPhone } from "react-icons/md";

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "GitHub", iconName: "RxGithubLogo", link: "https://github.com/sanjais-hue" },
    ],
  },
  {
    title: "Social Media",
    data: [
      { name: "Linkedin", iconName: "RxLinkedinLogo", link: "https://www.linkedin.com/in/sanjai2609/" },
    ],
  },
  {
    title: "About",
    data: [
      { name: "Contact Me", iconName: "MdEmail", link: "mailto:astssanjai@gmail.com" },
      { name: "Phone", iconName: "MdPhone", link: "tel:7904770162" },
    ],
  },
] as const;

// Navigation links used in Navbar
export const NAV_LINKS = [
  { title: "About", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

// Social links with icon components used by Navbar
export const SOCIALS = [
  { name: "GitHub", link: "https://github.com/sanjais-hue", icon: RxGithubLogo },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/sanjai2609/", icon: RxLinkedinLogo },
  { name: "Phone", link: "tel:7904770162", icon: MdPhone },
  { name: "Email", link: "mailto:astssanjai@gmail.com", icon: MdEmail },
] as const;

// Projects displayed on the Projects section
export const PROJECTS = [
  {
    title: "Humanoid Robot",
    image: "/projects/p1.jpg",
    link: "#projects",
  },
  {
    title: "Service Robot V1",
    image: "/projects/p2.jpg",
    link: "#projects",
  },
  {
    title: "Mobile Humanoid",
    image: "/projects/p3.jpg",
    link: "#projects",
  },
  {
    title: "Serving Robot V2",
    image: "/projects/p4.jpg",
    link: "#projects",
  },
] as const;

// Skills data used by Skills section
export const EMBEDDED_SKILL = [
  { skill_name: "Arduino", image: "Arduino.png", width: 80, height: 80 },
  { skill_name: "ESP", image: "ESP.png", width: 80, height: 80 },
  { skill_name: "Raspberry Pi", image: "Raspberry.png", width: 80, height: 80 },
  { skill_name: "Robotics", image: "Robotics.png", width: 80, height: 80 },
  { skill_name: "IoT", image: "IOT.jpg", width: 80, height: 80 },
  { skill_name: "MQTT", image: "MQTT.png", width: 80, height: 80 },
  { skill_name: "Blynk", image: "Blynk.png", width: 80, height: 80 },
  { skill_name: "Networking", image: "Networking.png", width: 80, height: 80 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80 },
  { skill_name: "Tailwind", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "MUI", image: "mui.png", width: 80, height: 80 },
  { skill_name: "Framer", image: "framer.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 80, height: 80 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "mysql.png", width: 80, height: 80 },
  { skill_name: "Prisma", image: "prisma.png", width: 80, height: 80 },
  { skill_name: "GraphQL", image: "graphql.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
  { skill_name: "Docker", image: "docker.png", width: 80, height: 80 },
  { skill_name: "Go", image: "go.png", width: 80, height: 80 },
  { skill_name: "Cloud", image: "Cloud.png", width: 80, height: 80 },
  { skill_name: "Firebase", image: "Firebase.png", width: 80, height: 80 },
] as const;

// Achievements data used in Achievements section
export const ACHIEVEMENTS = [
  {
    title: "Built a 3D-printed Humanoid Robot",
    date: "2024",
    description:
      "Designed and assembled a functional humanoid platform with articulated arms and expressive head movements.",
    image: "/achieve/a1.jpg",
  },
  {
    title: "Autonomous Service Robot Prototype",
    date: "2023",
    description:
      "Developed a mobile service robot with tray delivery and interactive LED face using ESP32 and ROS-lite stack.",
    image: "/achieve/a2.jpg",
  },
  {
    title: "Campus Assistance Robot Deployment",
    date: "2022",
    description:
      "Deployed a navigation-enabled robot in campus corridors with ultrasonic obstacle avoidance and voice prompts.",
    image: "/achieve/a3.jpg",
  },
  {
    title: "IoT Systems Showcase",
    date: "2021",
    description:
      "Demonstrated end-to-end IoT automation with MQTT, cloud dashboards, and mobile app control.",
    image: "/achieve/a4.jpg",
  },
] as const;
