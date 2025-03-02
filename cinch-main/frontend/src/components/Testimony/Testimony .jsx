import React, { useRef }  from "react";
import "./Testimony.css";
import pswrsn from '../../../src/assets/psw.png';


const testimonies = [
  {
    name: "John Doe",
    title: "CEO at InnovateTech",
    image: "https://via.placeholder.com/150",
    testimony:
      "This platform transformed how we handle our workflows. It's seamless, efficient, and user-friendly.",
  },
  {
    name: "Jane Smith",
    title: "Marketing Specialist",
    image: "https://via.placeholder.com/150",
    testimony:
      "The tools provided here have saved me hours every week! I can't imagine my work without it now.",
  },
  {
    name: "Srikrishna Hireholi",
    title: "Full Stack Developer",
    image: "https://via.placeholder.com/150",
    testimony:
      "Cinch has revolutionized the way we streamline our business operations—its innovative AI solutions have brought unparalleled efficiency and smart solutions to our everyday processes.",
  },
  {
    name: "s Johnson",
    title: "Software Engineer",
    image: "https://via.placeholder.com/150",
    testimony:
      "Incredible! The customization options and responsive design made a huge difference for our projects.",
  },
  {
    name: "ksham",
    title: "Software Engineer",
    image: "https://via.placeholder.com/150",
    testimony:
      "Incredible! The customization options and responsive design made a huge difference for our projects.",
  },
];

const Testimony = () => {
    const scrollRef = useRef();
  
    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };
  
    return (<>
    <div id="testimony">
      <h1 className="testimony-heading" >Our Happy Clients <img src={pswrsn} alt="" className='pswrsn' /></h1>
      
      <div className="testimony-container" >
        
        <div className="testimony-scroll" ref={scrollRef}>
          {testimonies.map((testimony, index) => (
            <div key={index} className="testimony-card">
              <img src={testimony.image} alt={testimony.name} className="testimony-image" />
              <h3 className="testimony-name">{testimony.name}</h3>
              <p className="testimony-title">{testimony.title}</p>
              <p className="testimony-text">"{testimony.testimony}"</p>
            </div>
          ))}
        </div>
        <div className="testimony-scroll-buttons">
          <button className="scroll-buttons" onClick={scrollLeft}>&lt;</button>
          <button className="scroll-buttons" onClick={scrollRight}>&gt;</button>
        </div>
      </div>
      </div>
      </>
    );
  };

export default Testimony;
