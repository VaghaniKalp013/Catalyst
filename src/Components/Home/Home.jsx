import React, { useEffect } from "react";   // ✅ FIXED (useEffect added)
import "./Home.css";

import { FaCircleArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";

import { TbBulb } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";

import logo from "../Assets/BANER_BACKUP-FILE23456.jpg";
import image from "../Assets/leg.jpg";
import dron from "../Assets/dron.jpg";

import { Container, Row, Col } from "react-bootstrap";
import { FaCogs, FaUsers, FaCheck } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import slide1 from "../Assets/BANER_BACKUP-FILE23456.jpg";
import slide2 from "../Assets/homebanner1.jpg";
import slide3 from "../Assets/homebanner2.jpg";
import slide4 from "../Assets/cnc machining.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const [currentSlide, setCurrentSlide] = React.useState(0);

const slides = [slide1, slide2, slide3, slide4];

// Auto slide
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

// Manual controls
const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) =>
    prev === 0 ? slides.length - 1 : prev - 1
  );
};

  return (
    <>
      {/* <Navbar /> */}

      {/* Big image section */}
      <div className="slider">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={index === currentSlide ? "slide active" : "slide"}
    >
      {index === currentSlide && (
        <img src={slide} alt={`slide-${index}`} />
      )}
    </div>
  ))}

  {/* Buttons */}
  <button className="prev" onClick={prevSlide}>❮</button>
  <button className="next" onClick={nextSlide}>❯</button>
</div>

      {/* Dots */}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={currentSlide === i ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      

      {/* why-section */}
      <section className="why-section">
        <div className="why-container">

          {/* Heading */}
          <h2 className="why-title">
            Why <span>Choose Us?</span>
          </h2>
          <div className="underline"></div>

          {/* Cards */}
          <div className="why-cards">

            {/* Card 1 */}
            <div className="why-card" data-aos="fade-up">
              <div className="icon">
                <FaCogs />
              </div>
              <h3>Advanced Technology</h3>
              <p>
                Built on the foundation of advanced 3D printing (additive manufacturing) combined with precision CNC machining, VMC, and plastic moulding, Powered by advanced manufacturing technologies and smart automation, we deliver complex parts with high precision, faster lead times, and seamless scalability from prototyping to full production—ensuring consistent quality across metal and plastic components.
              </p>
            </div>

            {/* Card 2 */}
            <div className="why-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <FaUsers />
              </div>
              <h3>Expert Team</h3>
              <p>
                Our skilled engineers, technicians specialize in 3D printing and CNC machining, VMC operations, and plastic moulding, combining technical expertise with hands-on experience to deliver high-precision components and reliable production solutions. With deep industry knowledge, our team ensures accurate machining, efficient mould design, and consistent quality across every project, meeting the highest standards of performance and craftsmanship.
              </p>
            </div>

            {/* Card 3 */}
            <div className="why-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <FaCheck />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Our dedicated expert team ensures every 3D printing, and CNC, VMC, and plastic moulding project meets the highest quality standards through rigorous inspections and precision testing. With deep technical expertise and attention to detail, we maintain consistent accuracy, superior finish, and long-lasting durability—delivering reliable results that exceed customer expectations.

              </p>
            </div>

          </div>
          <div className="view-services" data-aos="fade-up" data-aos-delay="100">
            <button
              className="view-btn"
              onClick={() => navigate("/services")}
            >
              View all services <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="info-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} md={10} sm={12}>
              <p className="tagline">Let's create something unique</p>

              <h1>3D Printing Services</h1>

              <p className="info-text-grey">
                our 3D printing service is handling projects in various industries such as mechanical & automotive services Construction,consumer good & retail Energy & Materials High Tech, Home & Lifestyle Industrial   Equipment, life Sciences & HealthCare Marine & offShare, or Transportation & Mobility.
                <b> 3D printing service.</b>
              </p>

              <Link to="/GetAQuote">
                <button className="quote-btn">
                  GET A QUOTE <FaCircleArrowRight />
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* How it works section */}
      <section className="how-it-works textmain">
        <div className="black">
          <div className="container">
            <p className="process-label">OUR PROCESS</p>

            <h3 className="section-title">
              <span className="textorange"><b>_____</b></span>
              How It Works
              <span className="textorange"><b>_____</b></span>
            </h3>

            <p className="subtext">
              Start your <strong>3D Printing service</strong> journey with us!
            </p>

            <div className="steps-container">

              <div className="step-box" data-aos="zoom-in">
                <div className="icon-circle">
                  <TbBulb />
                </div>

                <h3>WE 3D PRINT IT</h3>

                <p>
                  WE offer the Technology to meet your need as one of the leading
                  3D printing Companies, specializing in
                  <strong> 3D printing prototypes</strong>.
                </p>
              </div>

              <div className="step-box" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-circle">
                  <BsBoxSeam />
                </div>

                <h3>YOU RECEIVE IT</h3>

                <p>
                  Catalyst 3D Technology affordable
                  <strong> 3D printing services </strong>
                  and ships your 3D printed parts anywhere in the world with
                  Manufacturing on request.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3D printing application */}
      <div className="printing">
        <div className="container">
          <p className="discover-label" style={{ color: '#e65c00' }}>Discover Your</p>
          <h3 className="section-title text-black">
            <span className="textorange"><b>_____</b>  </span>3D Printing Application<span className="textorange">  <b>_____</b></span>
          </h3>
          <p className="subtext">
            Impore your business strategy and speed up your innovation by integrating our Solutions into your operations Benifit from its advantages for proof of concept, production or tooling processes consider the benifit of 3D printing in surat or find a 3D printing service near me to enhance appproach.
          </p>


          <div className="flex  gap-6 p-6 bg-white">
            {[
              { title: 'MEDICAL', src: 'data:image/jpeg;base64,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' },
              { title: 'ARCHITECTURE', src: 'data:image/jpeg;base64,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' },
              { title: 'ENGINEERING', src: 'data:image/jpeg;base64,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' },
              { title: 'ELECTRONICS', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx2B-6VH1kc5qAY31cGMTkA6TNSDIZy7M0w&s' },
            ].map((item, index) => (
              <div className="threeDPrinting__card" key={index}>
                <img src={item.src} alt={item.title} className="gap-4" />
                <div className="threeDPrinting__overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="btn">
            <button onClick={handleExploreClick}>
              <div className="flex">
                EXPLORE ALL <FaCircleArrowRight style={{ fontSize: 15, marginLeft: '5px' }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Showcase section */}
      <div className="showcase">
        <div className="printing">
          <div className="container text-center">
            <p className="discover-label" style={{ color: "#e65c00" }}>
              Our Latest Work
            </p>

            <h3 className="section-title text-black">
              <span className="textorange">
                <b>_____</b>
              </span>{" "}
              Showcase
              <span className="textorange">
                <b>_____</b>
              </span>
            </h3>

            <p className="subtext">
              Optimize your existing designs, explore our new service project, and
              push the boundaries of product development with Catalyst 3D.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="container">
          <div className="showcase-grid">

            <div className="showcase-card">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRt0yCqIrRrrbdpuk31s0C_skIN3vjf8_yDxxeoiYxuxrivgPeD"
                alt="Showcase"
              />
              <div className="bgwhite">
                <p>A Resembling Memento of an Equipment!</p>
              </div>
            </div>

            <div className="showcase-card">
              <img src={image} alt="Showcase" />
              <div className="bgwhite">
                <p>Carbon Fiber Handicap Leg!</p>
              </div>
            </div>

            <div className="showcase-card">
              <img src={dron} alt="Showcase" />
              <div className="bgwhite">
                <p>Adjustable Mounting Bracket for Electronic Drone!</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="orange">
        <h2>Create and customize. Streamline and save...</h2>

        <div className="btn flex">
          <Link to="/GetAQuote">
            <button>
              GET A QUOTE
              <FaArrowRightLong style={{ fontSize: 15, marginLeft: "5px" }} />
            </button>
          </Link>
        </div>

        <div className="text-black">
          <IoMdLock /> All Uploads Are Secure and Confidential.
        </div>
      </div>
    </>
  );
};

export default Home;
