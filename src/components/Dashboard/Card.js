import React from "react";
import "./Card.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button } from "@mui/material";

const Card = ({ title, description, image, link, category }) => {
  return (
    <>
      <div className="card">
        <div className="cardContainer">
          <div className="container-1 courseimgContainer">
            <img className="imageContainer" id="img" src={image} alt="" />
          </div>
          <div className="descriptionContainer container-2">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
          <div href={link} className="arrowContainer container-3">
            <ArrowOutwardIcon sx={{ fontSize: 40 }} className="arrow" />
          </div>
          <div className="buttonContainer">
            <div className="registerButton">Apply Now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
