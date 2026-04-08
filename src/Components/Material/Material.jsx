import React, { useState } from "react";
import "./Material.css";
import vmc from"../Assets/Vmcpng.png";
import mould from "../Assets/mould.png";


const materials = [
  {
    id: 1,
    title: "BRASS FITTING",
    category: "CNC MACHINING",
    description: "Durable and corrosion-resistant brass components manufactured with high precision for industrial applications.",
    image: "https://cpimg.tistatic.com/11273984/b/4/Forged-Components..webp"
  },
  {
    id: 2,
    title: "COUSTOMIZED THREAD",
    category: "CNC MACHINING",
    description: "Engineered threading solutions tailored to meet exact client specifications and performance standards.",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2w6rnwKqZ4dzeJ9B_Yw810t3L7B-oWG6N-AWC704Ch5fawqwt"
  },
  {
    id: 3,
    title: "PIPE FITTING",
    category: "CNC MACHINING",
    description: "Precision-machined pipe fittings ensuring leak-proof connections and long-lasting performance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0SJwMitguU4AofhU8Eg3hcGgQ2CDuIiYpw&s"
  },
  {
    id: 4,
    title: "CLIENTS OEM",
    category: "CNC MACHINING",
    description: "Custom OEM manufacturing solutions designed to meet specific client requirements and quality standards.",
    image: "https://sc04.alicdn.com/kf/H19ea2d82a51f455dbd8281da472bb669i.jpg"
  },
  {
    id: 5,
    title: "GENERAL ENGINEERING",
    category: "CNC MACHINING",
    description: "Versatile engineering components produced with advanced machining techniques for multiple industries.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/367457631/AH/NN/CX/57287224/cnc-turning-4-1024x680.jpg"
  },
  {
    id: 6,
    title: "COUSTOMIZED SCREW",
    category: "CNC MACHINING",
    description: "High-strength custom screws designed for precision fit, durability, and reliable fastening performance.",
    image: "https://m.media-amazon.com/images/I/51LGqz09TtL.jpg"
  },
  {
    id: 7,
    title: "MEDIACAL FITTINGS",
    category: "CNC MACHINING",
    description: "Medical-grade components manufactured under strict quality control for safety and precision.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/8/535759397/CN/YL/QS/132926537/project-1748059756-500x500.png"
  },
  {
    id: 8,
    title: "CUSTOMIZED PARTS",
    category: "CNC MACHINING",
    description: "Fully customized machined parts developed to match unique design and functional requirements.",
    image: "https://www.politico.eu/cdn-cgi/image/width=1160,height=773,quality=80,onerror=redirect,format=auto/wp-content/uploads/2025/11/28/GettyImages-2205501294-scaled.jpg"
  },
  {
    id: 9,
    title: "PULLEY ASSEMBLY",
    category: "CNC MACHINING",
    description: "Robust pulley assemblies engineered for smooth motion, efficiency, and long operational life.",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/5/419380149/VX/VT/MA/57287224/product-jpeg.jpg"
  },
  {
    id: 10,
    title: "COPPER",
    category: "CNC MACHINING",
    description: "High-quality copper machining solutions offering excellent conductivity and precision finishing.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/402745846/JH/AP/WG/57287224/copper-cnc-machining-1024x768.jpg"
  }
];
const materialsData = [
  { name: "ASA", length: 400, width: 400, height: 450 },
  { name: "PETG", length: 400, width: 400, height: 450 },
  { name: "PLA", length: 400, width: 400, height: 450 },
  { name: "Soft Digital Silicone", length: 297, width: 210, height: 200 },
  { name: "Tough Digital Silicone", length: 297, width: 210, height: 200 },
];
const Material = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (item) => {
    setSelectedProject(item);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* TOP IMAGE */}
      <div className="materialBig">
        <img
          src="https://www.stadon.co.uk/wp-content/uploads/2022/10/HDS-Range-600x456.jpg"
          alt="banner"
        />
      </div>

      {/* HEADER */}
      <div className="materials-wrapper">
        <h2 className="section-title green">OUR MATERIALS</h2>
        <div className="divider"></div>
        <p className="section-desc">
          We use a range of materials from simple Polymers such as PLA, ABS, TPU,
          PETG, ASA and Carbon Special type Filament to advanced materials.
        </p>
      </div>

       <section className="materials-section">
  <h2 className="machine-title">3D Printing Materials</h2>

  <div className="table-wrapper">
    <table className="materials-table">
      <thead>
        <tr>
          <th>Material name</th>
          <th>Maximum Length [mm]</th>
          <th>Maximum Width [mm]</th>
          <th>Maximum Height [mm]</th>
        </tr>
      </thead>

      <tbody>
        {materialsData.map((item, index) => (
          <tr key={index}>
            <td className="material-name">{item.name}</td>
            <td>{item.length}</td>
            <td>{item.width}</td>
            <td>{item.height}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      {/* PROJECTS */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="projects full-width">
            <p className="small-title center">CNC material</p>
            <h3 className="center">
              Discover Our Excellence in Precision Engineering Projects
            </h3>

            <div className="project-grid">
              {materials.map((item) => (
                <div className="card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  <div className="line"></div>
                  <button onClick={() => openModal(item)}>
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
         <section className="about-section">
      <div className="about-container">

        {/* LEFT CARD */}
        <div className="about-card">
          <img src={vmc} alt="" />

          <h3>vmc material</h3>
          <p>
              We work with materials like Aluminum, Steel, Stainless Steel,
              Titanium, Brass, and Copper ensuring precision and durability.
            
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="about-card">
          <img src={mould} alt="" />
          <h3>Plastic injection moulding material</h3>
          <p>
                Materials include PP, ABS, PC, PA, PE, PS, and PVC offering
              strength, flexibility, and chemical resistance.
          </p>
        </div>

      </div>
    </section>

      {/* ✅ MODAL */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-box">

            {/* HEADER */}
            <div className="modal-header">
              <h3>Project Details</h3>
              <span className="close-btn" onClick={closeModal}>×</span>
            </div>

            {/* BODY */}
            <div className="modal-body">
              <div className="modal-row">
                <div>
                  <strong>Machine Name</strong>
                  <p>{selectedProject.title}</p>
                </div>

                <div>
                  <strong> Machining</strong>
                  <p>{selectedProject.category}</p>
                </div>
              </div>

              <div className="modal-desc">
                <strong>Description</strong>
                <textarea
                  value={selectedProject.description}
                  readOnly
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button onClick={closeModal}>Close</button>
            </div>

          </div>
    
        </div>
      )}
    </>
  );
};

export default Material;