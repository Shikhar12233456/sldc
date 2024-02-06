import { Route, Routes } from "react-router-dom";
import DayAhead from "./components/Dayahead";
import Home from "./components/home";
import Login from "./components/Auth";
import CreateUser from "./components/create-user";
import UpdateUserPassword from "./components/update-user-password";
import DeleteUser from "./components/delete-user";
import ResetPassword from "./components/reset-password";
function App() {
  return (
    <div className={"w-full h-full bg-blue-100"}>
        <Routes>
            <Route path="/" element={<Home/>} />
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
