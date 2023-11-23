import React from "react";

type DescriptionProps = {
  children: React.ReactNode;
  gravity?: "center";
  className?: string;
  fontSize?: "text-lg" | "text-base" | "text-sm" | "text-xs";
};
function Description({
  children,
  gravity,
  className,
  fontSize = "text-base",
}: DescriptionProps) {
  return (
    <p
      className={`${fontSize} text-secondary  xl:max-w-3xl ${
        gravity === "center" && "text-center"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export default Description;
