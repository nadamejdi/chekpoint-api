import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import User from "./components/User";
import UserList from "./components/UserList";
import "./App.css";

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </Fragment>
  );
}
