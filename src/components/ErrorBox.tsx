import Image from "next/image";

const ErrorBox = () => {
  return (
    <div className="w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center">
      <div className="w-[250px] h-[250px] bg-gray-300 flex justify-center items-center flex-col gap-5 rounded-xl shadow-xl">
        <Image
          width={120}
          height={120}
          src="https://static.vecteezy.com/system/resources/thumbnails/022/068/710/small_2x/rejected-sign-and-symbol-clip-art-free-png.png"
          alt="error_img"
        />
        <p className="font-bold text-center">
          데이터 불러오기 실패!
          <br />
          다시 시도해보세요
        </p>
      </div>
    </div>
  );
};

export default ErrorBox;
