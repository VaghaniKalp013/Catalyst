import React, { useState, useRef } from "react";
import "./GetAQuote.css";

/* COUNTRY LIST */
const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+86", name: "China" },
];

/* SERVICES */
const serviceMaterials = {
  "3D Printing": ["PLA", "ABS", "PETG", "Tpu", "Asa"],
  "CNC Lathe Machining": ["Aluminum", "Brass", "Steel"],
  "VMC Machining": ["Aluminum", "Mild Steel", "Stainless Steel"],
  "Plastic Molding": ["Polypropylene", "Polycarbonate", "PVC"],
};

const API_BASE_URL = "http://11.12.185.24:9000";

const GetAQuote = () => {
  const fileRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    service: "",
    material: "",
    quantity: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /* Gmail Redirect */
  const handleGmailRedirect = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=catalyst3dtech@gmail.com",
      "_blank"
    );
  };

  /* INPUT CHANGE */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 15) return;
    }

    if (name === "service") {
      setFormData((prev) => ({
        ...prev,
        service: value,
        material: "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* FILE CHANGE ✅ FIXED */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedExtensions = [
      "pdf", "png", "jpg", "jpeg", "stl", "step", "stp", "iges", "igs", "x_t", "x_b",
    ];

    const fileName = file.name.toLowerCase();
    const fileExt = fileName.split(".").pop();
    if (!allowedExtensions.includes(fileExt)) {
      setErrors((p) => ({
        ...p,
        file: "Only PDF, PNG, JPG, STL, STEP, IGES files allowed",
      }));
      return;
    }

    if (file.size === 0) {
      setErrors((p) => ({ ...p, file: "File is empty" }));
      return;
    }

    if (file.size > 512 * 1024 * 1024) {
      setErrors((p) => ({ ...p, file: "Max 512MB allowed" }));
      return;
    }

    setFormData((p) => ({ ...p, file }));
    setErrors((p) => ({ ...p, file: "" }));
  };

  /* VALIDATION */
  const validate = () => {
    let e = {};

    if (!formData.name.trim()) e.name = "Name required";

    if (!formData.email) {
      e.email = "Email required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      e.email = "Invalid email";
    }

    if (!formData.phone) {
      e.phone = "Phone required";
    } else if (!/^[0-9]{5,15}$/.test(formData.phone)) {
      e.phone = "Enter valid phone number (7–15 digits)";
    } if (!formData.service) e.service = "Select service";
    if (!formData.material) e.material = "Select material";
    if (!formData.quantity) e.quantity = "Enter quantity";

    return e;
  };

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const submitData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value) submitData.append(key, value);
      });

      const res = await fetch(`${API_BASE_URL}/createquotes/`, {
        method: "POST",
        body: submitData,
      });

      if (res.ok) {
        setMessage("✅ Submitted successfully!");

        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          service: "",
          material: "",
          quantity: "",
          file: null,
        });

        if (fileRef.current) fileRef.current.value = "";
      } else {
        setMessage("❌ Submission failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="quote-hero">
        <img
          src="https://www.imd.org/wp-content/uploads/2023/04/20230509-Global_Center_for_Digital_Business_Transformation-Overview-Programs-Small_Card-740x374-1.jpg"
          className="hero-img"
          alt=""
        />

        <div className="quote-content">
          <h1>
            Order <br />
            <span>3D printed</span> parts
          </h1>

          <button className="gmail-button" onClick={handleGmailRedirect}>
            Order Now
          </button>
        </div>
      </div>

      <section className="contact">
        <div className="contact-form-center">
          <h2>Get Instant Quote</h2>

          {message && <p className="message">{message}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div className="input-group">
              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="input-group">
              <div className="phone-group">
                <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                  {countryCodes.map((c, i) => (
                    <option key={i} value={c.code}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10 digit phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {errors.phone && <span>{errors.phone}</span>}
            </div>

            <div className="input-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                {Object.keys(serviceMaterials).map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && <span>{errors.service}</span>}
            </div>

            <div className="input-group">
              <select
                name="material"
                value={formData.material}
                onChange={handleChange}
                disabled={!formData.service}
              >
                <option value="">Select Material</option>
                {formData.service &&
                  serviceMaterials[formData.service].map((m, i) => (
                    <option key={i} value={m}>
                      {m}
                    </option>
                  ))}
              </select>
              {errors.material && <span>{errors.material}</span>}
            </div>

            <div className="input-group">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
              {errors.quantity && <span>{errors.quantity}</span>}
            </div>

            {/* FILE */}
            <div className="input-group">
              <label className="file-label">Upload CAD File</label>
              <div className="file-box">
                <input
                  type="file"
                  ref={fileRef}
                  className="file-input"
                  onChange={handleFileChange}
                />
                <span className="file-text">
                  {formData.file ? formData.file.name : "Choose file (PDF, PNG, JPG, STL, STEP, IGES)"}
                </span>
              </div>
              {errors.file && <span>{errors.file}</span>}
            </div>

            {/* ✅ Updated Submit Button */}
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default GetAQuote;
