import {ArrowBigDownDash, ArrowBigRightDash, AtSign, Github, Linkedin} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <div className="h-screen w-screen flex flex-col items-center justify-center p-8">
        <div className="bg-[url(/Andy11.jpg)] bg-cover bg-[position:18%_60%] bg-size-[250%] w-[30vh] h-[30vh] rounded-full"></div>
        <h1 className="font-[Caprasimo] md:text-[160px] text-center text-4xl md:-m-2">
          Hi. I&apos;m Andy.
        </h1>
        <p className="md:text-3xl text-center font-semibold">Student. Developer. Biker. Explorer. Brooklyn Nine-Nine Enthusiast.</p>
        <div className="flex flex-row gap-4 w-min text-[4vh] mt-4">
          <a className="hover:underline cursor-pointer flex flex-row items-center" target="_blank" href="https://github.com/asorge29"><Github className="h-[1.1em] w-[1.1em]" /></a>
          <a className="hover:underline cursor-pointer flex flex-row items-center" target="_blank" href="https://linkedin.com/in/asorge29"><Linkedin className="h-[1.1em] w-[1.1em]" /></a>
          <a className="hover:underl<br/>ine cursor-pointer flex flex-row items-center" target="_blank" href="mailto:hi@asorge29.dev"><AtSign className="h-[1.1em] w-[1.1em]" /></a>
        </div>
      </div>
      {/*<div className="absolute bottom-0 w-full flex items-center justify-center p-8">*/}
      {/*  <Link href="/about" className="flex flex-col items-center text-3xl font-semibold">*/}
      {/*    About*/}
      {/*    <ArrowBigDownDash className="h-[1.1em] w-[1.1em]" />*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<div className="absolute right-0 top-0 h-full flex items-center justify-center p-8">*/}
      {/*  <Link href="/projects" className="flex flex-row items-center text-3xl font-semibold">*/}
      {/*    Projects&nbsp;*/}
      {/*    <ArrowBigRightDash className="h-[1.1em] w-[1.1em]" />*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </main>
  );
}
