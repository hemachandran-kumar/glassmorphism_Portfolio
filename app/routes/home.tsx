import type { Route } from "./+types/home";
import { Navbar } from "~/Components/Navbar.jsx";
import { Hero } from "~/Components/Hero.jsx";
import { About } from "~/Components/About.jsx";
import { Skills } from "~/Components/Skills.jsx";
// import { Projects } from "~/Components/Projects";
import { Resume } from "~/Components/Resume.jsx";
import { Contact } from "~/Components/Contact.jsx";
import { Loader } from "~/Components/Loader.jsx";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "My Portfolio" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
}

export default function Home() {
  return (
    <Loader>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Resume />
        <Contact />
      </main>
    </Loader>
  );
}

