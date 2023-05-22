import React from "react";
import "./Header.css";
import VerifiedIcon from '@mui/icons-material/Verified';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="imageContainer container1">
            <img
              src="https://imagedelivery.net/tqC70bVt8T6GtQUXNsa2-g/bed92704-5811-482a-48a9-6077e47d2900/public"
              className="user-avatar"
              alt="logo"
            ></img>
          </div>
          <div className="brandNameContainer container-2">
            <div className="brandName">Growthschool</div>
            <div className="verified"><VerifiedIcon className="verfiedIcon" color="primary"/></div>
          </div>
          <div className="sloganContainer container-3">
            <div className="slogan">Learn from the top 1% and grow your career</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
