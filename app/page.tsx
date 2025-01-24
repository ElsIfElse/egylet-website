
import CharacterList from "./utils/CharacterList";
import Hero from "./components/Hero";
import fetchCharacterList from "./utils/GetCharacterList";
import { Character } from "./utils/interfaces";

export default async function Home() {

  const characters:Character[] | string = await fetchCharacterList();

  return ( 
    <div className="flex flex-col lg:py-20 items-center max-w-[1920px] w-full h-full overflow-hidden

    py-10 lg:p-10 2xl:py-20
    ">
      <Hero text="Karakter Wiki" />
      <div className="
      px-2
      lg:w-full 
      lg:h-full 
      lg:px-6"
      > 
        <div className="
        flex flex-col justify-center items-center 
        lg:flex-none lg:justify-normal
        lg:grid lg:grid-auto-rows-auto 
        
        gap-y-1 lg:gap-y-12  
        gap-x-1 lg:gap-x-6 
        w-full lg:w-full 
        lg:grid-cols-2 2xl:grid-cols-3
        ">
          {<CharacterList characters={characters}/>}
        </div> 
      </div>
    </div>
  ); 
} 

/* w-full grid grid-cols-3 grid-auto-rows-auto gap-y-12 gap-x-6*/