import { DotPattern } from "@/components/ui/dot-pattern";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Workexp from "./components/Workexp";
import Footer from "./components/Footer";
import GitHubCalendar from "react-github-calendar";
import AnimatedSection from "./components/AnimatedSection";
import { GridPattern } from "@/components/magicui/grid-pattern";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <DotPattern className="w-full h-full" />
        {/* <GridPattern className="w-full h-full" /> */}
      </div>
      <div className="overflow-hidden flex justify-center md:mx-64 items-center">
        <div className="z-10 flex flex-col justify-center items-center w-full">
          <AnimatedSection>
            <Profile />
          </AnimatedSection>
          <AnimatedSection>
            <div className="dark hidden xl:flex pt-4 w-full justify-center">
              <GitHubCalendar username="ganeshkondaka" colorScheme="dark" />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Learning />
          </AnimatedSection>
          <AnimatedSection>
            <Workexp />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </div>
        <DotPattern />
      </div>
    </div>
  );
}
