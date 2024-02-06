import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DayAhead from "./components/Dayahead"

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
