import React from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import MyInput from "../micro/MyInput";
import MyTextArea from "../micro/MyTextArea";
import MyCheckbox from "../micro/MyCheckbox";
import ButtonPrimary from "../micro/ButtonPrimary";

function ContactUsSection() {
  return (
    <section className="grid md:grid-cols-2 gap-4 px-6.25 mt-20">
      <div className="flex flex-col gap-2">
        <Heading>Get in Touch</Heading>
        <Description fontSize="text-sm">
          Have a question? Need support? We’re here to help
        </Description>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <svg
              width="32"
              height="24"
              viewBox="0 0 36 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.20889 2.35566L16.8978 13.129C17.2116 13.377 17.6 13.5119 18 13.5119C18.4 13.5119 18.7884 13.377 19.1022 13.129L32.7911 2.35566M32.2222 26.4446H3.77778C3.30628 26.4446 2.8541 26.2573 2.5207 25.9239C2.1873 25.5905 2 25.1383 2 24.6668V3.33344C2 2.86195 2.1873 2.40976 2.5207 2.07636C2.8541 1.74297 3.30628 1.55566 3.77778 1.55566H32.2222C32.6937 1.55566 33.1459 1.74297 33.4793 2.07636C33.8127 2.40976 34 2.86195 34 3.33344V24.6668C34 25.1383 33.8127 25.5905 33.4793 25.9239C33.1459 26.2573 32.6937 26.4446 32.2222 26.4446Z"
                stroke="black"
                strokeWidth="2.25"
              />
            </svg>
            <div>
              <h3 className="text-black font-semibold text-sm">Email</h3>
              <Description fontSize="text-xs">info@eduweb.co.id.</Description>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <svg
              width="31"
              height="31"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.9998 23.4126V30.4456C34.0053 30.9627 33.8986 31.4748 33.6872 31.9467C33.4758 32.4186 33.1647 32.8391 32.7752 33.1793C32.3858 33.5194 31.9272 33.7711 31.4311 33.9171C30.9351 34.0631 30.4133 34.0998 29.9017 34.0248C22.8095 33.1137 16.222 29.8688 11.1772 24.8014C6.13239 19.7339 2.91706 13.1319 2.03783 6.0357C1.96307 5.52558 1.99939 5.00533 2.14432 4.51055C2.28925 4.01576 2.53937 3.55813 2.87755 3.16897C3.21573 2.77981 3.63399 2.4683 4.10372 2.25576C4.57344 2.04323 5.08354 1.93468 5.59911 1.93756H12.5248C12.9672 1.93487 13.3949 2.09616 13.7254 2.39029C14.0559 2.68442 14.2657 3.09055 14.3144 3.53029C14.492 5.87567 15.0985 8.16853 16.104 10.2949C16.2764 10.6976 16.2951 11.1496 16.1566 11.5652C16.018 11.9807 15.7319 12.3311 15.3523 12.5498L13.8133 13.4267C13.5915 13.5487 13.398 13.7164 13.2458 13.9187C13.0936 14.121 12.986 14.3533 12.9302 14.6002C12.8743 14.8472 12.8716 15.1031 12.922 15.3512C12.9724 15.5993 13.0749 15.8339 13.2227 16.0395C14.9932 18.6329 17.2329 20.8726 19.8263 22.643C20.0319 22.7908 20.2664 22.8933 20.5145 22.9438C20.7626 22.9942 21.0186 22.9914 21.2656 22.9356C21.5125 22.8798 21.7448 22.7722 21.9471 22.62C22.1494 22.4677 22.3171 22.2743 22.4391 22.0525L23.316 20.5134C23.5478 20.1289 23.9156 19.8456 24.3466 19.7196C24.7775 19.5936 25.2401 19.6342 25.6424 19.8334C27.7688 20.8388 30.0617 21.4454 32.4071 21.623C32.8468 21.6716 33.2529 21.8815 33.5471 22.2119C33.8412 22.5424 34.0025 22.9702 33.9998 23.4126Z"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <h3 className="text-black font-semibold text-sm">Phone</h3>
              <Description fontSize="text-xs">89 77 090 2221</Description>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <svg
              width="37"
              height="45"
              viewBox="0 0 32 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0002 20.6663C18.5775 20.6663 20.6668 18.577 20.6668 15.9997C20.6668 13.4223 18.5775 11.333 16.0002 11.333C13.4228 11.333 11.3335 13.4223 11.3335 15.9997C11.3335 18.577 13.4228 20.6663 16.0002 20.6663Z"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 44C16 44 2 27.6667 2 16C2 12.287 3.475 8.72601 6.10051 6.10051C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.10051C28.525 8.72601 30 12.287 30 16C30 27.6667 16 44 16 44Z"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <h3 className="text-black font-semibold text-sm">Adress</h3>
              <Description fontSize="text-xs">
                Jalan Raya Zamia, No.2 Desa Lelede, Banyumulek, Kediri, West
                Lombok Regency, West Nusa Tenggara 83362.
              </Description>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <MyInput label="Name" placeholder="enter your name" type="text" />
        <MyInput label="Email" placeholder="enter your email" type="email" />
        <MyTextArea label="Message" placeholder="enter your message" rows={7} />
        <MyCheckbox label="I agree to the Terms" />
        <ButtonPrimary variant="small-solid">Send</ButtonPrimary>
      </div>
    </section>
  );
}

export default ContactUsSection;
