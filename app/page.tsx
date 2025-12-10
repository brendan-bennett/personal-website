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
          I'm Brendan, a software engineer based in New York City. 
        </p>
        <p>
          I graduated from the University of Virginia with degrees in Computer Science and Applied Statistics in 2023.
        </p>
        <p>
          For the past ~2.5 years, I've been working at Moody's in various engineering roles, most recently on the New Frontiers team, which is developing agentic workflows for prospective clients in private credit. 
        </p>
        <p>
          I try to carve out time to learn and apply new things; right now, I'm reading about machine learning and value investing. 
        </p>

        <p>
        If you’re working on something interesting or just want to connect, feel free to reach out.
        </p>
      </div>
    </section>
  );
}
