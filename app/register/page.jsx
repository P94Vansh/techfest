"use client";

import { useCallback, useEffect, useState } from "react";
import Input from "../components/input";
import Select from "../components/select";
import Info from "../components/infobox";

export default function Register() {
  const [infoTheme, setInfoTheme] = useState("suggest");
  const [infoText, setInfoText] = useState(" * fields are required");
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const fees=[
  {"Vijay Ghosh":500},
  {"Code Storm":1000},
  {"Simu Hire":150},
  {"Pixel Pulse":150},
  {"Srijan Samvaad":400},
  {"Info Graphica":400},
  {"Vidya Vrith":300},
  {"EngiNova":1000},
  {"Yantra Sangam":250},
  {"Kala Manthan":1000},
  {"CAD venture":500},
  {"Nal Neel":500},
  {"Re civilize":500},
  {"HydroPhilia":500},
  {"Vimaan Shreshtha":1000},
  {"Ignition War":200},
  {"Vihangam":1500},
  {"Mech War":1000},
  {"SciLife":500},
  {"DronoVation":200},
  {"NanoSat Pratiyogita":300},

  ]
  const [formData, setFormData] = useState({ transition_amount: 0});
  const onSubmit = async (e) => {
    e.preventDefault();
    setInfoTheme("suggest");
    setInfoText("Uploading Form ...");
    setSubmitDisabled(true);
    console.log({ formData });
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, year: parseInt(formData.year) }),
      });

      if (response.ok) {
        let data = await response.json();
        let {type} = data;
        switch(type){
          case "success":
            setInfoTheme("success");
            setInfoText(`Form Submitted Successfully...
              Our Team will contact you Shortly through the provided Mail... Please keep Checking the spam folder of provided email as well.. If you don't receive mail within one day.. kindly contact us..`);
            break;
          case "error":
            setInfoTheme("error");
            setInfoText(data.message+" -- Contact US with Error");
            break;
        }
        
      } else {
        console.error("Failed to submit form");
        setInfoTheme("error");
        setInfoText("Error submitting form - Contact us from bottom of page");
        // Handle the error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setInfoTheme("error");
      setInfoText("Error submitting form");
      // Handle the error (e.g., show an error message)
    }

    setSubmitDisabled(false);
  };

  const handleInput = (e) => {
    let { name, value } = e.target;

  // Update transition_amount dynamically based on the selected event
  if (name === "event") {
    const selectedEvent = fees.find((fee) => Object.keys(fee)[0] === value);
    const eventFee = selectedEvent ? Object.values(selectedEvent)[0] : 0;
    setFormData({ ...formData, [name]: value, transition_amount: eventFee });
  } else {
    setFormData({ ...formData, [name]: value });
  }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-blue-100">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Event Postponed</h1>
        <p className="text-gray-600 text-lg mb-6">
          We regret to inform you that the event has been postponed.
          <br />
          Please stay tuned for further updates.
        </p>
      </div>
    </div>
    // <div className="w-full grid-bg text-white py-10">
    //   <form
    //     onSubmit={onSubmit}
    //     className="bg-blur w-[95%] mx-auto md:w-[600px] flex flex-col bg-[rgba(255,255,255,0.1)] px-5 lg:px-10 rounded-3xl border border-gray-500"
    //   >
    //     <h1 className="text-center text-2xl md:4xl py-10">
    //       <div className="text-slate-100">*Note:- Only fill out the details of the team leader and fill the details carefully, we will contact the team leader through provided Email.</div>
    //       <br/>
    //       <span className="text-gray-400">Registration Form</span>
    //     </h1>
    //     {/* Team Name - Leader */}
    //     <div className="flex flex-col md:flex-row gap-x-5">
    //       <Input
    //         label={"First Name"}
    //         name={"firstname"}
    //         onChange={handleInput}
    //         value={formData["firstname"]}
    //         className={"flex-1"}
    //         required
    //       />
    //       <Input
    //         required
    //         label={"Last Name"}
    //         name={"lastname"}
    //         className={"flex-1"}
    //         onChange={handleInput}
    //         value={formData["lastname"]}
    //       />
    //     </div>
    //     {/* Player 2 - player 3 */}

    //     {/* Year - Semester */}
    //     <div className="flex flex-col md:flex-row gap-x-5">
    //       <Select
    //         options={["1st", "2nd", "3rd", "4th", "5th"]}
    //         label={"Year"}
    //         name={"year"}
    //         onChange={handleInput}
    //         value={formData["year"]}
    //         className="flex-1"
    //         required
    //       />
    //       <Select
    //         options={Array.from({ length: 10 }).map((e, i) => i + 1)}
    //         label={"Semester"}
    //         name={"semester"}
    //         onChange={handleInput}
    //         value={formData["semester"]}
    //         className="flex-1"
    //         required
    //       />
    //     </div>
    //     {/* Gender - Email */}
    //     <div className="flex flex-col md:flex-row gap-x-5">
    //       <Select
    //         label={"Gender"}
    //         name={"gender"}
    //         options={["Male", "Female", "Other"]}
    //         className={"flex-1"}
    //         onChange={handleInput}
    //         value={formData["gender"]}
    //         required
    //       />
    //       <Select
    //         label={"College Name"}
    //         name={"college"}
    //         options={["UU","GEU", "DIT", "UPES","IMS","Shivalik","BFIT","UTU","Tula's","Doon University","Jigyasa University"]}
    //         className={"flex-1"}
    //         onChange={handleInput}
    //         value={formData["college"]}
    //         required
    //       />
          
    //     </div>

    //     {/* Phone - email */}
    //     <div className="flex flex-col md:flex-row gap-x-5">
    //       <Input
    //         label={"Email"}
    //         name={"email"}
    //         className={"flex-1"}
    //         type="email"
    //         onChange={handleInput}
    //         value={formData["email"]}
    //         required
    //       />
    //       <Input
    //         className={"flex-1"}
    //         type="number"
    //         label={"Phone"}
    //         value={formData["phone"]}
    //         onChange={handleInput}
    //         name="phone"
    //         required
    //       />
    //     </div>


    //     {/* Event selectoin */}
    //     <div className="flex flex-col md:flex-row gap-x-5">
    //       <Select
    //         options={events}
    //         label={"Select an Event"}
    //         name={"event"}
    //         onChange={handleInput}
    //         value={formData["event"]}
    //         className="flex-1"
    //         required
    //       />
    //     </div>

    //     {/* Price - ScreenShot */}
    //     <div className="flex flex-col md:flex-row gap-x-5">
    //       <div className="flex-1 flex-shrink mb-2">
    //         <div className="text-white mb-2">Charges</div>
    //         <div className="text-gray-300 flex-1 h-[40px] border flex items-center justify-center border-[#444] rounded text-center">
    //           {formData["event"]
    //             ? fees.find((fee) => Object.keys(fee)[0] === formData["event"])?.[formData["event"]] || "Event not found"
    //             : "Choose an Event first"}
    //         </div>
    //       </div>
    //       <div className="flex-1"></div>
    //     </div>

    //     {/* Payment screenshot */}
    //     <div className="flex flex-col mt-2">
    //       {formData["event"]  && (
    //         <>
    //           <div className="mb-2">Scan this QR and Submit the transaction Id</div>
    //           <img
    //             src="/payment-qr.jpg"
    //             className="w-full md:w-[50%] mx-auto rounded"
    //           />
    //           <Input
    //             className={"mt-3"}
    //             label={"Transaction ID"}
    //             name={"transaction_id"}
    //             value={formData["transaction_id"]}
    //             onChange={handleInput}
    //             required
    //           />
    //         </>
    //       )}
    //     </div>

    //     <Info
    //       theme={infoTheme}
    //       onClose={() => setInfoTheme("none")}
    //       text={infoText}
    //     />

    //     {/* SUbmit button */}
    //     <div className="my-4 flex">
    //       <button disabled={submitDisabled} className="hover:bg-[#223] px-10 py-3 border-gray-700 border bg-[#00000088] text-white rounded-lg flex-1 md:flex-none  focus:outline-none focus:ring-[3px] focus:ring-blue-600 focus:border-transparent active:scale-90 transition-none ">
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}


const events = [
  "Vijay Ghosh",
  "Code Storm",
  "Simu Hire",
  "Pixel Pulse",
  "Srijan Samvaad",
  "Info Graphica",
  "Vidya Vrith",
  "EngiNova",
  "Yantra Sangam",
  "Kala Manthan",
  "CAD venture",
  "Nal Neel",
  "Re civilize",
  "HydroPhilia",
  "Vimaan Shreshtha",
  "Ignition War",
  "Vihangam",
  "Mech War",
  "SciLife",
  "DronoVation",
  "NanoSat Pratiyogita"
];
