import React, { useEffect } from 'react';
import './Services.css';
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import AOS from "aos";
import "aos/dist/aos.css";

import { TfiRulerPencil, TfiCrown, TfiBlackboard } from "react-icons/tfi";
import { CiTrophy } from "react-icons/ci";

import {
  FaIndustry,
  FaTools,
  FaDraftingCompass,
  FaCogs,
  FaCube,
  FaBolt,
} from "react-icons/fa";


// ✅ Scroll to Hash Component
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return null;
};


// ✅ Services Data (ONLY OBJECTS)
const services = [
  {
    icon: <FaIndustry />,
    title: "3-5 Axis CNC Machining",
    desc: "Advanced multi-axis machining enables the production of intricate and high-precision components with exceptional accuracy.",
    link: "/aboutus#cnc-machining"
  },
  {
    icon: <FaCogs />,
    title: "VMC",
    desc: "High-precision milling operations powered by advanced VMC systems ensure accurate machining, smooth finishes, and efficient production of complex components across various applications.",
    link: "/aboutus#cnc-machining"
  },
  {
    icon: <FaTools />,
    title: "CNC Turning",
    desc: "Precision turning processes deliver finely crafted custom components with excellent dimensional accuracy and smooth surface finishes, ensuring reliability and consistency for a wide range of applications.",
    link: "/aboutus#about"
  },
  {
    icon: <FaCube />,
    title: "3D Printing",
    desc: "Innovative additive manufacturing technology enables the creation of complex, high-precision parts layer by layer, offering flexibility in design, rapid production, and reduced material waste.",
    link: "/services#3d-printing"
  },
  {
    icon: <FaDraftingCompass />,
    title: "Prototyping",
    desc: "Transform concepts into tangible models with precision and speed, enabling design validation, functional testing, and faster product development.",
    link: "/aboutus#cnc-machining"
  },
  {
    icon: <FaBolt />,
    title: "Plastic Molding",
    desc: "High-quality plastic components manufactured with precision molding techniques for durability and consistency.",
    link: "/aboutus#moulding-section"
  }
];


// ✅ Main Component
const Services = () => {

  // ✅ INIT AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      <ScrollToHash />

      {/* ✅ Services Section */}
         {/* ✅ Services Section */}
      <section className="machine-services" data-aos="fade-up">
        <h2 className="machine-title" data-aos="fade-up" data-aos-delay="100">Our Services</h2>

        <div className="machine-grid">
          {services.map((item, i) => (
            <HashLink smooth to={item.link} key={i} className="card-link">
              <div className="machine-card" data-aos="fade-up" data-aos-delay="200">
                <div className="machine-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </HashLink>
          ))}
        </div>
      </section>
 {/* ✅ 3D Printing Section */}
      <section id="3d-printing">
        <div className="fdm-container">
          <div className="fdm-text text-center">
            <h4 className='main-title'>3D Printing Services</h4>
            <hr className="section-divider" />
            <p className='description'>
              Our 3D printing service is used to fabricate high-quality prototypes and low-volume production parts.
              It helps reduce development time, cost, and enables faster design validation.
            </p>
          </div>

          <div className="fdm-content">

            {/* Left */}
            <div className="fdm-left">
              <div className="fdm-item">
                <div className='text-right'>
                  <h3>FDM 3D PRINTING</h3>
                  <p>We use FDM technology for reliable and cost-effective 3D printing solutions.</p>
                </div>
                <div className="icon-circle"><TfiRulerPencil /></div>
              </div>

              <div className="fdm-item">
                <div className='text-right'>
                  <h3>BAMBU LAB</h3>
                  <p>Advanced printers supporting multi-color and multi-material printing.</p>
                </div>
                <div className="icon-circle"><TfiCrown /></div>
              </div>
            </div>

            {/* Center Image */}
            <div className="fdm-image">
              <img
                src="https://3d.nice-cdn.com/upload/image/product/large/default/bambu-lab-p1s-combo-826635-en.png"
                alt="3D Printer"
              />
            </div>

            {/* Right */}
            <div className="fdm-right">
              <div className="fdm-item">
                <div className="icon-circle"><CiTrophy /></div>
                <div className='text-left'>
                  <h3>ADVANCED MATERIALS</h3>
                  <p>PLA, ABS, PETG, TPU, Carbon Fiber materials supported.</p>
                </div>
              </div>

              <div className="fdm-item">
                <div className="icon-circle"><TfiBlackboard /></div>
                <div className='text-left'>
                  <h3>BUILD VOLUME</h3>
                  <p>Up to 256 × 256 × 256 mm for prototypes and production runs.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
        
    </>
  );
};

export default Services;