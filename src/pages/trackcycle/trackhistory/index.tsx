import IconDeleteBack2Fill from "@/components/icon/IconDeleteBack2Fill";
import Layout from "@/components/layout/Layout";
import Heading from "@/components/micro/Heading";
import useSnackbar from "@/hooks/useSnackbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type TrackingType = {
  id: number;
  name: string;
  periodMenst: number;
  cycleMenst: number;
  nextFirstDayPriodMenst: Date;
  id_user: string;
  createdAt: Date;
  beforeFirstDayPriodMenst: Date;
};

function Track() {
  const [cookie, setCookie, removeCookie] = useCookies(["user_id"]);

  const [trackData, setTrackData] = useState<TrackingType[]>([]);
  const { Snackbar, showSnackbar } = useSnackbar();

  const getHistoryTracking = async (id_user: string) => {
    try {
      showSnackbar(true, "get data...", "loading");
      const { data } = await axios.get(
        `https://edure.vercel.app/api/track-cycle/trackinghistory?id_user=${id_user}`
      );
      setTrackData(data);
      showSnackbar(false, null, null);
    } catch (error: any) {
      showSnackbar(true, error.response.data.message, "error");
      setTimeout(() => {
        showSnackbar(false, null, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getHistoryTracking(cookie.user_id);
  }, []);

  const handleDeleteTrack = async (id: number) => {
    try {
      showSnackbar(true, "delete data...", "loading");
      const {
        data: { result },
      } = await axios.delete(
        `https://edure.vercel.app/api/track-cycle/trackinghistory?id=${id}`
      );
      setTrackData([...trackData].filter((item) => item.id !== result.id));
      showSnackbar(true, "delete data success", "success");
      setTimeout(() => {
        showSnackbar(false, null, null);
      }, 2000);
    } catch (error: any) {
      showSnackbar(true, error.response.data.message, "error");
      setTimeout(() => {
        showSnackbar(false, null, null);
      }, 2000);
    }
  };

  return (
    <>
      <Snackbar />
      <Layout>
        <section className="min-h-[500px]">
          <Heading className="text-center mt-15%">My Tracking History</Heading>
          <div className="flex flex-col mt-10">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden px-3 lg:px-6.25 ">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          NO
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Period Mens
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Cycle Mens
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          First Day Before
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Next Day Mens
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                          CREATED AT
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {trackData.map((item, index) => (
                        <tr
                          className="hover:bg-gray-100 cursor-pointer"
                          key={item.id}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium w-[10px] text-gray-800 ">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4  text-sm text-gray-800 w-[300px]">
                            <p>{item.name}</p>
                          </td>
                          <td className="px-6 py-4  text-sm text-gray-800 w-[300px]">
                            <p>{item.periodMenst} hari</p>
                          </td>
                          <td className="px-6 py-4  text-sm text-gray-800 w-[300px]">
                            <p>{item.cycleMenst} hari</p>
                          </td>
                          <td className="px-6 py-4  text-sm text-gray-800 w-[300px]">
                            <p>
                              {new Date(
                                item.beforeFirstDayPriodMenst
                              ).toLocaleDateString()}
                            </p>
                          </td>
                          <td className="px-6 py-4  text-sm text-gray-800 w-[300px]">
                            <p>
                              {new Date(
                                item.nextFirstDayPriodMenst
                              ).toLocaleDateString()}
                            </p>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex gap-2 items-center justify-end">
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-cranberry-600 hover:text-cranberry-800 disabled:opacity-50 disabled:pointer-events-none "
                              onClick={() => handleDeleteTrack(item.id)}
                            >
                              <IconDeleteBack2Fill />
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Track;
