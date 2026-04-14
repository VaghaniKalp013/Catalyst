import "./Footer.css";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { MdMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

const Footer = () => {

  // ✅ Get hash from URL
  const { hash } = useLocation();

  // ✅ Scroll to section
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <div className="footer">
      <div className="container-footer">

        {/* OUR SERVICES */}
        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/services#3d-printing">
                Additive Manufacturing
              </Link>
            </li>
            <li>
              <Link to="/services#3d-printing">
                3D Printing
              </Link>
            </li>
            <li>
              <Link to="/aboutus#cnc-machining">
                CNC Lathe Machining
              </Link>
            </li>
            <li>
              <Link to="/aboutus#cnc-machining">
                VMC Machining
              </Link>
            </li>
            <li>
              <Link to="/aboutus#moulding-section">
                Plastic Injection Molding
              </Link>
            </li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <ul>
            <li className="footer-contact">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=catalyst3dtech@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdMailOutline /> catalyst3dtech@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* LOCATION */}
        <div className="footer-column">
          <h3>Visit Our Location</h3>
          <p>
           
          </p>

          <a
            href="https://www.google.com/maps?q=Sumangal+Varachha+Road+Surat"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© Catalyst 3D Technology</p>
      </div>
    </div>
  );
};

export default Footer;
