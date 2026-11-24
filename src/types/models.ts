export type Hero = {
  greeting: string;
  name: string;
  roles: string[];
  description: string;
  stats: { number: string; label: string }[];
  socialLinks: { name: string; url: string; icon: string }[];
  ctaButtons: {
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
};

export type Contact = {
  href: string;
  label: string;
  className: string;
};

export type Skills = {
  category: string;
  items: string[];
};

export type Projects = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};
