import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import ButtonPrimary from "./ButtonPrimary";

type MyModalCarouselProps = {
  onClickNext: () => any;
  question: string;
  state: number;
  setMyState: React.Dispatch<React.SetStateAction<number>>;
};

function MyModalCarousel({
  onClickNext,
  question,
  setMyState,
  state,
}: MyModalCarouselProps) {
  return (
    <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
      <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
          <p className="text-cranberry-600 text-xl font-semibold text-center">
            {question}
          </p>
          <Carousel className="w-full max-w-xs pointer-events-auto">
            <CarouselContent className="">
              {Array.from({ length: 13 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex justify-center ">
                    <Card className="w-fit">
                      <CardContent className="flex aspect-square items-center justify-center p-6 w-20">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <button onClick={() => setMyState((item) => item - 1)}>
              <CarouselPrevious className="translate-x-16 w-14 h-14 bg-cranberry-200" />
            </button>
            <button onClick={() => setMyState((item) => item + 1)}>
              <CarouselNext className="-translate-x-16  w-14 h-14  bg-cranberry-200 " />
            </button>
          </Carousel>
          <div className="flex gap-2 w-full px-3 justify-center">
            <ButtonPrimary
              variant="medium-solid"
              onClick={() => {
                onClickNext();
              }}
              className="pointer-events-auto cursor-pointer"
            >
              Next
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyModalCarousel;
