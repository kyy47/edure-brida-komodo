import React from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";

function ContactSection() {
  return (
    <section className="py-6 px-6.25 flex justify-between items-center">
      <div>
        <Heading>Contact Information</Heading>
        <Description className="max-w-xl mt-4">
          If your have any questions or need further assistance, please feel
          free to reach out to us.
        </Description>
      </div>
      <div className="flex flex-col gap-4 pl-6">
        <div className="flex gap-4 items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" height="3em" width="3em">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
          </svg>
          <div>
            <h3 className="text-xl">Email</h3>
            <Description>info@eduweb.co.id.</Description>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="3em"
            width="3em"
          >
            <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
          </svg>
          <div>
            <h3 className="text-xl">Contact</h3>
            <Description>89 77 090 2221</Description>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" height="3em" width="3em">
            <path d="M12 6.5A2.5 2.5 0 0114.5 9a2.5 2.5 0 01-2.5 2.5A2.5 2.5 0 019.5 9 2.5 2.5 0 0112 6.5M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7m0 2a5 5 0 00-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 00-5-5z" />
          </svg>
          <div>
            <h3 className="text-xl">Address</h3>
            <Description className="max-w-md">
              Jalan Raya Zamia, No.2 Desa Lelede, Banyumulek, Kediri, West
              Lombok Regency, West Nusa Tenggara 83362.
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
