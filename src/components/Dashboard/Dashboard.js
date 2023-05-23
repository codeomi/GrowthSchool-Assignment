import React from "react";
import "./Dashboard.css";
import Card from "./Card";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="categoryContainer">100 Most watched</div>
        <div className="cardGroup">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="categoryContainer">Trending Courses</div>
        <div className="cardGroup">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
