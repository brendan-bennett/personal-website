export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "tfjs-mnist",
    year: 2025,
    description: "Small project using TensorFlow.js to load a model trained on mnist data. ",
    url: "https://github.com/brendan-bennett/tfjs-mnist",
  },
];
