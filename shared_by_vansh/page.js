"use client";
import Image from "next/image";
import Card from "./components/Card";
import { useRef } from "react";
import Faq from "./components/faq";
import Link from "next/link";
export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url(/bg-img.png)",
    backgroundSize: "cover", // Ensures the image covers the container
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Adjust as needed
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  };
  const backgroundImageStyle2 = {
    backgroundImage: "url(/bg-cloud.avif)",
    backgroundSize: "cover", // Ensures the image covers the container
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.9,
  };
  const cardcontent = [
    {
      title: "Engineers' Stride",
      src: "./sprint.jpg",
      href: "/event/engineerstride",
    },
    { title: "UU Picasso", src: "./painting.jpg", href: "/event/picasso" },
    {
      title: "Crack N Code",
      src: "./crackncode.jfif",
      href: "/event/crackncode",
    },
    {
      title: "HTML Combat",
      src: "./webdesign.jfif",
      href: "/event/htmlcombat",
    },
    {
      title: "BGMI Badshah",
      src: "BGMI-Background-Images.jpg",
      href: "/event/bgmi-badshah",
    },
    { title: "Anyday Anime", src: "anime.jfif", href: "/event/anyday-anime" },
    { title: "Fashion Show ", src: "fashion-show.jpg", href: "/event/mr-ms-uu" },
    {
      title: "Innovate India",
      src: "innovateindia.jfif",
      href: "/event/innovate-india",
    },
    {
      title: "Head Scratch",
      src: "headscratch.jfif",
      href: "/event/head-scratch",
    },
    { title: "Digital India", src: "robo.jpeg", href: "/event/digital-india" },
    { title: "Pirates", src: "pirates.jfif", href: "/event/pirates" },
    {
      title: "Life of an Engineer",
      src: "engineerlife.jfif",
      href: "/event/life-of-an-engineer",
    },
    {
      title: "Cook Without Fire",
      src: "cooking.jpg",
      href: "/event/cook-without-fire",
    },
    {
      title: "Canvas on Faces",
      src: "canvasonfaces.jpg",
      href: "/event/canvas-on-faces",
    },
    {
      title: "Engineers' Got Talent",
      src: "talent.jfif",
      href: "/event/engineers-got-talent",
    },
    {
      title: "Character Clash",
      src: "cosplay.jfif",
      href: "/event/character-clash",
    },
  ];
  const faqcontent = [
    {
      ques: "What is Engineer's Day?",
      ans: "A day to celebrate engineering with fun events!",
    },
    {
      ques: "How do I register for events?",
      ans: "Fill out the registration link, it's easy!",
    },
    {
      ques: "What events are happening this year?",
      ans: "Fun run, Code War, Web War, and many more!",
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
      <div
        className="flex flex-col items-center justify-center gap-5 relative h-dvh"
        style={backgroundImageStyle}
      >
        <div className="flex justify-between p-4 w-full">
          <Image
            width={190}
            height={52}
            src="/UU-New-Logo.png"
            className="md:w-[15vw] w-[50vw] bg-white p-3 rounded-xl absolute top-5 left-2"
            alt="logo"
          />

          <Image
            width={100}
            height={60}
            src="/uit logo.png"
            className="md:w-[8vw] w-[30vw] bg-white p-3 rounded-xl absolute top-4 right-2"
            alt="logo"
          />
        </div>
        <div className="font-bold text-white font-sans text-2xl md:text-7xl">
          {" "}
          Engineers&apos; Day Mahotsava 2024{" "}
        </div>
        <div className=" text-white font-serif md:text-4xl">
          Unleash Your Inner Genius and Join the Fun!
        </div>
        <button
          className="border-white border-2 font-bold text-xl py-2 px-10 bg-transparent text-white rounded-3xl hover:bg-white hover:text-black"
          onClick={() => {
            eventref.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Explore the events
        </button>
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
          Who We Are
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3">
          {/* <br /> */}
          <div className="flex-2 mx-5 flex flex-col" style={{ flex: 2 }}>
            {/* {who_are_we.split("\n").map((item) => {
            return <p className="text-lg text-justify lg:px-10 px-5">{item}</p>;
            })} */}
            <p className="text-lg text-justify lg:px-10 px-5">
              Welcome to <b>ENGINEERS&apos; DAY MAHOTSAVA 2024</b> , the ultimate
              celebration of engineering brilliance! We are the masterminds
              behind the most electrifying Engineers&apos; Day event, where
              creativity meets competition in a whirlwind of excitement.
              <br />
              <br />
              Our mission? To showcase the incredible talents of engineers while
              having a blast!
              <br />
              <br />
              Join us as we transform ordinary days into extraordinary
              experiences. Get ready to laugh, learn, and unleash your inner
              engineer!
            </p>
            ;
          </div>
          <div className="flex justify-center flex-1">
            <img src={"/circle.png"} alt="circle.img" />
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
        <div className="flex p-5 lg:p-10 flex-wrap gap-5 justify-center ">
          {cardcontent.map((item) => {
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
            Be connected with us on <Link target="_blank" className="font-semibold font-mono text-blue-900 rounded-tr rounded-tl border-b-blue-950 border border-transparent hover:bg-[rgba(255,255,255,0.6)] transition-all " href={'https://www.instagram.com/engineersdaymahotsava2024'}>Instagram</Link> for updates.
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

