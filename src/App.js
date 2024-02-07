import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Homee from "./Components/Header"
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth";
import DayAhead from "./Components/Dayahead";
import CreateUser from "./Components/create-user";
import DeleteUser from "./Components/delete-user";
import UpdateUserPassword from "./Components/update-user-password";
import ResetPassword from "./Components/reset-password"
// import Home from "./Components/Header";


function App() {
  return (
    <div className={"w-full h-full bg-blue-100"}>
      {/* <CreateUser/> */}
      <Navbar/>  
      {/* <Header/>       */}
        <Routes> 
          <Route path = {""} element = {<Homee/>}/>                       
            <Route path={"/login"} element={<Login/>}/>
            <Route path="/Dayahead" element={<DayAhead />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/update-password" element={<UpdateUserPassword/>} />
            <Route path="/delete-user" element={<DeleteUser/>} />
            <Route path={"update-user-password"} element={<ResetPassword/>}/>
        </Routes>      

    </div>
  );
}

export default App;
