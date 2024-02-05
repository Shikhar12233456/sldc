import { Route, Routes } from "react-router-dom";
import Home from "./components/Homeome";
import Dayahead from "./components/Dayahead"

function App() {
  return (
    <>
    <div className={"w-full h-full"}>
     
       <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/Dayahead" element={<Dayahead />} />
       </Routes>
      
    </div>
   </>
  );
}
export default App;
