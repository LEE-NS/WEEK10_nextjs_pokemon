const PokemonDetail = () => {
  return (
    <div className="w-1/2 bg-slate-300 flex flex-col items-center gap-5 p-5 rounded-xl">
      <div className="flex flex-col justify-center items-center pt-2 pb-2 gap-1 bg-red-300 w-full rounded-xl">
        <p>No.000</p>
        <h1 className="text-lg font-bold">포켓몬 이름</h1>
      </div>
      <div className="w-52 h-52 bg-lime-500">이미지</div>
      <ul>
        <li>키 : 00</li>
        <li>무게 : 00</li>
        <li>타입 : 00</li>
        <li>특성 : 00</li>
      </ul>
      <div>
        <p>기술</p>
        <ul>
          <li>기술들</li>
          <li>기술들</li>
          <li>기술들</li>
        </ul>
      </div>
      <button className="bg-red-300 rounded-xl p-3">뒤로가기</button>
    </div>
  );
};

export default PokemonDetail;
