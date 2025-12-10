import Image from "next/image";

export default function Resume() {
  return (
    <section>
      <Image
        alt="Brendan Bennett Resume"
        src="/BrendanBennettResume.png"
        width={813}
        height={1149}
      />
      <div className="text-neutral-600 dark:text-neutral-400 tracking-tight text-center">
        <a href="/BrendanBennettResume.pdf" download>
          Click here to download.
        </a>
      </div>
    </section>
  );
}
