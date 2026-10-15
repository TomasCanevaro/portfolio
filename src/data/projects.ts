
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "go-chat",
    title: "Go Real-Time Chat",
    description:
      "A real-time chat application built with Go, React, PostgreSQL, and WebSockets.",
    longDescription:
      "A full-stack messaging application designed to support real-time communication. The backend is developed in Go, PostgreSQL is used for data persistence, and WebSockets enable bidirectional communication between clients and the server.",
    technologies: ["Go", "React", "PostgreSQL", "WebSockets"],
    image: "",
    githubUrl: "https://github.com/TomasCanevaro/go-chat",
  },
  {
    id: "policy-recommendation",
    title: "Public Policy Recommendation System",
    description:
      "A full-stack application for evaluating public policies and generating recommendations.",
    longDescription:
      "A comprehensive system for analyzing public policies and providing data-driven recommendations. The application features a user-friendly interface built with React, a robust backend powered by Flask, and a NoSQL database for flexible data storage.",
    technologies: ["Python", "Flask", "React", "MongoDB"],
    image: "",
    githubUrl: "https://github.com/TomasCanevaro/PFI-App",
  },
];
