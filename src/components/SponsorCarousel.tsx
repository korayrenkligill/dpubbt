import React from "react";
import "../styles/components/SponsorCarousel.scss";

interface SponsorCarouselProps {
  sponsors: string[];
}

const SponsorCarousel: React.FC<SponsorCarouselProps> = ({ sponsors }) => {
  return (
    <div className="sponsors-wrapper">
      <div className="sponsors-track">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className="sponsor-item">
            <img src={sponsor} alt={`Sponsor ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorCarousel;
