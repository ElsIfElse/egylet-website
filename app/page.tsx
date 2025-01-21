import CharacterList from "./utils/CharacterList";
import Hero from "./components/Hero";

export const revalidate = 0;
export default function Home() {

  return (
    <div className="flex flex-col items-center py-12 max-w-[1920px] w-full  h-full overflow-hidden">
      <Hero text="Egylet Karakter Wiki" />
      <div className="w-full h-full px-12"> 
        <div className="w-full grid grid-cols-3 grid-auto-rows-auto gap-y-12 gap-x-6">
          <CharacterList/>
        </div> 
      </div>
    </div>
  ); 
} 