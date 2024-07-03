"use client";

import PokemonCard from "./PokemonCard";
import { useQuery } from "@tanstack/react-query";
import LoadingBox from "@/components/LoadingBox";
import ErrorBox from "@/components/ErrorBox";
import { Pokemon } from "@/types/pokemon";

const PokemonList = () => {
  const {
    data: pokemons,
    isPending,
    isError,
  } = useQuery<Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const response = await fetch("api/pokemons");
      const pokemons = await response.json();
      return pokemons;
    },
  });

  if (isPending) {
    return <LoadingBox />;
  }

  if (isError) {
    return <ErrorBox />;
  }

  return (
    <ul className="flex justify-center items-center gap-3 flex-wrap">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
