import Image from "next/image";

const LoadingBox = () => {
  return (
    <div className="w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center">
      <div className="w-[250px] h-[250px] bg-gray-300 flex justify-center items-center flex-col gap-3 rounded-xl shadow-xl">
        <Image
          width={120}
          height={120}
          src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-pokemon-ball-png-images-4.png"
          alt="loading_img"
        />
        <p className="font-bold">데이터를 불러오는 중...</p>
      </div>
    </div>
  );
};

export default LoadingBox;
