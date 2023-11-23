import React from "react";

type TrackingSectionProps = {
  children: React.ReactNode;
  className?: string;
  variant: "right-0" | "left-0";
};
function SimpleSection({ children, className, variant }: TrackingSectionProps) {
  return (
    <section
      className={`${
        variant == "right-0" ? "pl-6.25 pr-0" : "pl-0 pr-6.25"
      } my-10  flex gap-6 md:gap-36 flex-wrap scroll-m-10% ${className}`}
      id="track"
    >
      {children}
    </section>
  );
}

export default SimpleSection;
