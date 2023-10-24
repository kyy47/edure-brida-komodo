import Image from "next/image";
import React from "react";

function ImageHero() {
  return (
    <div className="w-full h-hero-fixed relative">
      <Image
        alt="hero image"
        src="/hero_image.png"
        fill
        priority
        className="object-contain mt-16"
      />
    </div>
  );
}

export default ImageHero;
