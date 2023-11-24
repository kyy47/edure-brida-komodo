import React from "react";
import ImageSection from "../micro/ImageSection";
import Description from "../micro/Description";
import Image, { StaticImageData } from "next/image";
import hero_1 from "../../images/blog/blog_1.png";

type CardBlogProps = {
  img: StaticImageData | string;
  tag: string;
  title: string;
  description: string;
  author: string;
  authorImg: StaticImageData | string;
  date: string;
};
function CardBlog({
  img,
  tag,
  title,
  description,
  authorImg,
  author,
  date,
}: CardBlogProps) {
  return (
    <div className="flex flex-col gap-3">
      <ImageSection variant="object-cover" url={img} className="w-full h-40" />
      <h3 className="font-semibold text-black text-sm">{tag}</h3>
      <h2 className="font-bold text-black text-lg">{title}</h2>
      <Description fontSize="text-sm">{description}</Description>
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 relative">
          <Image
            alt="hero image"
            src={authorImg}
            fill
            className="rounded-full border object-cover w-8"
          />
        </div>
        <div className="flex flex-col ">
          <h5 className="font-semibold text-black text-xs">{author}</h5>
          <Description fontSize="text-xs">{date}</Description>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
