import Signin from "../project/users/signin";
import Signup from "./users/signup";
import Account from "../project/users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import UserTable from "../project/users/table";

function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Nav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;