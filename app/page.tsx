import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { Skills } from "@/components/main/skills";
import { Projects } from "@/components/main/projects";
import { Services } from "@/components/main/services";
import { Encryption } from "@/components/main/encryption";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <div className="mx-auto flex max-w-7xl flex-col space-y-32 px-6">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Services />

        <Encryption />

        <Contact />

      </div>
    </main>
  );
}