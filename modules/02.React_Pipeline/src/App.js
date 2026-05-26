import React, { useEffect, useState } from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./App.css"; // Custom CSS file for styling

const App = () => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    fetch("https://github-actions-course.onrender.com/api/message")
      .then((response) => response.json())
      .then((data) => {
        setUrl(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Harsha Selvi's DevOps Channel!</h1>
        <p>
          Get the latest DevOps tutorials, tips, and best practices to automate
          your workflow and improve your software development lifecycle.
        </p>
      </header>

      <section className="social-links">
        <h2>Follow Me on:</h2>
        <div className="icons">
          <a href={url?.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon youtube" />
          </a>
          <a href={url?.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram" />
          </a>
          <a href={url?.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>Thanks for visiting! Learn more about DevOps with me.</p>
      </footer>
    </div>
  );
};

export default App;
