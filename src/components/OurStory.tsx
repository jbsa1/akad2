import React from "react";
import { motion } from "framer-motion";

const OurStory: React.FC = () => {
  return (
    <section className="our-story-section">
      <div className="our-story-content">
        <motion.h2
          className="our-story-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.h2>

        <motion.div
  className="story-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
  <div className="story-image-container">
    <img src="/frame.png" alt="Our Story" className="story-image" />
  </div>

  {/*
  <div className="story-content-wrapper">
    <div className="story-section">
      <h3 className="story-title">How We Met</h3>
      <p className="story-text">...</p>
    </div>

    <div className="story-section">
      <h3 className="story-title">Our Journey</h3>
      <p className="story-text">...</p>
    </div>
  </div>
  */}

  <div className="story-section">
    <h3 className="story-title">Our New Beginning</h3>
    <p className="story-text">
      We got engaged in June 2025, surrounded by our family. Now,
      with grateful hearts, we are ready to begin the next chapter—no
      more distance, just one home, one journey, one love. We're very
      excited to count down our Big Day in March. It's getting real. A
      new milestone, towards our forever.
    </p>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default OurStory;
