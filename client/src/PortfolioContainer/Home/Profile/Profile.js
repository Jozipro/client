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
              <a href="https://www.linkedin.com/in/jonathan-boschi-0a744b136/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://github.com/Jozipro">
                <i className="fa fa-github-square" />
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
              {""}Me contacter{""}
            </button>
            <a href="cv-boschi.pdf" download="cv-boschi.pdf">
              <button className="btn highlighted-btn">Télécharger</button>
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
