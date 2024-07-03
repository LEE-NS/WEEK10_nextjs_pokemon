const LoadingBox = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[250px] h-[80px] bg-gray-100 flex justify-center items-center flex-col rounded-xl shadow-xl">
        <p className="font-bold">데이터를 불러오는 중...</p>
      </div>
    </div>
  );
};

export default LoadingBox;
