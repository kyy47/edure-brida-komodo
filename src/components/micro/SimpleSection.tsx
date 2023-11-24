import React from "react";

type TrackingSectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "right-0" | "left-0";
};
function SimpleSection({ children, className, variant }: TrackingSectionProps) {
  return (
    <section
      className={`${
        variant == "right-0"
          ? "pl-6.25 pr-0"
          : variant == "left-0"
          ? "pl-0 pr-6.25"
          : "px-6.25"
      } my-10  flex  flex-wrap scroll-m-10% ${className}`}
    >
      {children}
    </section>
  );
}

export default SimpleSection;
