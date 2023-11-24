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
        <Skeleton className="h-40 w-40 rounded-full flex items-center justify-center ">
          <svg
            className="w-20 h-2w-20 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </Skeleton>
      </div>
    );
  }
  return (
    <div className={`w-full  relative ${className} `}>
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
