import { Route, Routes } from "react-router-dom";
import DayAhead from "./components/Dayahead";
import CreateUserForm from './components/create_user';
import DeleteUserForm from './components/delete_user';
import Navbar from "./components/navbar";
import ResetPasswordForm from './components/reset_password';
import UpdateUserPasswordForm from './components/update_user_password';
import UpdateUserRoleForm from './components/update_user_role';
import Home from "./components/home";

function App() {
  return (
    <>
    <div className={"w-full h-full"}>
      <Router>

        <Navbar />
        {/* <Home/> */}
        <Routes>
          <Route path="/" exact element={<div>Hello</div>} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-user" element={<CreateUserForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm/>} />
          <Route path="/delete-user" element={<DeleteUserForm />} />
          <Route path="/update-user-password" element={<UpdateUserPasswordForm/>} />
          <Route path="/update-user-role" element={<UpdateUserRoleForm/>} />
          <Route path="/DayAhead" element={<DayAhead />} />
        </Routes>
      </Router>
    </div>
  </>
  );
}
export default App;
