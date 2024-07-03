import PokemonList from "./_components/PokemonList";
import { GET } from "./api/pokemons/route";

const Home = () => {
  /* src/app/pokemons/route.ts */

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-11/12 ml-auto mr-auto mt-0 mb-0">
      <PokemonList />
    </div>
  );
};

export default Home;
