import React from 'react';
import './Features.css';
import DragBall from '../DraggableBoxes/DraggableBoxes'; // Import the DragBall component
import vector from '../../../src/assets/Vector.png';

const Features = () => {
  return (
    <div className="featuresWrapper">
      <DragBall /> {/* Add the draggable ball in the background */}
      <div className="contentWrapper">
        {/* Header Section */}
        <div className="headerSection" id="features">
          <h1>
            <span>"Your Business,</span>
            <span className="highlight"> Orchestrated</span>
            <span >"</span>
          </h1>
          <p>
            Cinch provides customized AI solutions for streamlining your business operations! With a focus on innovation, we promise to deliver efficiency with smart solutions.
          </p>
          <img src={vector} alt="vector" className='vector' />
        </div>

        {/* Cards Section */}
        <div className="cardsSection">
          <div className="card">
            <div className="icon">N1</div>
            <h2>Efficiency</h2>
            <p>Automate repetitive tasks, reduce errors, and cut costs to boost efficiency.</p>
          </div>

          <div className="card">
            <div className="icon">N2</div>
            <h2>Responsiveness</h2>
            <p>Use AI chatbots and tailored marketing campaigns to respond to customer needs instantly.</p>
          </div>

          <div className="card">
            <div className="icon">N3</div>
            <h2>Innovation</h2>
            <p>Free up founders to focus on strategy, innovation, and growth, rather than mundane tasks.</p>
          </div>

          <div className="card">
            <div className="icon">N4</div>
            <h2>Advantage</h2>
            <p>Embrace automation to thrive in a market where speed and precision are everything.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
