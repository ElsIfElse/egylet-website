
import CharacterList from "./utils/CharacterList";
import Hero from "./components/Hero";
import fetchCharacterList from "./utils/GetCharacterList";
import { Character } from "./utils/interfaces";

export default async function Home() {

  const characters:Character[] | string = await fetchCharacterList();

  return ( 
    <div className="flex flex-col items-center py-20 max-w-[1920px] w-full  h-full overflow-hidden">
      <Hero text="Egylet Karakter Wiki" />
      <div className="w-full h-full px-12"> 
        <div className="w-full grid grid-cols-3 grid-auto-rows-auto gap-y-12 gap-x-6">
          {<CharacterList characters={characters}/>}
        </div> 
      </div>
    </div>
  ); 
} 