import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';
import './App.css';
import profileImage from './WhatsApp Image 2024-11-26 at 15.04.28_0a7332a9.jpg';
import projectImage1 from './Screenshot 2024-11-26 162550.png';
import projectImage2 from './Screenshot 2024-11-26 164119.png';
import projectImage3 from './Screenshot 2024-11-26 164701.png';
import projectImage4 from './Screenshot 2024-05-31 132216.png';
import projectImage5 from './Screenshot 2024-11-26 170255.png';
function App() {
  return (
    <>
    <style/>
      <header className="header">
        <a href="index.html" className="logo">Tagui Khadija</a>
        <nav>
          <a href="index.html" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home">
      <div class="home-img">
        <img src={profileImage} alt="" />
      </div>
        <div className="home-content">
          <h1>
            Hi, <br />I'm <span>Khadija</span>
          </h1>
          <h1>
            Front-end <span>Developer</span>
          </h1>
          
          <div className="social-icons">
          <a href="https://www.linkedin.com/in/khadija-tagui-a5275928b/">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Tgui-Doja">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/doja__tagui/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </section><br />
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
            I'm Khadija Tagui, a front-end developer with a passion for crafting sleek 
            and responsive web applications. With a strong foundation in React.js 
            and a love for design, I bridge the gap between functionality and aesthetics.
        </p>
        <ul>
            <li><strong>Expertise:</strong> HTML, CSS, JavaScript, React.js</li>
            <li><strong>Hobbies:</strong> Reading sci-fi novels, exploring nature, and cooking.</li>
        </ul><br />
        <p><i>Feel free to </i> <a href="#contact">get in touch</a> <i> to collaborate or just say hi!</i>😉 </p>
        </section>
        <section className="skills" id="skills">
        <h2>My Skills</h2>
  <div className="skills-container">
    <div className="skill">
      <h3>HTML</h3>
      <div className="progress-bar">
        <div className="progress html"></div>
      </div>
    </div>
    <div className="skill">
      <h3>CSS</h3>
      <div className="progress-bar">
        <div className="progress css"></div>
      </div>
    </div>
    <div className="skill">
      <h3>JavaScript</h3>
      <div className="progress-bar">
        <div className="progress js"></div>
      </div>
    </div>
    <div className="skill">
      <h3>React</h3>
      <div className="progress-bar">
        <div className="progress react"></div>
      </div>
    </div>
  </div>

  <section className="projects" id="projects">
  <h2>My Projects</h2>
  <div className="projects-container">
    <div className="project-card">
      <img src={projectImage1} alt="Project 1" />
      <div className="project-info">
        <h3>Burger-Craze</h3>
        <p>Burger Restaurant Website A clean, modern website for a burger restaurant built with HTML, CSS, and JS. It features a responsive design, fresh colors, smooth animations, and sticky navigation.</p>
        <div className="tech-stack">
          <span>React</span>
          <span>Html</span>
          <span>CSS</span>
          <span>Js</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/Tgui-Doja/burger-craze.git" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
    <div className="project-card">
      <img src={projectImage2} alt="Project 1" />
      <div className="project-info">
        <h3>Make Web Site</h3>
        <p>A service that allows users to easily create custom websites by choosing templates, editing content, and deploying them.</p>
        <div className="tech-stack">
          <span>React</span>
          <span>Html</span>
          <span>CSS</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/Tgui-Doja/make-web-site.git" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
    <div className="project-card">
      <img src={projectImage3} alt="Project 1" />
      <div className="project-info">
        <h3>World News</h3>
        <p>A platform that delivers the latest news, articles, and updates on various topics, such as technology, politics, or entertainment.</p>
        <div className="tech-stack">
          <span>React</span>
          <span>Html</span>
          <span>CSS</span>
          <span>Js</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/Tgui-Doja/WorldNews.git" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
    <div className="project-card">
      <img src={projectImage4} alt="Project 1" />
      <div className="project-info">
        <h3>El Arabi Parfum</h3>
        <p>An e-commerce website where users can browse and purchase perfumes, with categories such as men, women, and unisex perfumes.</p>
        <div className="tech-stack">
          <span>React</span>
          <span>Html</span>
          <span>CSS</span>
          <span>Js</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/khadijaTagui" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
    <div className="project-card">
      <img src={projectImage5} alt="Project 1" />
      <div className="project-info">
        <h3>Calculator</h3>
        <p>A basic calculator tool for performing various mathematical operations, such as addition, subtraction, multiplication, and division.</p>
        <div className="tech-stack">
          <span>React</span>
          <span>Html</span>
          <span>CSS</span>
          <span>Js</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/Tgui-Doja/calculator.git" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</section>

      </section>
      <section className="contact-form" id="contact">
        <div className="form-container">
          <h2>Contact Us</h2>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h4>CONTACT EMAIL</h4>
            <p>khadijatagui5@gmail.com</p>
          </div>
          <div className="info-card">
            <i className="fas fa-phone"></i>
            <h4>PHONE Number</h4>
            <p>+212 604176028</p>
          </div>
        </div>
      </section>

    </>
  );
}
                
export default App;
