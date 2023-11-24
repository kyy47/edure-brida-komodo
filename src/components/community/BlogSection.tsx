import React from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import CardBlog from "./CardBlog";
import { data } from "../../constant/blog_data";
import ButtonPrimary from "../micro/ButtonPrimary";

function BlogSection() {
  return (
    <section className="flex flex-col gap-5 items-center mt-16 px-4 lg:px-6.25">
      <div className="w-full">
        <Heading className="text-black lg:text-center">
          Stay Informed and Engaged
        </Heading>
        <Description fontSize="text-sm" className="lg:text-center mt-2">
          Discover the latest forum and join conversation
        </Description>
      </div>
      <div className="grid md:grid-cols-3 w-full  gap-5 mt-4">
        {data.map(
          ({ id, img, tag, title, description, authorImg, author, date }) => (
            <CardBlog
              img={img}
              key={id}
              tag={tag}
              title={title}
              description={description}
              authorImg={authorImg}
              author={author}
              date={date}
            />
          )
        )}
      </div>
      <ButtonPrimary variant="medium-outline" className="mt-3">
        View All
      </ButtonPrimary>
    </section>
  );
}

export default BlogSection;
