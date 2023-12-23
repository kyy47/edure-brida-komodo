import Layout from "@/components/layout/Layout";
import ButtonPrimary from "@/components/micro/ButtonPrimary";
import Description from "@/components/micro/Description";
import Heading from "@/components/micro/Heading";
import MyModal from "@/components/micro/MyModal";
import SimpleSection from "@/components/micro/SimpleSection";
import { Calendar } from "@/components/ui/calendar";
import { addDays } from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

function Tracking() {
  const [manyDaysMensInOnePriode, setManyDaysMensInOnePriode] =
    useState<number>(0);
  const [manyDaysInOneCycle, setManyDaysInOneCyccle] = useState<number>(0);
  const [dateFirstDayMens, setDateFirstDayMens] = useState<Date>(new Date());
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 11, 1),
    to: addDays(new Date(2023, 11, 1), 20),
  });

  const counterIncrement = () => setCounter((lastCounter) => lastCounter + 1);
  const handleSetResult = () => {
    const firstDayNextCycle = new Date(
      dateFirstDayMens.getTime() + manyDaysInOneCycle * 86400000
    );
    console.log(manyDaysInOneCycle);
    setDate({
      from: new Date(
        dateFirstDayMens.getTime() + manyDaysInOneCycle * 86400000
      ),
      to: addDays(
        dateFirstDayMens.getTime() + manyDaysInOneCycle * 86400000,
        manyDaysMensInOnePriode - 1
      ),
    });
  };

  useEffect(() => {
    if (counter == 5) {
      handleSetResult();
    }
  }, [counter]);

  return (
    <Layout>
      {counter === 5 && (
        <>
          <Heading className="text-center mt-15%">
            Your Menstrual Cycle Tracker Results
          </Heading>
          <SimpleSection className="w-full mt-20">
            <div>
              <h3 className="font-semibold text-xl max-w-[500px]">
                Hi <span className="text-cranberry-500"> {name}</span> , This
                Information On the Estimated Results of the Your Menstrual Cycle
              </h3>
              <div className="flex items-center mt-4">
                <h4 className="font-normal text-base max-w-[200px]">
                  First Day of the Last Menstrual Period
                </h4>
                <Description
                  className="border-2 border-cranberry-500 px-5 py-2 rounded-md"
                  fontSize="text-sm"
                >
                  {dateFirstDayMens.toLocaleDateString()}
                </Description>
              </div>
              <div className="flex items-center mt-4">
                <h4 className="font-normal text-base w-[200px]">
                  Your Cycle Length
                </h4>
                <Description
                  className="border-2 border-cranberry-500 px-5 py-2 rounded-md"
                  fontSize="text-sm"
                >
                  {manyDaysMensInOnePriode} Days
                </Description>
              </div>
              <div className="flex items-center mt-4">
                <h4 className="font-normal text-base w-[200px]">
                  Next Expected Period
                </h4>
                <Description
                  className="border-2 border-cranberry-500 px-5 py-2 rounded-md"
                  fontSize="text-sm"
                >
                  {new Date(
                    dateFirstDayMens.getTime() + manyDaysInOneCycle * 86400000
                  ).toLocaleDateString()}
                </Description>
              </div>
            </div>
            <div className="flex justify-end items-end w-full flex-1">
              <div className="relative min-w-[200px] min-h-[300px] -top-6 ">
                <div className="absolute  bottom-0 right-[250px] ">
                  <div className="relative  right-0 w-[200px] h-[200px] ">
                    <Image
                      fill
                      alt="tracking_image"
                      src="/tracking_image.png"
                      priority
                      className="object-contain "
                    />
                  </div>
                </div>

                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={1}
                  className="absolute top-0 bg-white right-3 "
                />
              </div>
            </div>
          </SimpleSection>
          <Description className="text-center px-36 mt-14 min-w-full ">
            Make sure you get adequate nutrition. Consume more vegetables,
            especially those rich in iron, and unsaturated fats, such as olive
            oil, which can support reproductive health.
          </Description>
          <div className="flex justify-center gap-4 mt-5 ">
            <ButtonPrimary variant="medium-solid">Get Started</ButtonPrimary>
            <ButtonPrimary variant="medium-outline">Learn More</ButtonPrimary>
          </div>
        </>
      )}

      <div className="min-h-[60vh]">
        {counter == 1 && (
          <MyModal
            onClickNext={counterIncrement}
            question="Tuliskan Nama Anda?"
            type="with-input-text"
            setMyState={setName}
          />
        )}
        {counter == 2 && (
          <MyModal
            onClickNext={() => {
              counterIncrement();
            }}
            question="Hari Pertama Anda Menstruasi periode sebelumnya?"
            type="with-input-calendar"
            setMyState={setDateFirstDayMens}
            state={dateFirstDayMens}
          />
        )}
        {counter == 3 && (
          <MyModal
            onClickNext={counterIncrement}
            question="Berapa Hari anda Menstruasi dalam satu Periode?"
            type="with-input-number"
            setMyState={setManyDaysMensInOnePriode}
          />
        )}
        {counter == 4 && (
          <MyModal
            onClickNext={() => {
              counterIncrement();
            }}
            question="Berapa Hari Siklus Mens anda?"
            type="with-input-number"
            setMyState={setManyDaysInOneCyccle}
          />
        )}
      </div>
    </Layout>
  );
}

export default Tracking;
