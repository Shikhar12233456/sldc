import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/home";
import Navbar from "./components/navbar";
import CreateUserForm from './components/create_user';
import ResetPasswordForm from './components/reset_password';
import DeleteUserForm from './components/delete_user';
import UpdateUserPasswordForm from './components/update_user_password';
import UpdateUserRoleForm from './components/update_user_role';

function App() {
  return (
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
    
      </Routes>
    </Router>
  );
}

export default App;
