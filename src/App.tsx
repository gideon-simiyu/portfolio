import Navbar from "./components/Navbar";
import SkillsSwitcher from "./components/SkillSwitcher";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="min-h-screen flex relative flex-col">
      <div className="top-0 z-20 start-0 sticky">
        <Navbar />
      </div>

      <div className="flex-grow flex flex-col">
        <div className="flex-grow bg-base-100 bg-opacity-80 flex flex-col items-center">
          <SkillsSwitcher />

          <div id="experience" className="mt-12">
            <h5 className="section-header">Work Experience</h5>
            <Experience />
          </div>

          <div id="experience" className="mt-12">
            <h5 className="section-header">Educational Background</h5>
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
