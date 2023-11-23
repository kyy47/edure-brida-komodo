import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageSectionProps = {
  url: string | StaticImageData;
  className?: string;
  variant?: "object-contain" | "object-cover";
};
function ImageSection({
  url,
  className,
  variant = "object-cover",
}: ImageSectionProps) {
  return (
    <div className={`w-full  relative ${className} `}>
      <Image
        alt="hero image"
        src={url}
        fill
        priority
        className={`${variant} object-center`}
      />
    </div>
  );
}

export default ImageSection;
