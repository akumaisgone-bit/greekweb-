import React from 'react';

export const GreekwebLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => {
  return (
    <img
      src="/logo.jpg"
      alt="greekweb logo"
      className={`object-cover ${className}`}
      {...props}
    />
  );
};

export default GreekwebLogo;
