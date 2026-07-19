import studyverse from "../assets/projects/studyverse.png";
import canva from "../assets/projects/canva.png";
import ecommerce from "../assets/projects/ecommerce.png";

const projects = [
  {
    id: 1,
    title: "StudyVerse",
    category: "React",
    image: studyverse,
    description:
      "Virtual Study Cafe with Pomodoro Timer, Notes, Analytics and Study Rooms.",
    technologies: [
      "React",
      "Bootstrap",
      "JavaScript",
      "LocalStorage",
    ],
    github: "#",
    live: "#",
  },

  {
    id: 2,
    title: "Canva Mini Clone",
    category: "React",
    image: canva,
    description:
      "React based Canva editor with drag-and-drop components.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "E-Commerce Website",
    category: "React",
    image: ecommerce,
    description:
      "Responsive shopping website with cart and product listing.",
    technologies: [
      "React",
      "Bootstrap",
      "API",
    ],
    github: "#",
    live: "#",
  },
];

export default projects;