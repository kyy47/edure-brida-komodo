import Image from "next/image";
import React from "react";

type ImageSectionProps = {
  url: string;
  className?: string;
};
function ImageSection({ url, className }: ImageSectionProps) {
  return (
    <div className={`w-full h-hero-fixed relative ${className}`}>
      <Image
        alt="hero image"
        src={url}
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}

export default ImageSection;
