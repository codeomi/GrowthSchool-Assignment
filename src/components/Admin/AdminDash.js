import React from "react";
import "./adminDashboard.css";
import AdminHeader from "./AdminHeader";
import AdminCard from "./AdminCard";
import { Link } from "react-router-dom";

const AdminDash = () => {
  return (
    <>
      <AdminHeader />
      <div className="dashboard">
        <Link to="/admin/createpost">
          <div className="newPostButton">Create Post</div>
        </Link>
        <div className="allPostcontainer">
          <div className="categoryContainer">AllPosts</div>
          <div className="cardGroup">
            <AdminCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
