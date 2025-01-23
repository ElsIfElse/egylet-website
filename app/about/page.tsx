



import Hero from "../components/Hero";
import SocialPart from "./SocialPart";


const AboutPage = () => {
    return ( 
        <div 
        className="flex flex-col items-center py-20 max-w-[1920px] w-full h-full overflow-hidden px-12">
            <Hero text="Rólunk" />
            <div 
            className=' w-[720px] h-auto py-12
            
            '
            style={{
                backgroundImage:"url(../../cardBack2.jpg)",
                backgroundRepeat: "no-repeat",
            }}

            >
                <div className=' w-full h-auto pt-12 pb-24 px-12'>
                    <h3>Üdv, mi egy TTRPG, asztali szerepjáték csapat vagyunk és ezt is streameljük rendszeresen, emellett pedig számos más tartalmat, videójáték, társasok, stb.</h3>
                </div>
                <SocialPart />
            </div>

        </div>
     );
}
 
export default AboutPage;