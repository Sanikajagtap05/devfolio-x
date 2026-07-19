import studyverse from "../assets/projects/studyverse.png";
import canva from "../assets/projects/canva.png";
import ecommerce from "../assets/projects/ecommerce.png";

const projects = [
  {
    id: 1,
    title: "StudyVerse",
    image: studyverse,
    description:
      "A virtual study café with Pomodoro timer, notes, tasks, analytics, and study rooms.",
    technologies: ["React", "Bootstrap", "LocalStorage"],
    github: "https://github.com/yourusername/studyverse",
    live: "https://studyverse.netlify.app",
  },
  {
    id: 2,
    title: "Canva Mini Clone",
    image: canva,
    description:
      "A React-based design editor with drag-and-drop elements and canvas editing.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yourusername/canva-mini-clone",
    live: "https://canvamini.netlify.app",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "A responsive online shopping website with product listing and shopping cart.",
    technologies: ["React", "Bootstrap", "API"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce.netlify.app",
  },
];

export default projects;