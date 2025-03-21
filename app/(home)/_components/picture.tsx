import Image from "next/image";
import React from "react";

const Picture = () => {
  return (
    <div className="section h-screen flex flex-col justify-center p-12 bg-main-400 sticky top-0 object-cover">
      <Image
        src="/coverLarge.png"
        alt="Cover Photo"
        className="w-[30px] h-[40px] object-cover"
        fill
      />
    </div>
  );
};

export default Picture;
