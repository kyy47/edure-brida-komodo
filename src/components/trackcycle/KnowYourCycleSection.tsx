import React, { useState } from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";
import { useRouter } from "next/router";
function KnowYourCycleSection() {
  const router = useRouter();

  const startTracking = () => {
    router.replace("/trackcycle/tracking");
  };

  return (
    <section className="mt-15% px-4 lg:px-6.25">
      <Heading className="text-black">Know Your Cycle</Heading>
      <div className="flex flex-col gap-3">
        <Description className="max-w-xl mt-4" fontSize="text-base">
          Record analyze and understand your menstrual cycle with our
          comprehensive tracker.
        </Description>
        <div className="flex gap-3 mt-2">
          <ButtonPrimary variant="medium-solid" onClick={startTracking}>
            Start
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}

export default KnowYourCycleSection;
