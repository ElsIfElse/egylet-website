import CharacterList from "./utils/CharacterList";
import Hero from "./components/Hero";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {

  const router = useRouter();

  useEffect(()=>{
    const refresh = async () => {
      await router.prefetch("/");
    }
    refresh();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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