
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "go-chat",
    title: "Go Real-Time Chat",
    description:
      "A real-time chat application built with Go, React, PostgreSQL, and WebSockets.",
    technologies: ["Go", "React", "PostgreSQL", "WebSockets"],
    githubUrl: "https://github.com/TomasCanevaro/go-chat",
  },
  {
    id: "policy-recommendation",
    title: "Public Policy Recommendation System",
    description:
      "A full-stack application for evaluating public policies and generating recommendations.",
    technologies: ["Python", "Flask", "React", "MongoDB"],
    githubUrl: "https://github.com/TomasCanevaro/PFI-App",
  },
];
