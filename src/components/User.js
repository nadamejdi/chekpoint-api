import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";

const User = () => {
  console.log(useLocation())
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.userState);

  const handleClick = () => {
    navigate('/users')
  }

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, []);

  return (
    <div className="container py-5">
      { 
      loading ? (<div className=" d-flex justify-content-center">
        <div className="spinner-border text-primary text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>) :
      error ? <div className="alert alert-danger">{error}</div> :
      (
        user && <div>
          <h1>{user.name}</h1>
          <p><span className="text-secondary">user name</span>: {user.username}</p>
          <p><span className="text-secondary">email:</span> {user.email}</p>
          <p><span className="text-secondary">address:</span> {user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}</p>
          <p><span className="text-secondary">phone:</span> {user.phone}</p>
          <p><span className="text-secondary">website:</span> {user.website}</p>
          <p><span className="text-secondary">company name:</span> {user.company.name}</p>
          <p><span className="text-secondary">company catch phrase:</span> {user.company.catchPhrase}</p>
          <p><span className="text-secondary">company bs:</span> {user.company.bs}</p>
        </div>
      )}
     <button className="btn btn-primary" onClick={handleClick}>Go back</button>
    </div>
  );
};

export default User;
