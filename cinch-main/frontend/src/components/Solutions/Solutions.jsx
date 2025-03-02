import React from 'react';
import './Solutions.css';

const Solutions = () => {
  return (
    <>
      <div id="solutions">
        <h1 className="main-t">What We Offer</h1>

        <div className="marketing-container">
          <div className="text-section">
            <h1 className="text">Marketing Tomorrow: A Human-Centric Approach with Automation</h1>
            <ul className="points-list">
              <li>
                <span>1.</span>
                <div className="text-content">
                  <strong>Know Your Customers Like Never Before</strong>
                  <p>Imagine understanding what your customers want even before they do. With AI, you’ll be able to predict their needs, preferences, and behaviors, so every message feels personal and relevant.</p>
                </div>
              </li>
              <li>
                <span>2.</span>
                <div className="text-content">
                  <strong>Always Be There</strong>
                  <p>Marketing won’t take a break. Automation will let your business engage with customers 24/7 through smart chatbots and dynamic tools, so they always feel valued and heard.</p>
                </div>
              </li>
              <li>
                <span>3.</span>
                <div className="text-content">
                  <strong>Reach People Everywhere, Seamlessly</strong>
                  <p>Whether it’s email, social media, or a quick text, automation will ensure your message feels consistent and connected, no matter where your audience is.</p>
                </div>
              </li>
              <li>
                <span>4.</span>
                <div className="text-content">
                  <strong>Work Smarter, Not Harder</strong>
                  <p>With AI handling repetitive tasks like scheduling posts or analyzing campaign results, marketers will have more time to focus on creativity and strategy.</p>
                </div>
              </li>
              <li>
                <span>5.</span>
                <div className="text-content">
                  <strong>Sustainability Matters</strong>
                  <p>Customers care about the planet, and marketing will evolve to reflect that. Automation will track and promote eco-friendly practices, showing customers you care as much as they do.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="image-section"></div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
