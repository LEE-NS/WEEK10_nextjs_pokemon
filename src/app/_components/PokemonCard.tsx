"use client";

const PokemonCard = ({ pokemon }) => {
  return (
    <li className="border-2 border-gray-400 p-3 rounded-xl flex flex-col justify-center gap-1 transition-colors hover:bg-red-100 cursor-pointer">
      <img
        className="w-36 h-36"
        src={pokemon.sprites.front_default}
        alt={pokemon.korean_name}
      />
      <p>
        No.<span>{pokemon.id}</span>
      </p>
      <h3 className="font-bold text-lg">{pokemon.korean_name}</h3>
    </li>
  );
};

export default PokemonCard;
