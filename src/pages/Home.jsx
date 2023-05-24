import React from "react";
import homepage from "../assets/img/catch-A.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="fullscreen-image">
      <img
        onClick={() => navigate("/profile")}
        src={homepage}
        alt="homepage"
        style={{ objectFit: "cover", height: "102vh", width: "102vw" }}
      />
    </div>
  );
};

export default Home;
