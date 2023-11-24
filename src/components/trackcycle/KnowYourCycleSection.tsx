import React, { useState } from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";
function KnowYourCycleSection() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const modalOpenlHandler = () => {
    setisModalOpen(!isModalOpen);
  };
  return (
    <section className="mt-15% px-6.25">
      <Heading className="text-black">Know Your Cycle</Heading>
      <div className="flex flex-col gap-3">
        <Description className="max-w-xl mt-4" fontSize="text-base">
          Record analyze and understand your menstrual cycle with our
          comprehensive tracker.
        </Description>
        <div className="flex gap-3 mt-2">
          <ButtonPrimary variant="medium-solid" onClick={modalOpenlHandler}>
            Start
          </ButtonPrimary>
        </div>
      </div>
      {isModalOpen && (
        <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
          <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4">
              <p className="text-cranberry-600 text-xl font-semibold">
                Are You Menstruating?
              </p>
              <div className="flex gap-2">
                <ButtonPrimary
                  variant="medium-solid"
                  onClick={modalOpenlHandler}
                  className="pointer-events-auto cursor-pointer"
                >
                  Yes
                </ButtonPrimary>
                <ButtonPrimary
                  variant="medium-outline"
                  onClick={modalOpenlHandler}
                  className="pointer-events-auto cursor-pointer"
                >
                  No
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default KnowYourCycleSection;
