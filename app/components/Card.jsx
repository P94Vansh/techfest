import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  return (
    <div
      className={
        styles["event-card"] +
        " relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[300px] max-h-[360px]"
      }
    >
      <div className="flex items-center justify-center relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl ">
        <img
          src={props.src}
          alt={props.alt || "Card image"}
          className="w-full h-64"
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {props.title}
        </h4>
      </div>
    </div>
  );
};

export default Card;
