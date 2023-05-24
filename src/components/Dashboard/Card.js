import React from "react";
import "./Card.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button } from "@mui/material";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="cardContainer">
          <div className="container-1 courseimgContainer">
            <img
              className="imageContainer"
              id="img"
              src="https://ce8f609cc.cloudimg.io/crop/1200x630/foil1.95/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Furlshortener-f1125.appspot.com%2Fo%2Fimages%252Fpublic%252Flinks%252F2023-03-29T08%253A19%253A19.444Z%3Falt%3Dmedia%26token%3D54bca090-dbf6-415f-823f-e42660274178"
              alt=""
            />
          </div>
          <div className="descriptionContainer container-2">
            <div className="title">100 hours of coding</div>
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              
            </div>
          </div>
          <div className="arrowContainer container-3">
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
