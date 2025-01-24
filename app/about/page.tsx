



import Hero from "../components/Hero";
import SocialPart from "./SocialPart";


const AboutPage = () => {
    return ( 
        <div 
        className="
        flex flex-col items-center justify-center
        py-20 max-w-[1920px] w-[100%] h-full overflow-hidden 
        md:px-20 px-2">
            <Hero text="Rólunk" />
            <div  
            className='w-full max-w-[1000px] h-auto 
            pt-10 
            xl:pb-20 pb-12 flex justify-center items-center flex-col
            md:px-12'
            style={{
                backgroundImage:"url(../../cardBack2.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover"
            }}

            >
                <div className=' w-full h-auto flex flex-col justify-center items-center
                md:pt-8 pt-6 
                md:pb-24 pb-24 px-10'>
                    <h3 className="xl:text-base">Üdv, mi egy TTRPG, asztali szerepjáték csapat vagyunk és ezt is streameljük rendszeresen, emellett pedig számos más tartalmat, videójáték, társasok, stb.</h3>
                </div>
                <SocialPart />
            </div>

        </div>
     );
}
 
export default AboutPage;