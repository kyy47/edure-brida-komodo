import Layout from "@/components/layout/Layout";
import ButtonPrimary from "@/components/micro/ButtonPrimary";
import Description from "@/components/micro/Description";
import Heading from "@/components/micro/Heading";
import MyModal from "@/components/micro/MyModal";
import MyModalCarousel from "@/components/micro/MyModalCarousel";
import SimpleSection from "@/components/micro/SimpleSection";
import { Calendar } from "@/components/ui/calendar";
import useSnackbar from "@/hooks/useSnackbar";
import axios from "axios";
import { addDays } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { DateRange } from "react-day-picker";

function Tracking() {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);
  const router = useRouter();

  const [manyDaysMensInOnePriode, setManyDaysMensInOnePriode] =
    useState<number>(1);
  const [manyDaysInOneCycle, setManyDaysInOneCyccle] = useState<number>(1);
  const [dateFirstDayMens, setDateFirstDayMens] = useState<Date>(new Date());
  const [counter, setCounter] = useState(1);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 11, 1),
    to: addDays(new Date(2023, 11, 1), 20),
  });

  const { Snackbar, showSnackbar } = useSnackbar();
  const [name, setName] = useState("");

  const counterIncrement = () => setCounter((lastCounter) => lastCounter + 1);
  const handleSetResult = () => {
    const firstDayNextCycle = new Date(
      dateFirstDayMens.getTime() + manyDaysInOneCycle * 86400000
    );
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

  const seeAllHistoryTracking = () => {
    router.replace("/trackcycle/trackhistory");
  };

  const handleSaveResult = async () => {
    const resultData = {
      name: name,
      periodMenst: manyDaysMensInOnePriode,
      cycleMenst: manyDaysInOneCycle,
      nextFirstDayPriodMenst: new Date(
        dateFirstDayMens.getTime() + manyDaysInOneCycle * 86400000
      ),
      id_user: cookie.user_id,
      beforeFirstDayPriodMenst: dateFirstDayMens,
    };

    try {
      showSnackbar(true, "Loading...", "loading");
      const { data } = await axios.post(
        "https://edure.vercel.app/api/track-cycle",
        resultData
      );

      showSnackbar(true, data.message, "success");

      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    } catch (e: any) {
      showSnackbar(true, e.response.data.message, "warning");
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  const getUserFromId = async (id: string) => {
    try {
      const { data } = await axios.get(
        `https://edure.vercel.app/api/user/byid?id=${id}`
      );
      setName(data.username || "User");
    } catch (error: any) {
      showSnackbar(true, error.response.data.message, "warning");
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    if (counter == 4) {
      handleSetResult();
    }
    if (counter == 1) {
      getUserFromId(cookie.user_id);
    }
  }, [counter]);

  return (
    <Layout>
      {counter === 4 && (
        <>
          <Snackbar />
          <Heading className="text-center mt-15%">
            Your Menstrual Cycle Tracker Results
          </Heading>
          <SimpleSection className="w-full mt-20">
            <div>
              <h3 className="font-semibold text-xl max-w-[500px]">
                Hi <span className="text-cranberry-500"> {name || "User"}</span>{" "}
                , This Information On the Estimated Results of the Your
                Menstrual Cycle
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
                  className="absolute top-0 bg-white right-3 pointer-events-none "
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
            <ButtonPrimary
              variant="medium-solid"
              onClick={seeAllHistoryTracking}
            >
              See Your History
            </ButtonPrimary>
            <ButtonPrimary
              variant="medium-outline"
              className="flex gap-3 items-center"
              onClick={handleSaveResult}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M8.5 1.5A1.5 1.5 0 0110 0h4a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l3.5-3.5a.5.5 0 00-.708-.708L8.5 9.293V1.5z" />
              </svg>
              Save
            </ButtonPrimary>
          </div>
        </>
      )}

      <div className="min-h-[60vh]">
        {counter == 1 && (
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
        {counter == 2 && (
          <MyModalCarousel
            onClickNext={counterIncrement}
            question="Berapa Hari anda Menstruasi dalam satu Periode?"
            setMyState={setManyDaysMensInOnePriode}
            state={manyDaysMensInOnePriode}
          />
        )}
        {counter == 3 && (
          <MyModal
            onClickNext={() => {
              counterIncrement();
            }}
            type="with-input-number"
            question="Berapa Hari Siklus Mens anda?"
            setMyState={setManyDaysInOneCyccle}
          />
        )}
      </div>
    </Layout>
  );
}

export default Tracking;
