import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Home1 from "./components/Home1/Home1";
import Home10 from "./components/Home10/Home10";
import Home11 from "./components/Home11/Home11";
import Home12 from "./components/Home12/Home12";
import Home13 from "./components/Home13/Home13";
import Home2 from "./components/Home2/Home2";
import Home3 from "./components/Home3/Home3";
import Home7 from "./components/Home7/Home7";
import Video from "./components/Video/Video";

export default function App() {
  return (
    <div className="">
      <Home1/>
      <Home2/>
      <Home3/>
      <Home11/>
      <Home12/>
      <Home13/>
      <Home10/>
      <Video/>
      <Home7/>
      <Contact/>
      <Faq/>
    </div>
  );
}
