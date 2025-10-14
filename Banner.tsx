
import React from 'react';

interface BannerProps {
  imageUrl: string;
}

export const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
  return (
    <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-2xl">
      <img 
        src={imageUrl} 
        alt="Course banner" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};
