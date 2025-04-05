import Image from "next/image";

export default function ImageBox({ src, title,name,pos }) {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md m-5 p-5 md:w-[20vw] w-[80vw] flex  flex-col items-center content-center ml-12 mb-12">
      {/* Title */}
      <h2 className="text-xl text-center font-bold text-gray-800 mb-4">{title || ""}</h2>

      {/* Image */}
      <Image
        src={src}
        alt={title || "Image"}
        width={300}
        height={300}
        className="object-cover rounded-lg md:w-[20vw] w-[50vw] h-[40vh] shadow-sm"
      />
      <h4 className="font-bold mt-3">{name}</h4>
      <p>{pos}</p>
    </div>
  );
}