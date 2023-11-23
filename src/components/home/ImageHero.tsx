import Image from "next/image";
import React from "react";

type ImageHeroProps = {
  children: React.ReactNode;
  className?: string;
};
function ImageHero({ children, className }: ImageHeroProps) {
  return (
    <section
      className={`mt-15%  flex flex-col gap-2 scroll-m-10%
    bg-auto ${className}`}
    >
      {children}
    </section>
  );
}

export default ImageHero;
