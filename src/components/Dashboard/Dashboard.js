import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Card from "./Card";
import axios from "axios";

const Dashboard = () => {
  const [allPost, setAllPost] = useState([]);

  const getPost = async () => {
    const data = await axios.get("/api/v1/post")
    return data
  };

  useEffect(() => {
    setAllPost(getPost())
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="categoryContainer">100 Most watched</div>
        <div className="cardGroup">
          {allPost &&
            allPost.map((post) => {
              return (
                <Card
                  title={post.title}
                  description={post.description}
                  link={post.link}
                  image={post.image}
                  category={post.category}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
