import React, { useEffect } from "react";
import './AboutUs.css';
import { Row, Col } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import About from "../Assets/About.jpg";



const ServiceCard = () => {
  const navigate = useNavigate();

  const handleInquire = () => {
    navigate("/GetAQuote"); // your form page route
  };
}

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      <Row className="m-0">
        <Col lg={4} md={6} sm={12} className="p-0">
          <div className="aboutBig">
            <img src={About} alt="" />
          </div>
        </Col>
      </Row>
      <section className="about-intro">
        <h2 className="title">We Make New Things Possible</h2>
        <p className='description'>
          At Catalyst 3D Technology, we deliver a complete range of advanced manufacturing solutions designed to turn ideas into high-quality, functional products. Our expertise spans plastic injection moulding, VMC machining, precision CNC machining, and 3D printing, allowing us to support everything from rapid prototyping to full-scale production. With a focus on accuracy, durability, and efficiency, we use modern technologies and advanced equipment to produce complex components with tight tolerances and excellent surface finishes. Whether it’s custom plastic parts, intricate machined components, or innovative prototypes, we ensure every project meets the highest standards of quality and performance.
          <br />
          <br />
          By combining traditional manufacturing with cutting-edge 3D printing technologies, including high-performance systems like Bambu P1S, we help businesses accelerate product development and streamline production processes. Our solutions are tailored for startups, engineers, designers, and established industries, providing cost-effective and scalable manufacturing options. From concept to final production, we are committed to delivering precision, speed, and reliability—empowering our clients to innovate faster and bring their ideas to life with confidence.
        </p>

        <div className="vision-mission-section" data-aos="fade-up">
          <div className="vision-box" data-aos="fade-up" data-aos-delay="100">
            <img
              src="https://image.made-in-china.com/202f0j00jimoUDbqrBcz/Factory-Wholesale-Electrical-Equipment-Supplies-Electrical-Control-Cabinet-Panel-Board.webp"
              alt="Our Vision"
              className="vision-image"
            />
            <div className="text-content">
              <h2>Our Vision</h2>
              <p>
                Our Vision is to revolutionize product development by being the most
                description online destination for custom parts, fostering innovation
                and speed for engineers and creators globally.
              </p>
            </div>
          </div>

          <div className="mission-box" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E22AQHOyLvgY3UkAg/feedshare-shrink_800/B4EZdVBs6kGcAg-/0/1749478200626?e=2147483647&v=beta&t=t3CU5EBVbLda91E0fypUpPKmijafYvmjo1NDMD9sCUc"
              alt="Our Mission"
              className="mission-image"
            />
            <div className="text-content">
              <h2>Our Mission</h2>
              <p>
                Our mission is to make the production of designs efficient with
                innovative digital manufacturing solutions. We want to facilitate
                product accessibility and offer seamless manufacturing services to
                our clients.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section id='moulding-section' >
        <div className="container">
          <div className="moulding-content">

            {/* Left Image */}
            <div className="moulding-image" data-aos="fade-right">
              <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/EY/CK/RU/90141902/ls220-high-speed-injection.jpg" alt="Injection Moulding Machine" />
            </div>

            {/* Right Content */}
            <div className="moulding-text" data-aos="fade-left">
              <h2>Plastic Injection Moulding Solutions</h2>

              <p>
                We deliver advanced plastic injection moulding services using high-performance machinery to produce precise, durable, and high-quality components. Our streamlined process ensures consistent results, high efficiency, and superior surface finish—ideal for large-scale production.
              </p>

              <p>
                customer-provided designs, we deliver reliable and cost-effective plastic injection moulding solutions—from prototyping to full-scale production—serving automotive, industrial, and consumer applications.
              </p>

              <div className="moulding-features">
                <p>✔ High Precision Moulding</p>
                <p>✔ Consistent Production Quality</p>
                <p>✔ Fast Cycle Time</p>
                <p>✔ Durable Plastic Components</p>
              </div>
              <Link to="/GetAQuote#contact-form-center">
                <button className="inquire-btn">
                  Inquire Now →
                </button>
              </Link>
            </div>
            <link rel="stylesheet" href="./ScrollToHash" />
          </div>
        </div>
      </section>

      <section id="cnc-machining">
        <div className="about-container">

          {/* LEFT IMAGE */}
          <div className="about-image" data-aos="zoom-in">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/071/601/491/small/a-large-machine-with-a-large-metal-gear-inside-free-photo.jpg"
              alt="CNC Machine"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content" data-aos="fade-up">

            <h1>VMC machining</h1>
            <h2>Who we are</h2>

            <p>
              We are a leading provider of CNC machining and lathe services,
              delivering precise and high-quality manufacturing solutions for
              industries of all sizes. With years of experience and a team of
              skilled professionals, we specialize in creating custom components
              that meet the most demanding standards.
            </p>

            <h3>Our Mission</h3>

            <p>
              To provide precision-engineered solutions with unmatched quality and
              reliability, enabling our clients to bring their visions to life.
            </p>

          <div className="about-features">
              <div className="feature">Build Volume: 3 Axis 500 × 400 × 450 mm <br />
                (X × Y × Z)</div>
            </div>
            <Link to="/GetAQuote#contact-form-center">
              <button className="inquire-btn">
                Inquire Now →
              </button>
            </Link>
          </div>
        </div>
        
        <link rel="stylesheet" href="./ScrollToHash" />
      </section>


      <section id="about">
        <div className="about-container">

          {/* LEFT IMAGE */}
          <div className="about-image" data-aos="fade-right">
            <img
              src="https://image.made-in-china.com/202f0j00tcOqGZyIrdgV/High-Performance-Vertical-CNC-Milling-Machine-with-800mm-Travel.webp"
              alt="CNC VMC Machine"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content" data-aos="fade-left">


            <h2>
              Precision CNC Machining <br />
              & Manufacturing Solutions
            </h2>

            <p>
              We are a leading provider of precision CNC machining services, specializing in
              VMC (Vertical Machining Center) operations. Our advanced machines and skilled
              engineers ensure high accuracy, repeatability, and superior surface finish.
            </p>

            <p>
              From prototyping to mass production, we deliver reliable and cost-effective
              manufacturing solutions for automotive, aerospace, and industrial sectors.
            </p>

            <div className="about-features">
              <div className="feature">✔ High Precision Machining</div>
              <div className="feature">✔ Skilled Engineers</div>
              <div className="feature">✔ Quality Assurance</div>
              <div className="feature">  Build Volume: 200 × 200 × 200 mm &  <br />
                  500 × 500 × 500 mm</div>
            </div>
          
            <Link to="/GetAQuote#contact-form-center">
              <button className="inquire-btn">
                Inquire Now →
              </button>
            </Link>

          </div>
        <link rel="stylesheet" href="./ScrollToHash" />

        </div>
      </section>
    </>
  )
}

export default Aboutus
