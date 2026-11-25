// import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// import { ArrowDown, ArrowUpRight, Menu, X, Instagram, Phone, MessageCircle } from "lucide-react";
// import "./styles.css";

// const projects = [
//   {
//     number: "01",
//     name: "A calm, considered kitchen",
//     type: "RESIDENTIAL INTERIORS",
//     image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=85",
//     alt: "Contemporary kitchen with warm wood and clean finishes"
//   },
//   {
//     number: "02",
//     name: "Details that make a home",
//     type: "CUSTOM FURNISHING",
//     image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
//     alt: "Warm contemporary living room"
//   },
//   {
//     number: "03",
//     name: "Spaces made to work beautifully",
//     type: "COMMERCIAL INTERIORS",
//     image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
//     alt: "Contemporary commercial workspace"
//   }
// ];

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
//         <a className="wordmark" href="#home" onClick={closeMenu} aria-label="VnHance Studio home">
//           <span>Vn<span className="gold">H</span>ANCE</span>
//           <small>STUDIO</small>
//         </a>
//         <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
//           {menuOpen ? <X size={23} /> : <Menu size={23} />}
//         </button>
//         <nav className={menuOpen ? "nav-open" : ""}>
//           <a href="#home" onClick={closeMenu}>Home</a>
//           <a href="#about" onClick={closeMenu}>About</a>
//           <a href="#services" onClick={closeMenu}>Services</a>
//           <a href="#projects" onClick={closeMenu}>Projects</a>
//           <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
//         </nav>
//       </header>

//       <main>
//         <section className="hero" id="home">
//           <div className="hero-photo" />
//           <div className="hero-shade" />
//           <div className="hero-light" />
//           <div className="hero-leaf-shadow" />
//           <div className="hero-content">
//             <p className="eyebrow reveal reveal-delay-1">INTERIOR DESIGN STUDIO</p>
//             <h1 className="reveal reveal-delay-2">A thoughtful space.<br /><em>A better way to live.</em></h1>
//             <p className="hero-copy reveal reveal-delay-3">
//               Residential interiors, commercial spaces and furnishing — shaped around the way you live and work.
//             </p>
//             <div className="hero-actions reveal reveal-delay-4">
//               <a className="button button-dark" href="#projects">Explore our work <ArrowUpRight size={16} /></a>
//               <a className="text-link" href="#about">Discover VnHance <span>↗</span></a>
//             </div>
//           </div>
//           <div className="hero-bottom">
//             <span>ENHANCING SPACES · ELEVATING LIFESTYLES</span>
//             <a href="#about" aria-label="Scroll to discover"><ArrowDown size={18} /></a>
//             <span>SCROLL TO DISCOVER</span>
//           </div>
//           <div className="hero-index">01 <i /> 04</div>
//         </section>

//         <section className="intro section-pad" id="about">
//           <div className="section-kicker">01 / THE STUDIO</div>
//           <div className="intro-main">
//             <p className="eyebrow">DESIGNED WITH INTENTION</p>
//             <h2>We believe a space should feel as good as <em>it looks.</em></h2>
//             <p className="intro-description">At VnHance Studio, we bring together thoughtful design, considered materials and carefully crafted details to create spaces that feel personal, functional and timeless.</p>
//             <a className="underlined-link" href="#contact">Get to know us <ArrowUpRight size={16}/></a>
//           </div>
//           <div className="intro-note">Good design is not just what you see. It is what you experience, every day.</div>
//         </section>

//         <section className="services section-pad" id="services">
//           <div className="section-heading">
//             <div>
//               <p className="eyebrow">WHAT WE DO</p>
//               <h2>Considered design.<br /><em>Complete living.</em></h2>
//             </div>
//             <p className="section-side-copy">From the first idea to the finishing touch, we create spaces with purpose, warmth and character.</p>
//           </div>
//           <div className="service-grid">
//             <article className="service-card">
//               <span>01</span><h3>Residential<br/>Interiors</h3><p>Homes shaped around your routines, taste and aspirations.</p>
//               <div className="service-line" />
//             </article>
//             <article className="service-card">
//               <span>02</span><h3>Commercial<br/>Interiors</h3><p>Thoughtful environments that bring people and work together.</p>
//               <div className="service-line" />
//             </article>
//             <article className="service-card">
//               <span>03</span><h3>Home<br/>Furnishing</h3><p>Finishing touches, textures and furnishings that make it yours.</p>
//               <div className="service-line" />
//             </article>
//           </div>
//         </section>

//         <section className="projects section-pad" id="projects">
//           <div className="section-heading projects-heading">
//             <div><p className="eyebrow">A GLIMPSE OF OUR WORLD</p><h2>Spaces with a <em>story.</em></h2></div>
//             <a className="underlined-link" href="#contact">Start your project <ArrowUpRight size={16}/></a>
//           </div>
//           <div className="project-grid">
//             {projects.map((project) => (
//               <article className="project-card" key={project.number}>
//                 <div className="project-image-wrap">
//                   <img src={project.image} alt={project.alt} loading="lazy" />
//                   <span className="project-arrow"><ArrowUpRight size={20}/></span>
//                 </div>
//                 <div className="project-meta"><span>{project.number} / {project.type}</span></div>
//                 <h3>{project.name}</h3>
//               </article>
//             ))}
//           </div>
//           <p className="demo-note">Project imagery shown for design demonstration. Replace with VnHance Studio's actual project photographs before publishing.</p>
//         </section>

//         <section className="closing" id="contact">
//           <div className="closing-image" />
//           <div className="closing-overlay" />
//           <div className="closing-content">
//             <p className="eyebrow">YOUR SPACE, REIMAGINED</p>
//             <h2>Let's create a place<br/>that feels like <em>you.</em></h2>
//             <p>Have a space in mind? We'd love to hear about it.</p>
//             <a className="button button-light" href="https://wa.me/918328675323" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={16}/></a>
//           </div>
//         </section>
//       </main>

//       <footer className="footer">
//         <a className="footer-brand" href="#home">Vn<span>H</span>ANCE <small>STUDIO</small></a>
//         <p>ENHANCING SPACES · ELEVATING LIFESTYLES</p>
//         <div className="footer-links">
//           <a href="https://www.instagram.com/vnhancestudio.in/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a>
//           <a href="tel:+918328675323" aria-label="Call VnHance"><Phone size={18}/></a>
//           <a href="https://wa.me/918328675323" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18}/></a>
//         </div>
//         <small>© {new Date().getFullYear()} VnHance Studio. All rights reserved.</small>
//       </footer>
//     </>
//   );
// }

// createRoot(document.getElementById("root")).render(<App />);

// import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Menu,
//   X,
//   Instagram,
//   Phone,
//   MessageCircle
// } from "lucide-react";
// import "./styles.css";

// const projects = [
//   {
//     number: "01",
//     name: "A calm, considered kitchen",
//     type: "RESIDENTIAL INTERIORS",
//     image:
//       "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=85",
//     alt: "Contemporary kitchen with warm wood and clean finishes"
//   },
//   {
//     number: "02",
//     name: "Details that make a home",
//     type: "CUSTOM FURNISHING",
//     image:
//       "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
//     alt: "Warm contemporary living room"
//   },
//   {
//     number: "03",
//     name: "Spaces made to work beautifully",
//     type: "COMMERCIAL INTERIORS",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
//     alt: "Contemporary commercial workspace"
//   }
// ];

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 24);
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`site-header ${
//           scrolled ? "is-scrolled" : ""
//         }`}
//       >
//         <a
//           className="wordmark"
//           href="#home"
//           onClick={closeMenu}
//           aria-label="VnHance Studio home"
//         >
//           <span>
//             Vn<span className="gold">H</span>ANCE
//           </span>
//           <small>STUDIO</small>
//         </a>

//         <button
//           className="menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X size={23} /> : <Menu size={23} />}
//         </button>

//         <nav className={menuOpen ? "nav-open" : ""}>
//           <a href="#home" onClick={closeMenu}>Home</a>
//           <a href="#about" onClick={closeMenu}>About</a>
//           <a href="#services" onClick={closeMenu}>Services</a>
//           <a href="#projects" onClick={closeMenu}>Projects</a>

//           <a
//             className="nav-contact"
//             href="#contact"
//             onClick={closeMenu}
//           >
//             Let's talk <ArrowUpRight size={15} />
//           </a>
//         </nav>
//       </header>

//       <main>

//         {/* HERO SECTION WITH BACKGROUND VIDEO */}
//         <section className="hero" id="home">

//           <video
//             className="hero-video"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//           >
//             <source src="/int.mp4" type="video/mp4" />
//             Your browser does not support video playback.
//           </video>

//           <div className="hero-shade" />
//           <div className="hero-light" />
//           <div className="hero-leaf-shadow" />

//           <div className="hero-content">

//             <p className="eyebrow reveal reveal-delay-1">
//               INTERIOR DESIGN STUDIO
//             </p>

//             <h1 className="reveal reveal-delay-2">
//               A thoughtful space.
//               <br />
//               <em>A better way to live.</em>
//             </h1>

//             <p className="hero-copy reveal reveal-delay-3">
//               Residential interiors, commercial spaces and
//               furnishing — shaped around the way you live
//               and work.
//             </p>

//             <div className="hero-actions reveal reveal-delay-4">

//               <a className="button button-dark" href="#projects">
//                 Explore our work
//                 <ArrowUpRight size={16} />
//               </a>

//               <a className="text-link" href="#about">
//                 Discover VnHance <span>↗</span>
//               </a>

//             </div>
//           </div>

//           <div className="hero-bottom">
//             <span>
//               ENHANCING SPACES · ELEVATING LIFESTYLES
//             </span>

//             <a href="#about" aria-label="Scroll to discover">
//               <ArrowDown size={18} />
//             </a>

//             <span>SCROLL TO DISCOVER</span>
//           </div>

//           <div className="hero-index">
//             01 <i /> 04
//           </div>
//         </section>

//         {/* ABOUT SECTION */}
//         <section className="intro section-pad" id="about">

//           <div className="section-kicker">
//             01 / THE STUDIO
//           </div>

//           <div className="intro-main">

//             <p className="eyebrow">
//               DESIGNED WITH INTENTION
//             </p>

//             <h2>
//               We believe a space should feel as good as{" "}
//               <em>it looks.</em>
//             </h2>

//             <p className="intro-description">
//               At VnHance Studio, we bring together thoughtful
//               design, considered materials and carefully
//               crafted details to create spaces that feel
//               personal, functional and timeless.
//             </p>

//             <a className="underlined-link" href="#contact">
//               Get to know us <ArrowUpRight size={16} />
//             </a>

//           </div>

//           <div className="intro-note">
//             Good design is not just what you see. It is what
//             you experience, every day.
//           </div>

//         </section>

//         {/* SERVICES SECTION */}
//         <section className="services section-pad" id="services">

//           <div className="section-heading">

//             <div>
//               <p className="eyebrow">WHAT WE DO</p>

//               <h2>
//                 Considered design.
//                 <br />
//                 <em>Complete living.</em>
//               </h2>
//             </div>

//             <p className="section-side-copy">
//               From the first idea to the finishing touch,
//               we create spaces with purpose, warmth and character.
//             </p>

//           </div>

//           <div className="service-grid">

//             <article className="service-card">
//               <span>01</span>

//               <h3>
//                 Residential
//                 <br />
//                 Interiors
//               </h3>

//               <p>
//                 Homes shaped around your routines,
//                 taste and aspirations.
//               </p>

//               <div className="service-line" />
//             </article>

//             <article className="service-card">
//               <span>02</span>

//               <h3>
//                 Commercial
//                 <br />
//                 Interiors
//               </h3>

//               <p>
//                 Thoughtful environments that bring
//                 people and work together.
//               </p>

//               <div className="service-line" />
//             </article>

//             <article className="service-card">
//               <span>03</span>

//               <h3>
//                 Home
//                 <br />
//                 Furnishing
//               </h3>

//               <p>
//                 Finishing touches, textures and
//                 furnishings that make it yours.
//               </p>

//               <div className="service-line" />
//             </article>

//           </div>
//         </section>

//         {/* PROJECTS SECTION */}
//         <section className="projects section-pad" id="projects">

//           <div className="section-heading projects-heading">

//             <div>
//               <p className="eyebrow">
//                 A GLIMPSE OF OUR WORLD
//               </p>

//               <h2>
//                 Spaces with a <em>story.</em>
//               </h2>
//             </div>

//             <a className="underlined-link" href="#contact">
//               Start your project
//               <ArrowUpRight size={16} />
//             </a>

//           </div>

//           <div className="project-grid">

//             {projects.map((project) => (
//               <article
//                 className="project-card"
//                 key={project.number}
//               >

//                 <div className="project-image-wrap">

//                   <img
//                     src={project.image}
//                     alt={project.alt}
//                     loading="lazy"
//                   />

//                   <span className="project-arrow">
//                     <ArrowUpRight size={20} />
//                   </span>

//                 </div>

//                 <div className="project-meta">
//                   <span>
//                     {project.number} / {project.type}
//                   </span>
//                 </div>

//                 <h3>{project.name}</h3>

//               </article>
//             ))}

//           </div>

//           <p className="demo-note">
//             Project imagery shown for design demonstration.
//             Replace with VnHance Studio's actual project
//             photographs before publishing.
//           </p>

//         </section>

//         {/* CONTACT / CLOSING SECTION */}
//         <section className="closing" id="contact">

//           <div className="closing-image" />
//           <div className="closing-overlay" />

//           <div className="closing-content">

//             <p className="eyebrow">
//               YOUR SPACE, REIMAGINED
//             </p>

//             <h2>
//               Let's create a place
//               <br />
//               that feels like <em>you.</em>
//             </h2>

//             <p>
//               Have a space in mind? We'd love to hear about it.
//             </p>

//             <a
//               className="button button-light"
//               href="https://wa.me/918328675323"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Start a conversation
//               <ArrowUpRight size={16} />
//             </a>

//           </div>
//         </section>

//       </main>

//       {/* FOOTER */}
//       <footer className="footer">

//         <a className="footer-brand" href="#home">
//           Vn<span>H</span>ANCE
//           <small>STUDIO</small>
//         </a>

//         <p>
//           ENHANCING SPACES · ELEVATING LIFESTYLES
//         </p>

//         <div className="footer-links">

//           <a
//             href="https://www.instagram.com/vnhancestudio.in/"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Instagram"
//           >
//             <Instagram size={18} />
//           </a>

//           <a
//             href="tel:+918328675323"
//             aria-label="Call VnHance"
//           >
//             <Phone size={18} />
//           </a>

//           <a
//             href="https://wa.me/918328675323"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="WhatsApp"
//           >
//             <MessageCircle size={18} />
//           </a>

//         </div>

//         <small>
//           © {new Date().getFullYear()} VnHance Studio.
//           All rights reserved.
//         </small>

//       </footer>
//     </>
//   );
// }

// createRoot(document.getElementById("root")).render(<App />);

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Instagram,
  Phone,
  MessageCircle
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    name: "A calm, considered kitchen",
    type: "RESIDENTIAL INTERIORS",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary kitchen with warm wood and clean finishes"
  },
  {
    number: "02",
    name: "Details that make a home",
    type: "CUSTOM FURNISHING",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Warm contemporary living room"
  },
  {
    number: "03",
    name: "Spaces made to work beautifully",
    type: "COMMERCIAL INTERIORS",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary commercial workspace"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* HEADER */}

      <header
        className={`site-header ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <a
          className="wordmark"
          href="#home"
          onClick={closeMenu}
          aria-label="VnHance Studio home"
        >
          <span>
            Vn<span className="gold">H</span>ANCE
          </span>
          <small>STUDIO</small>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#process" onClick={closeMenu}>Our Process</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>

          <a
            className="nav-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>

        {/* HERO SECTION */}

        <section className="hero" id="home">

          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/int.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>

          <div className="hero-shade" />
          <div className="hero-light" />
          <div className="hero-leaf-shadow" />

          <div className="hero-content">

            <p className="eyebrow reveal reveal-delay-1">
              INTERIOR DESIGN STUDIO
            </p>

            <h1 className="reveal reveal-delay-2">
              A thoughtful space.
              <br />
              <em>A better way to live.</em>
            </h1>

            <p className="hero-copy reveal reveal-delay-3">
              Residential interiors, commercial spaces and
              furnishing — shaped around the way you live
              and work.
            </p>

            <div className="hero-actions reveal reveal-delay-4">

              <a className="button button-dark" href="#projects">
                Explore our work
                <ArrowUpRight size={16} />
              </a>

              <a className="text-link" href="#about">
                Discover VnHance <span>↗</span>
              </a>

            </div>
          </div>

          <div className="hero-bottom">
            <span>
              ENHANCING SPACES · ELEVATING LIFESTYLES
            </span>

            <a href="#about" aria-label="Scroll to discover">
              <ArrowDown size={18} />
            </a>

            <span>SCROLL TO DISCOVER</span>
          </div>

          <div className="hero-index">
            01 <i /> 04
          </div>

        </section>


        {/* ABOUT SECTION */}

        <section className="intro section-pad" id="about">

          <div className="section-kicker">
            01 / THE STUDIO
          </div>

          <div className="intro-main">

            <p className="eyebrow">
              DESIGNED WITH INTENTION
            </p>

            <h2>
              We believe a space should feel as good as{" "}
              <em>it looks.</em>
            </h2>

            <p className="intro-description">
              At VnHance Studio, we bring together thoughtful
              design, considered materials and carefully
              crafted details to create spaces that feel
              personal, functional and timeless.
            </p>

            <a className="underlined-link" href="#contact">
              Get to know us <ArrowUpRight size={16} />
            </a>

          </div>

          <div className="intro-note">
            Good design is not just what you see. It is what
            you experience, every day.
          </div>

        </section>


        {/* OUR PROCESS SECTION */}

        <section className="journey-section" id="process">

          <div className="journey-container">

            {/* LEFT INTRODUCTION */}

            <div className="journey-intro">

              <p className="eyebrow">
                THE VN HANCE EXPERIENCE
              </p>

              <h2>
                A journey to a
                space that feels
                <em> like you.</em>
              </h2>

              <p className="journey-description">
                From the first conversation to the final
                finishing touch, we make your interior
                design journey thoughtful, transparent
                and seamless.
              </p>

              <div className="journey-note">
                <span>01 — 05</span>

                <p>
                  Five thoughtful steps. One beautiful
                  destination.
                </p>
              </div>

              <a href="#contact" className="journey-link">
                START YOUR PROJECT <span>↗</span>
              </a>

            </div>


            {/* RIGHT PROCESS LIST */}

            <div className="journey-list">

              <article className="journey-step">

                <div className="journey-step-top">
                  <span className="journey-number">01</span>
                  <span className="journey-symbol">
                    01 / DISCOVER
                  </span>
                </div>

                <div className="journey-step-content">
                  <h3>Free Consultation</h3>

                  <p>
                    We begin by understanding your space,
                    lifestyle, requirements and vision.
                  </p>
                </div>

                <span className="journey-arrow">↗</span>

              </article>


              <article className="journey-step">

                <div className="journey-step-top">
                  <span className="journey-number">02</span>
                  <span className="journey-symbol">
                    02 / ENVISION
                  </span>
                </div>

                <div className="journey-step-content">
                  <h3>
                    Personalized Design Visualisation
                  </h3>

                  <p>
                    We create design concepts tailored
                    to your preferences, bringing your
                    dream space to life before execution.
                  </p>
                </div>

                <span className="journey-arrow">↗</span>

              </article>


              <article className="journey-step">

                <div className="journey-step-top">
                  <span className="journey-number">03</span>
                  <span className="journey-symbol">
                    03 / CREATE
                  </span>
                </div>

                <div className="journey-step-content">
                  <h3>Efficient Execution</h3>

                  <p>
                    Our team works to bring the approved
                    design to life with attention to
                    detail and quality.
                  </p>
                </div>

                <span className="journey-arrow">↗</span>

              </article>


              <article className="journey-step">

                <div className="journey-step-top">
                  <span className="journey-number">04</span>
                  <span className="journey-symbol">
                    04 / CONNECT
                  </span>
                </div>

                <div className="journey-step-content">
                  <h3>Regular Updates</h3>

                  <p>
                    Stay informed throughout the journey
                    with regular progress updates.
                  </p>
                </div>

                <span className="journey-arrow">↗</span>

              </article>


              <article className="journey-step">

                <div className="journey-step-top">
                  <span className="journey-number">05</span>
                  <span className="journey-symbol">
                    05 / DELIVER
                  </span>
                </div>

                <div className="journey-step-content">
                  <h3>On-Time Delivery</h3>

                  <p>
                    We work towards delivering your
                    beautifully transformed space
                    on schedule.
                  </p>
                </div>

                <span className="journey-arrow">↗</span>

              </article>

            </div>

          </div>

          <div className="journey-footer">
            <span>VN HANCE STUDIO</span>

            <span>
              THOUGHTFULLY DESIGNED · BEAUTIFULLY DELIVERED
            </span>
          </div>

        </section>


        {/* SERVICES SECTION */}

        <section className="services section-pad" id="services">

          <div className="section-heading">

            <div>
              <p className="eyebrow">WHAT WE DO</p>

              <h2>
                Considered design.
                <br />
                <em>Complete living.</em>
              </h2>
            </div>

            <p className="section-side-copy">
              From the first idea to the finishing touch,
              we create spaces with purpose, warmth and character.
            </p>

          </div>

          <div className="service-grid">

            <article className="service-card">
              <span>01</span>

              <h3>
                Residential
                <br />
                Interiors
              </h3>

              <p>
                Homes shaped around your routines,
                taste and aspirations.
              </p>

              <div className="service-line" />
            </article>

            <article className="service-card">
              <span>02</span>

              <h3>
                Commercial
                <br />
                Interiors
              </h3>

              <p>
                Thoughtful environments that bring
                people and work together.
              </p>

              <div className="service-line" />
            </article>

            <article className="service-card">
              <span>03</span>

              <h3>
                Home
                <br />
                Furnishing
              </h3>

              <p>
                Finishing touches, textures and
                furnishings that make it yours.
              </p>

              <div className="service-line" />
            </article>

          </div>

        </section>


        {/* PROJECTS SECTION */}

        <section className="projects section-pad" id="projects">

          <div className="section-heading projects-heading">

            <div>
              <p className="eyebrow">
                A GLIMPSE OF OUR WORLD
              </p>

              <h2>
                Spaces with a <em>story.</em>
              </h2>
            </div>

            <a className="underlined-link" href="#contact">
              Start your project
              <ArrowUpRight size={16} />
            </a>

          </div>

          <div className="project-grid">

            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-image-wrap">

                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                  />

                  <span className="project-arrow">
                    <ArrowUpRight size={20} />
                  </span>

                </div>

                <div className="project-meta">
                  <span>
                    {project.number} / {project.type}
                  </span>
                </div>

                <h3>{project.name}</h3>

              </article>
            ))}

          </div>

          <p className="demo-note">
            Project imagery shown for design demonstration.
            Replace with VnHance Studio's actual project
            photographs before publishing.
          </p>

        </section>


        {/* CONTACT / CLOSING SECTION */}

        <section className="closing" id="contact">

          <div className="closing-image" />
          <div className="closing-overlay" />

          <div className="closing-content">

            <p className="eyebrow">
              YOUR SPACE, REIMAGINED
            </p>

            <h2>
              Let's create a place
              <br />
              that feels like <em>you.</em>
            </h2>

            <p>
              Have a space in mind? We'd love to hear about it.
            </p>

            <a
              className="button button-light"
              href="https://wa.me/918328675323"
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <a className="footer-brand" href="#home">
          Vn<span>H</span>ANCE
          <small>STUDIO</small>
        </a>

        <p>
          ENHANCING SPACES · ELEVATING LIFESTYLES
        </p>

        <div className="footer-links">

          <a
            href="https://www.instagram.com/vnhancestudio.in/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          <a
            href="tel:+918328675323"
            aria-label="Call VnHance"
          >
            <Phone size={18} />
          </a>

          <a
            href="https://wa.me/918328675323"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>

        </div>

        <small>
          © {new Date().getFullYear()} VnHance Studio.
          All rights reserved.
        </small>

      </footer>

    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
