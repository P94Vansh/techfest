
"use client";
import Image from "next/image";
import Card from "./components/Card";
import { useRef } from "react";
import Faq from "./components/faq";
import Link from "next/link";
export default function Home() {
  const gamingContent=[
    { title: "Vijay Ghosh", src: "anime.jfif", href: "/event/vijayghosh" },
  ]
  //cse
  const cardcontent1 = [
    {
    title: "Code Storm",
    src: "BGMI-Background-Images.jpg",
    href: "/event/codestorm",
  },    
  { title: "Simu Hire", src: "./painting.jpg", href: "/event/simuhire" },
    
  {
    title: "Pixel Pulse",
    src: "cooking.jpg",
    href: "/event/pixelpulse",
  },
  {
    title: "Srijan Samvaad",
    src: "canvasonfaces.jpg",
    href: "/event/Srijansamvaad",
  },
  {
    title: "Info Graphica",
    src: "./sprint.jpg",
    href: "/event/infographica",
  },
  {
    title: "Vidhya Vrith",
    src: "./webdesign.jfif",
    href: "/event/vidhyavrith",
  },
  ];
  //mechanical
  const cardcontent2 = [
    {
      title: "EngiNova",
      src: "talent.jfif",
      href: "/event/Mechnova",
    },
    {
      title: "Yantra Sangam",
      src: "cosplay.jfif",
      href: "/event/Yantrasangam",
    },
    {
      title: "Kala Manthan",
      src: "cosplay.jfif",
      href: "/event/Kalamanthan",
    },
    {
      title: "CAD venture",
      src: "cosplay.jfif",
      href: "/event/Cadventure",
    },
  ];
  //civil
  const cardcontent3=[
    { title: "Nal Neel ", src: "fashion-show.jpg", href: "/event/nalneel" },
    {
      title: "Re-Civilize",
      src: "cosplay.jfif",
      href: "/event/Recivilize",
    },
    {
      title: "Amrit Dhara",
      src: "cosplay.jfif",
      href: "/event/Amritdhara",
    },
  ];
  //Aerospace

  const cardcontent4=[
    {
      title: "Vimaan Shershtha",
      src: "pirates.jfif",
      href: "/event/vimaanshershtha",
    },
    {
      title: "Ignition War",
      src: "headscratch.jfif",
      href: "/event/ignitionwar",
    },
    { title: "Vihangam", src: "robo race.jpg", href: "/event/vihangam" },
  ];
  //ECE Department
  const cardcontent5=[
    {
      title: "Mech War",
      src: "engineerlife.jfif",
      href: "/event/mechwar",
    },
  ];
  //physics
  const cardcontent6 =[
    
    {
      title: "Prathirupan Dristikon",
      src: "innovateindia.jfif",
      href: "/event/prathirupandristikon",
    },
  ];
  const faqcontent = [
    {
      ques: "What is Udgaman?",
      ans: "Udgaman is our annual Tech Fest at UIT, showcasing innovation and creativity.",
    },
    {
      ques: "How do I register for events?",
      ans: "Fill out the registration link, it's easy!",
    },
    {
      ques: "What events are happening this year?",
      ans: "CodeStorm, CadVenture, Vijay Ghosh and many more!",
    },
    // {
    //   ques: "Can I bring my friends?",
    //   ans: "Absolutely! The more, the merrier!",
    // },
  ];
  const para = `Welcome to the forefront of Engineering Innovation at Uttaranchal Institute of Technology (UIT), Uttaranchal University, Dehradun.
        Dear Students, Faculties and Guests,
        In today's ever-evolving technological realm, engineering plays a pivotal role in driving transformative changes across the globe. As the Director of the Uttaranchal Institute of Technology (UIT) at Uttaranchal University Dehradun, I am excited to outline our vision and dedication to advancing technologies that will shape our future.`;
  const para_info = `
        Prof. (Dr.) Sumit Chaudhary
        Director, Uttaranchal Institute of Technology`;

  const eventref = useRef();
  return (
    <>
      {/* Background Video Section */}
      <div className="relative w-full h-screen bg-[#112] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-auto"
          style={{objectFit:"contain"}}
        >
          <source src="/bgudgaman.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        
      </div>


      {/* ----------  DETAILS ------------ */}

      <div
        className="md:flex-row sm:flex-row flex flex-col-reverse items-center justify-center text-justify py-7"
        style={{ backgroundColor: "#f0f0f6" }}
      >
        <div className="flex flex-col gap-5 flex-1">
          {para.split("\n").map((item, ind) => (
            <div
              className="md:w-[60vw] sm:w-[40vw] px-12 md:text-xl "
              key={ind}
            >
              {item}
            </div>
          ))}
          {para_info.split("\n").map((item, ind) => (
            <div
              className="md:w-[60vw] sm:w-[40vw] px-12 md:text-xl font-bold"
              key={ind}
            >
              {item}
            </div>
          ))}
        </div>
        <div className=" mb-5 lg:p-12 flex-1">
          <img
            className="md:w-[30vw]  mx-auto w-[80%] sm:w-[80vw] border-[#eee] shadow-xl border-2 rounded-3xl bg-blue-200"
            src="./deansir.png"
            alt="picture"
          />
        </div>
      </div>

      {/* ---------- Who are we ---------- */}

      <div className="flex flex-col justify-center py-10">
        <div className="font-bold text-center  my-3 text-5xl font-sans">
          About Udgaman
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3">
          {/* <br /> */}
          <div className="flex-2 mx-5 flex flex-col" style={{ flex: 2 }}>
            {/* {who_are_we.split("\n").map((item) => {
            return <p className="text-lg text-justify lg:px-10 px-5">{item}</p>;
            })} */}
            <p className="text-lg text-justify lg:px-10 px-5">
            Welcome to Udgaman, the premier Tech Fest of 2025 at Uttaranchal Institute of Technology, where innovation meets elevation. Organized by the esteemed Core Committee UIT, Udgaman is a celebration of technology, creativity, and ingenuity. This dynamic platform bridges the gap between inspiration and action, bringing together bright minds, cutting-edge ideas, and unparalleled opportunities. With a legacy of managing exceptional events, the Core Committee ensures every aspect of Udgaman is crafted to perfection, delivering an unforgettable experience. Embark on this exhilarating journey of technological exploration and elevate your aspirations to new heights.
              <br />
              <br />
              Join us in shaping the future!
            </p>
          </div>
          <div className="flex justify-center flex-1">
            <img src={"groupPhoto.JPG"} alt="groupPhoto.JPG" />
          </div>
        </div>
      </div>

      {/* ---------- Events ---------- */}
      <div style={{ backgroundColor: "#416165" }} className=" py-10">
        {/* Don't miss */}
        <div
          style={{ backgroundColor: "#D0CDD7" }}
          className=" p-14 rounded-2xl w-[80%] mx-auto flex gap-8 flex-col items-center justify-center"
        >
          <div className="font-bold text-3xl md:text-4xl">
            {/* Don&apos;t Miss Out on the Fun! */}
            Don&apos;t miss out on all the Fun !
          </div>
          <div className="font-semibold font-sans text-2xl lg:4xl">
            Click the below images for registration.
          </div>
        </div>
        <div
          ref={eventref}
          className="text-center font-semibold mb-3  text-6xl mt-20  text-white"
        >
          Epic Events
        </div>
        {/* Events Cards */}
        <hr/>
        <h1 className="text-white text-center font-bold text-4xl m-5">Gaming</h1>
        <div className="flex p-5 lg:p-10 flex-wrap gap-5 justify-center ">
          {gamingContent.map((item) => {
            return (
              <Link key={item.href} href={item.href} className="px-1 block">
                <Card title={item.title} key={item.title} src={item.src} />
              </Link>
            );
          })}
        </div>
          <hr/>
        <h1 className="text-white text-center font-bold text-4xl m-5">CSE Department</h1>
        <div className="flex p-5 lg:p-10 flex-wrap gap-5 justify-center ">
          {cardcontent1.map((item) => {
            return (
              <Link key={item.href} href={item.href} className="px-1 block">
                <Card title={item.title} key={item.title} src={item.src} />
              </Link>
            );
          })}
        </div>
        <hr/>
        <h1 className="text-white text-center font-bold text-4xl m-5">Mechanical Department</h1>
        <div className="flex p-5 lg:p-10 flex-wrap gap-5 justify-center ">
          {cardcontent2.map((item) => {
            return (
              <Link key={item.href} href={item.href} className="px-1 block">
                <Card title={item.title} key={item.title} src={item.src} />
              </Link>
            );
          })}
        </div>


        <hr/>
        <h1 className="text-white text-center font-bold text-4xl m-5">Civil Department</h1>
        <div className="flex p-5 lg:p-10 flex-wrap gap-5 justify-center ">
          {cardcontent3.map((item) => {
            return (
              <Link key={item.href} href={item.href} className="px-1 block">
                <Card title={item.title} key={item.title} src={item.src} />
              </Link>
            );
          })}
        </div>

        <hr/>
        <h1 className="text-white text-center font-bold text-4xl m-5">Aerospace Department</h1>
        <div className="flex p-5 lg:p-10 flex-wrap gap-5 justify-center ">
          {cardcontent4.map((item) => {
            return (
              <Link key={item.href} href={item.href} className="px-1 block">
                <Card title={item.title} key={item.title} src={item.src} />
              </Link>
            );
          })}
        </div>
        <hr/>
        <h1 className="text-white text-center font-bold text-4xl m-5">ECE Department</h1>
        <div className="flex p-5 lg:p-10 flex-wrap gap-5 justify-center ">
          {cardcontent5.map((item) => {
            return (
              <Link key={item.href} href={item.href} className="px-1 block">
                <Card title={item.title} key={item.title} src={item.src} />
              </Link>
            );
          })}
        </div>
        <hr/>
        <h1 className="text-white text-center font-bold text-4xl m-5">Physics Department</h1>
        <div className="flex p-5 lg:p-10 flex-wrap gap-5 justify-center ">
          {cardcontent6.map((item) => {
            return (
              <Link key={item.href} href={item.href} className="px-1 block">
                <Card title={item.title} key={item.title} src={item.src} />
              </Link>
            );
          })}
        </div>
        {/* ----- FAQ ----- */}
        <div className="text-center mb-10 font-serif pt-9 font-bold text-5xl text-white">
          FAQS
        </div>
        <div className="flex flex-col gap-3 lg:px-[200px] px-3 flex-wrap ">
          {faqcontent.map((item) => {
            return (
              <Faq
                ques={item.ques}
                key={item.ans}
                ans={item.ans}
                className="flex-1"
              />
            );
          })}
        </div>
      </div>

      {/* ------- Numbers ------- */}
      <div className="py-20 flex items-center justify-around bg-white flex-col lg:flex-row gap-y-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-blue-700 font-semibold text-4xl">3000+</div>
          <div className="font-semibold text-3xl"> Participants</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-blue-700 font-semibold text-4xl">10+</div>
          <div className="font-semibold text-3xl"> Exciting Events</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-blue-700 font-semibold text-4xl">2</div>
          <div className="font-semibold text-3xl"> Days of Fun</div>
        </div>
      </div>

      {/* ------- Follow US ------- */}
      <div className="bg-blue-200">
        <div className="flex p-7 items-center gap-7 flex-col lg:flex-row">
          <div className="flex flex-col gap-8 items-center lg:w-[50vw]">
            <div className="text-center font-bold text-4xl lg:text-6xl">
              Follow Us Online
            </div>
            <div className="font-serif text-xl">
              Be connected with us on{" "}
              <Link
                target="_blank"
                className="font-semibold font-mono text-blue-900 rounded-tr rounded-tl border-b-blue-950 border border-transparent hover:bg-[rgba(255,255,255,0.6)] transition-all "
                href={"https://www.instagram.com/core.committee_uit?igsh=MW52NDRma3VuYTI5cw=="}
              >
                Instagram
              </Link>{" "}
              and {" "}
              <Link
                target="_blank"
                className="font-semibold font-mono text-blue-900 rounded-tr rounded-tl border-b-blue-950 border border-transparent hover:bg-[rgba(255,255,255,0.6)] transition-all "
                href={"https://www.linkedin.com/in/core-committee-uit-202522352"}
              >
                LinkedIn
              </Link>{" "}
              for updates.
            </div>
          </div>
          <div>
            {/* {" "} */}
            <img
              src="followus.jfif"
              alt="Image"
              className="w-[100%] rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
