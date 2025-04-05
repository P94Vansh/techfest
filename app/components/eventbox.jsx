import Image from "next/image";

export default function ImageBoxEv({ src  }) {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md m-5 p-5  flex  flex-col items-center content-center ml-12 mb-12">
      {/* Title */}

      {/* Image */}
      <Image
        src={src}
        alt="Image"
        width={300}
        height={300}
        className="object-contain rounded-lg shadow-sm"
      />
    </div>
  );
}