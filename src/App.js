import { Route, Routes } from "react-router-dom";
import DayAhead from "./components/Dayahead";
import Home from "./components/home";

function App() {
  return (
    <>
    <div className={"w-full h-full"}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Dayahead" element={<DayAhead />} />
        </Routes>
    </div>
  </>
  );
}
export default App;
