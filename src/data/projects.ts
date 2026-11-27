import type { Projects } from "@/types/models";

export const projects: Projects[] = [
  {
    title: "Game Hub",
    description:
      "A web application that allows users to browse and discover video games. It provides information about various games, including their genres, platforms, and release dates.",
    tech: ["React", "TypeScript", "Axios", "Framer Motion"],
    github: "https://github.com/jonni595/game-hub",
    demo: "https://game-hub-jd.netlify.app/",
  },
  {
    title: "Task Management App",
    description:
      "A task management application that allows users to create, edit, and delete tasks. It features a clean and intuitive interface, with the ability to categorize tasks and set priorities.",
    tech: ["React", "TypeScript", "Vite", "Local Storage"],
    github: "https://github.com/jonni595/todo-list",
    demo: "https://todo-list-app-jd.netlify.app/",
  },
  {
    title: "Movie App",
    description:
      "Discover and explore movies with detailed information, ratings, and trailers.",
    tech: ["React", "Open Movie Database API"],
    github: "https://github.com/jonni595/movie-app",
    demo: "https://movie-app-jd.netlify.app/",
  },
];
