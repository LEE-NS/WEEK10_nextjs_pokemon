"use client";

import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";

type PropsFromPokemonList = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PropsFromPokemonList) => {
  return (
    <li className="border-2 p-5 rounded-xl flex flex-col justify-center gap-1 transition-colors hover:bg-red-100 cursor-pointer">
      <Link href={`/detail/${pokemon.id}`}>
        <Image
          width={150}
          height={150}
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
        />
        <p>
          No.<span>{pokemon.id}</span>
        </p>
        <h3 className="font-bold text-lg">{pokemon.korean_name}</h3>
      </Link>
    </li>
  );
};

export default PokemonCard;
