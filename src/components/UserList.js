import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/userActions";
import UserItem from "./UserItem";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="container py-5">
      <h1>Users</h1>
      <div className="row">
        {loading ? (
          <div className=" d-flex justify-content-center">
            <div
              className="spinner-border text-primary text-center"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          users && users.map((user) => <UserItem user={user} key={user.id} />)
        )}
      </div>
    </div>
  );
};

export default UserList;
