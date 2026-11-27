import type { Hero } from "@/types/models";

export const heroData: Hero = {
  greeting: "👋 Hello, I'm",
  name: "Jonathan Dajome",
  roles: ["Frontend Developer", "React Specialist", "TypeScript Enthusiast"],
  description:
    "I am a passionate frontend developer with a strong focus on creating dynamic and responsive web applications. With expertise in React, TypeScript, and modern web technologies, I strive to deliver seamless user experiences and innovative solutions.",
  stats: [
    { number: "2+", label: "Years Experience" },
    { number: "3+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/jonni595",
      icon: "Code",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jonathan-dajome",
      icon: "Briefcase",
    },
    {
      name: "Email",
      url: "mailto:jonathandajome@gmail.com",
      icon: "Mail",
    },
  ],
  ctaButtons: [
    {
      text: "View My Work",
      href: "#projects",
      variant: "primary",
    },
    {
      text: "Let's Connect",
      href: "#contact",
      variant: "secondary",
    },
  ],
};
