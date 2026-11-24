import type { Contact } from "@/types/models";

export const contactLinks: Contact[] = [
  {
    href: "mailto:jonathandajome@gmail.com",
    label: "Email Me",
    className:
      "bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium",
  },
  {
    href: "https://github.com/jonni595",
    label: "GitHub",
    className:
      "border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors text-sm font-medium",
  },
  {
    href: "https://linkedin.com/in/jonathandajome",
    label: "LinkedIn",
    className:
      "border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors text-sm font-medium",
  },
];
