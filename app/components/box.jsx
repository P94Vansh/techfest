import Image from "next/image";

export default function ImageBox({ src, title,name,pos }) {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md m-5 p-5  flex h-[75vh] flex-col items-center content-center ml-12 mb-12">
      {/* Title */}
      <h2 className="text-xl text-center font-bold text-gray-800 mb-4">{title || ""}</h2>

      {/* Image */}
      <div className="h-[50vh] overflow-hidden">
      <Image
        src={src}
        alt={title || "Image"}
        width={300}
        height={300}
        className="object-contain rounded-lg shadow-sm" 
      />
      </div>
      <h4 className="font-bold mt-3">{name}</h4>
      <p>{pos}</p>
    </div>
  );
}