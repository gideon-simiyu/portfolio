import AppFooter from "./components/AppFooter";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="h-screen flex relative flex-col">
      <div className="">
        <Navbar />
      </div>

      <div
        className="flex-grow flex flex-col vertical-scrollbar"
        id="scrollspy-scrollable-parent-1"
      >
        <div id="scrollspy-1" className="space-y-4">
          <div className="flex-grow bg-base-300 bg-opacity-90 flex flex-col items-center">
            <div className="mt-5" id="home">
              <Introduction />
            </div>

            <div className="mt-12" id="skills">
            <h5 className="section-header">Technical Skills</h5>
              <Skills />
            </div>



            <div className="mt-12" id="projects">
            <h5 className="section-header">Personal Projects</h5>
              <Projects />
            </div>

            <div id="experience" className="mt-12">
              <h5 className="section-header">Work Experience</h5>
              <Experience />
            </div>

            <div id="education" className="mt-12">
              <h5 className="section-header">Educational Background</h5>
              <Education />
            </div>

            <div className="mt-12" id="contacts">
            <h5 className="section-header">My Contacts</h5>
              <Contacts />
            </div>

            <div className="mt-12">
              <AppFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
