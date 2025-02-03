import { DotPattern } from "@/components/ui/dot-pattern";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Workexp from "./components/Workexp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden flex justify-center md:mx-64 items-center">
      <div className="z-10 flex flex-col justify-center items-center">
        <Profile ></Profile>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Learning></Learning>
        <Workexp></Workexp>
        <Footer></Footer>
      </div>
      <DotPattern ></DotPattern>
    </div>

  );
}
