
import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

const Image = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  ...props 
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      {...props}
    />
  );
};

export default Image;
