import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! I'm Brendan—a software engineer based in New York City. 
        </p>
        <p>
          I graduated from the University of Virginia with degrees in Computer Science and Statistics.
        </p>
        <p>
          For the past two years, I've been working at Moody's in various engineering roles, most recently on the {""}
          <a
            target="_blank"
            href="https://news.microsoft.com/2023/06/29/moodys-and-microsoft-develop-enhanced-risk-data-analytics-research-and-collaboration-solutions-powered-by-generative-ai/"
          >
            Copilot team
          </a>
          .
        </p>
        <p>
          I spend most of my time trying to learn and apply new things. Currently, I'm interested in machine learning, quant trading, value investing, predictative sports modeling, and psychology. 
        </p>
        <p>
        In my free time, I enjoy reading, live music, traveling, and spending time with friends. 
        </p>

        <p>
        If you’re working on something interesting or just want to connect, feel free to reach out!
        </p>
      </div>
    </section>
  );
}
