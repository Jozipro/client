import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Formation", logoSrc: "education.svg" },
    { label: "Expériences", logoSrc: "work-history.svg" },
    { label: "Programmation", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Passions", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "MySql", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 50 },
  ];

  const projectsDetails = [
    {
      title: "Assistant Technique et Commercial",
      duration: { fromDate: "2019", toDate: "2021" },
      description:
        "Organisation des état des lieux et diagnostics immobiliers, numérisation 3D des lieux",
      subHeading: "Lex Impact, Lyon",
    },
    {
      title: "Assistant Revenue et Finances ",
      duration: { fromDate: "2016", toDate: "2018" },
      description:
        "Élaboration et suivi du Business Plan et rapports de gestion, tri et valorisation des données clients",
      subHeading: "Groupe Tiara Hotels, Cannes",
    },
    {
      title: "Juriste Droit Propriété Intellectuelle ",
      duration: { fromDate: "2010", toDate: "2013" },
      description:
        "Protection du droit d'auteur et industriel, vie privée, protection des données, piratage, CNIL.",
      subHeading: "IT Law Avocats, Paris XV",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Wild Code School, Lyon"}
        subHeading={"Développeur Full Stack Web et Mobile"}
        fromDate={"2022"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"Institut Vatel, Lyon & Maurice"}
        subHeading={"Master Direction Hôtelière"}
        fromDate={"2016"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={"Université Vauban, Nimes"}
        subHeading={"Licence de Droit"}
        fromDate={"2006"}
        toDate={"2010"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Domaine"}
          subHeading={"ETUDIANT FULL STACK DEVELOPPEUR WEB"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Un moteur de recherche de jeux vidéo, au design rétro années 80
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Une plateforme de veille sur le cours des cryptomonnaies
          </span>
          <br />
          <span className="resume-description-text">
            - Un minuteur programmable aux fonctions de gestion temporelle, type
            Pomodoro
          </span>
          <br />
          <span className="resume-description-text">
            - Un premier site vitrine présentant une exposition sur l'Egypte
            antique
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Actualités Open-Source"
        description="Avec sa vision unique du partage des connaissances, je suis avec assiduité les dernières nouvelles sur le sujet."
      />
      <ResumeHeading
        heading="Domotique"
        description="J'apprécie me préter au bricolage expérimental qui a pour vocation de changer le quotidien, ou d'être juste complètement gadget."
      />
      <ResumeHeading
        heading="Judo"
        description="Ayant pratiqué les arts martiaux depuis l'adolescence, j'aime étudier l'art et la manière de faire tomber autrui, à sa plus grande surprise."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Parcours & compétences"}
          subHeading={"Dans le détail"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
