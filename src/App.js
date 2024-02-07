import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import Homee from "./components/Header"
import { Route, Routes } from "react-router-dom";
import DayAhead from "./components/DayAhead";
import Login from "./components/Auth";
import CreateUser from "./components/create-user";
import UpdateUserPassword from "./components/update-user-password";
import DeleteUser from "./components/delete-user";
import ResetPassword from "./components/reset-password";
import MltForecasting from "./components/mlt-forecasting";
function App() {
  return (
    <div className={"w-full h-full bg-blue-100"}>
      {/* <CreateUser/> */}
      <Navbar/>  
      {/* <Header/>       */}
        <Routes> 
          <Route path = {""} element = {<Homee/>}/>                       
            <Route path={"/login"} element={<Login/>}/>
            <Route path="/dayahead" element={<DayAhead />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/update-password" element={<UpdateUserPassword/>} />
            <Route path="/delete-user" element={<DeleteUser/>} />
            <Route path={"update-user-password"} element={<ResetPassword/>}/>
            <Route path={'mlt-forecasting'} element={<MltForecasting/>}/>
        </Routes>
    </div>
  );
}

export default App;
