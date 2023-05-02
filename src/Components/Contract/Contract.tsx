import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import ContractLeft from "./ContractLeft";

export const Contract: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ht1iup",
        "template_xaj423d",
        form.current!,
        "Ze-dexfZq0VovnJB-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setMessage("There was an error sending the email.");
        }
      );
  };

  return (
    <div className="flex items-center justify-center bg-main-100" id="contact">
      <div className="my-20 mx-4 grid h-full w-full grid-cols-1 gap-10 rounded-3xl bg-slate-200 p-6 md:h-[84%]  md:grid-cols-2 md:gap-0 lg:w-[65%]">
        <ContractLeft />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="col-span-1 flex flex-col gap-4"
        >
          <div className="text-3xl font-bold md:text-4xl">Contact Me</div>
          {message && <div>{message}</div>}
          <div className="flex flex-col gap-4 lg:flex-row">
            <input
              type="text"
              className="h-10 w-full rounded-full bg-red-50 pl-4 outline-none lg:w-52"
              placeholder="First Name"
              name="user_firstname"
              required={true}
            />
            <input
              type="text"
              className="h-10 w-full rounded-full bg-red-50 pl-4 outline-none lg:w-52"
              placeholder="Last Name"
              name="user_lastname"
            />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <input
              type="text"
              className="h-10 w-full rounded-full bg-red-50 pl-4 outline-none lg:w-52"
              placeholder="Phone"
              name="number"
            />
            <input
              type="text"
              className="h-10 w-full rounded-full bg-red-50 pl-4 outline-none lg:w-52"
              placeholder="Email"
              name="user_email"
              required={true}
            />
          </div>
          <div>
            <textarea
              className="h-40 w-full rounded-2xl bg-red-50 p-4 outline-none"
              placeholder="Message"
              name="massage"
              required={true}
            ></textarea>
          </div>
          <div>
            <button className="btn">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};
