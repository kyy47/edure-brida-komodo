import Layout from "@/components/layout/Layout";
import MyModal from "@/components/micro/MyModal";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

function Tracking() {
  const [manyDaysInOnePriode, setManyDaysInOnePriode] = useState<number | null>(
    null
  );
  const [manyDaysInOneCycle, setManyDaysInOneCyccle] = useState<number | null>(
    null
  );
  const [dateFirstDayMens, setDateFirstDayMens] = useState<Date>(new Date());
  const [counter, setCounter] = useState(1);

  const [choiceState1, setChoiceState1] = useState<boolean>(false);
  const [choiceState2, setChoiceState2] = useState<boolean>(false);

  const counterIncrement = () => setCounter((lastCounter) => lastCounter + 1);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Layout>
      <div className="min-h-[60vh]">
        {counter == 1 && (
          <MyModal
            onClickNext={counterIncrement}
            question="Hari Pertama Anda Menstruasi periode sebelumnya?"
            type="with-input-calendar"
            setMyState={setDateFirstDayMens}
            state={dateFirstDayMens}
          />
        )}
        {/* <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => console.log(e)}
          className="rounded-md border"
        /> */}
      </div>
    </Layout>
  );
}

export default Tracking;
