export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-11/12 ml-auto mr-auto mt-0 mb-0">
      <h1 className="text-center mt-3 mb-3 text-3xl font-extrabold">Pokemon</h1>
      <ul className="flex justify-center items-center gap-3 flex-wrap">
        <li className="border border-slate-400 p-3 rounded-xl flex flex-col justify-center gap-1">
          <div className="w-36 h-36 bg-slate-400">image</div>
          <p>
            No.<span>number</span>
          </p>
          <h3 className="font-bold text-lg">pokemon name</h3>
        </li>
      </ul>
    </div>
  );
}
