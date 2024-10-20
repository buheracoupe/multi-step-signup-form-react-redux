
import ToggleSection from "../components/ToggleSection";
import SectionDisplay from "../components/SectionDisplay";
import ButtonDisplay from "../components/ButtonDisplay";

function App() {
  return (
    <div className="App md:flex md:justify-center md:items-center">
      <div className=" grid grid-rows-[3fr_6fr_1fr] relative md:flex md:grid-cols-[1fr,3fr] h-screen md:h-[600px] w-full md:w-[700px] md:mt-4">
        <ToggleSection />
        <SectionDisplay />
        <ButtonDisplay />
        </div>
    </div>
  );
}

export default App;
