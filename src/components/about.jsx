import "./about.css";
import { useState } from "react";
import PropTypes from "prop-types";
import githubLogo from "../assets/github-logo.png"; // Replace with your actual file path

const About = ({ onBackClick, isAboutVisible }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const emailText = document.getElementById("email-text");

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(emailText.innerText)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000); // Reset copied state after 2 seconds
        })
        .catch((error) => {
          console.error("Copy failed", error);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = emailText.innerText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  const openGitHubProfile = () => {
    // Replace the URL with your GitHub profile URL
    window.open("https://github.com/Nidhish-Dev", "_blank");
  };

  return (
    <div className="abtcontainer">
      {isAboutVisible && (
        <>
          <p className="heading">About me</p>
          <p className="matter">
            I{"'"}m Rahul Khambra, a dedicated Full Stack Web Developer
            specializing in the MERN stack (MongoDB, Express.js, React.js,
            Node.js). I excel in crafting dynamic, user-friendly web
            applications, seamlessly integrating responsive React.js interfaces
            with robust server-side applications in Node.js and Express.js. My
            commitment to staying updated with the latest technologies ensures
            the delivery of cutting-edge web experiences, addressing the
            evolving demands of the digital landscape.
          </p>
          <hr />
          <p className="contactheading">Contact</p>
          <p className="email">
            <span id="email-text">rahulkhambra36@gmail.com</span>
            <button className="copy" onClick={handleCopyClick}>
              {copied ? "Copied" : "Copy"}
            </button>
          </p>
           <p className="email">
            <span id="email-text">+91 7082453513</span>
         
          </p>
          <hr />
          <img
            src={githubLogo}
            alt="GitHub Logo"
            className="github-logo"
            onClick={openGitHubProfile}
          />
          <hr />
          <button className="back" onClick={onBackClick}>Back</button>
        </>
      )}
    </div>
  );
};

About.propTypes = {
  onBackClick: PropTypes.func.isRequired,
  isAboutVisible: PropTypes.bool.isRequired,
};

export default About;