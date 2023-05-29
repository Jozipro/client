import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#lienAMettre">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="lienAMettre">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="lienAMettre">
                <i className="fa fa-instagram-square"></i>
              </a>
              <a href="lienAMettre">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Bonjour, je suis{" "}
              <span className="highlighted-text">Jonathan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Développeur junior 💻",
                    2000,
                    "Font, Back et Full Stack 🌐",
                    2000,
                    "HTML, CSS, React, MySQL 🔧",
                    2000,
                    "En recherche de stage 💼",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Etudiant en développement Web et Mobile
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}Engagez-moi{""}
            </button>
            <a href="cv-jo.pdf" download="cv boschi.pdf">
              <button className="btn highlighted-btn">Mon CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
