// import React from 'react';
// import './App.css';
// import { Link } from 'react-scroll'; 
// import first from "./img/first.jpg";

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <nav>
//           <ul>
//             <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//             <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//             <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
//             <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
//           </ul>
//         </nav>
//       </header>

//       <main>  

                          
//         {/* Home Section */}
//         <section id="home" className="home-section">
//           <div className="intro">
//             <h1>Hello, I'm Konishk Shemad</h1>
//             <p>UI/UX Designer | Software Developer</p>
//           </div>
//           <div className="image-container">
//             <img src={"first.jpg"} alt="Profile" />
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="about-section">
//           <div className="about-content">
//             <h2>About Me</h2>
//             <p>I am working as an intern at Masai Technologies. I have built projects like BG Books, The Hold Craft.</p>
//           </div>
//           <div className="about-image">
//             <img src="about-image-url.jpg" alt="About" />
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="skills-section">
//           <h2>Skills</h2>
//           <ul>
//             <li>Web Design</li>
//             <li>Design Thinking</li>
//             <li>Figma</li>
//             <li>Domino</li>
//             <li>SEO</li>
//             <li>Problem Solving</li>
//           </ul>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="contact-section">
//           <h2>Contact Me</h2>
//           <p>Email: konishk.shemad@example.com</p>
//           <p>Phone: +91 9999 999 99</p>
//           <p>Location: Some City, Some Country</p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;





// import { Link } from 'react-scroll'; 
// import React from 'react';
// import './App.css';
// import first from './img/first.jpg';
// import second from './img/second.jpg';
// import third from './img/third.jpg';
// import fourth from './img/fourth.jpg';
// import five from './img/five.jpg';

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <nav>
//           <ul>
//             <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//             <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//             <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
//             <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
        
//         <section id="home" className="home-section">
//           <div className="intro">
//             <h1>Hello, I'm Konishk Shemad</h1>
//             <p>UI/UX Designer | Software Developer</p>
//           </div>
//           <div className="img">
//             <img src={first} alt="Profile" /> 
//           </div>
//         </section>

        
//         <section id="about" className="home-section">
//           <div className="intro">
//             <h2>About Me</h2>
//             <p>I am working as an intern at<br/> Masai Technologies. I have<br/> built projects like BG <br/>Books, The Hold Craft.</p>

//           </div>
//           <div className="about-image">
//             <img src={second} alt="About" />
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="home-section">
//           <h2>Skills</h2>
//           <ul>
//             <li>Web Design</li>
//             <li>Design Thinking</li>
//             <li>Figma</li>
//             <li>Domino</li>
//             <li>SEO</li>
//             <li>Problem Solving</li>
//           </ul>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="home-section">
//           <h2>Contact Me</h2>
//           <p>Email: konishk.shemad@example.com</p>
//           <p>Phone: +91 9999 999 99</p>
//           <p>Location: Some City, Some Country</p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;







import { Link } from 'react-scroll'; 
import React from 'react';
import './App.css';
import first from './img/first.jpg';
import rsmsec from './img/rsmsec.jpg';
import rsmth from './img/rsmth.jpg';
import rac from './img/rac.jpg';
import rs from './img/rs.jpg';


function App() {
  return (
    <div className="App">
      <header >
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        
        <section id="home" className="home-section">
          <div className="intro">
            <h1>Hello, I'm Konishk Shemad</h1>
            <p>UI/UX Designer | Software Developer</p>
          </div>
          <div className="img">
            <img src={first} alt="Profile" /> 
          </div>
        </section>


        <section id="about" className="home-section">

          
          <div className="intro">
          <h2>About Me</h2>
          <p>I am working as an intern at Masai Technologies. I have built<br/> projects like BG Books, The Hold Craft.</p>
          </div>
          <div className="img">
            <img src={rsmsec} alt="Profile" /> 
          </div>
        </section>

        
        {/* <section id="about" className="home-section">
          <div className="intro">
            <h2>About Me</h2>
            <p>I am working as an intern at<br/> Masai Technologies. I have<br/> built projects like BG <br/>Books, The Hold Craft.</p>

          </div>
          <div className="about-image">
            <img src={second} alt="About" />
          </div>
        </section> */}

        {/* Skills Section */}


        <section id="skills" className="home-section">
          <div className="intro">
          <h2>Skills</h2>
          <ul>
            <li>Web Design</li>
            <li>Design Thinking</li>
            <li>Figma</li>
            <li>Domino</li>
            <li>SEO</li>
            <li>Problem Solving</li>
          </ul>
          </div>
          <div className="img">
            <img src={rs} alt="Profile" /> 
          </div>
        </section>


        {/* <section id="skills" className="home-section">
          <h2>Skills</h2>
          <ul>
            <li>Web Design</li>
            <li>Design Thinking</li>
            <li>Figma</li>
            <li>Domino</li>
            <li>SEO</li>
            <li>Problem Solving</li>
          </ul>
        </section> */}

        {/* Contact Section */}
        {/* <section id="contact" className="home-section">
          <h2>Contact Me</h2>
          <p>Email: konishk.shemad@example.com</p>
          <p>Phone: +91 9999 999 99</p>
          <p>Location: Some City, Some Country</p>
        </section> */}

<section id="contact" className="home-section">
          <div className="intro">
          <h2>Contact Me</h2>
          <p>Email: konishk.shemad@example.com</p>
          <p>Phone: +91 9999 999 99</p>
          <p>Location: Some City, Some Country</p>
          </div>
          <div className="img">
            <img src={rac} alt="Profile" /> 
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
