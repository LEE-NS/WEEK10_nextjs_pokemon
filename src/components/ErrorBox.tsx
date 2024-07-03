const ErrorBox = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[250px] h-[80px] bg-gray-100 flex justify-center items-center flex-col rounded-xl shadow-xl">
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
