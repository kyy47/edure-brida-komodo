import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

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
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center opacity-40">
        <Skeleton className="h-40 w-full min-w-[200px] rounded-xl flex items-center justify-center "></Skeleton>
      </div>
    );
  }
  return (
    <div className={`w-full  relative ${className} hidden md:block`}>
      <Image
        alt="hero image"
        src={url}
        fill
        priority
        sizes="100%"
        className={`${variant} object-center`}
      />
    </div>
  );
}

export default ImageSection;
