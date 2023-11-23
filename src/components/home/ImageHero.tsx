import Image from "next/image";
import React from "react";

type ImageHeroProps = {
  children: React.ReactNode;
  className?: string;
  mt?: string;
};
function ImageHero({ children, className, mt }: ImageHeroProps) {
  return (
    <section
      className={`${mt ? mt : "mt-15%"} flex flex-col gap-2 scroll-m-10%
    bg-auto ${className}`}
    >
      {children}
    </section>
  );
}

export default ImageHero;
