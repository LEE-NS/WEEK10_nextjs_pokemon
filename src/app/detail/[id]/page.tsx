import { getPokemonData } from "@/app/_api/pokemon";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData: Pokemon = await getPokemonData(params.id);

  return (
    <div className="w-screen flex justify-center items-center mb-10">
      <div className="w-1/2 border-2 flex flex-col items-center gap-5 p-5 rounded-xl">
        <div className="flex flex-col justify-center items-center pt-2 pb-2 gap-1 bg-red-300 w-full rounded-xl">
          <p>No.{pokemonData.id}</p>
          <h1 className="text-lg font-bold">{pokemonData.korean_name}</h1>
        </div>
        <Image
          priority
          width={200}
          height={200}
          src={pokemonData.sprites.front_default}
          alt={pokemonData.korean_name}
        />
        <ul className="flex flex-col justify-center gap-3">
          <li>
            <span className="font-bold text-lg">키</span> :{" "}
            {pokemonData.height / 10}m
          </li>
          <li>
            <span className="font-bold text-lg">무게</span> :{" "}
            {pokemonData.weight / 10}kg
          </li>
          <li>
            <span className="font-bold text-lg">타입</span> :{" "}
            {pokemonData.types?.map((each) => (
              <span
                className="p-1 border rounded-lg text-center m-1"
                key={each.type.name}
              >
                {each.type.korean_name}
              </span>
            ))}
          </li>
          <li>
            <span className="font-bold text-lg">특성</span> :{" "}
            {pokemonData.abilities?.map((each) => (
              <span
                className="p-1 border rounded-lg text-center m-1"
                key={each.ability.name}
              >
                {each.ability.korean_name}
              </span>
            ))}
          </li>
        </ul>
        <div>
          <p className="font-bold text-lg text-center">기술</p>
          <ul className="flex justify-center items-center flex-wrap">
            {pokemonData.moves?.map((each) => (
              <li
                className="p-1 border rounded-lg text-center m-1"
                key={each.move.name}
              >
                {each.move.korean_name}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="bg-red-300 rounded-xl p-3">
          뒤로가기
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
