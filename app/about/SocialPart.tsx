'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok,faFacebook,faInstagram,faYoutube,faTwitch } from '@fortawesome/free-brands-svg-icons'

const SocialPart = () => {

    return ( 
            <div className='flex flex-row justify-center items-center gap-16 w-full h-[3px]'>
                <FontAwesomeIcon onClick={()=>window.open('https://www.tiktok.com/@egyletofficial')} className='social-logo' color='black' icon={faTiktok} />
                <FontAwesomeIcon onClick={()=>window.open('https://www.facebook.com/search/top?q=az%20egylet')} className='social-logo' color='black' icon={faFacebook} />
                <FontAwesomeIcon onClick={()=>window.open('https://www.instagram.com/egyletstream/')} className='social-logo' color='black' icon={faInstagram} />
                <FontAwesomeIcon onClick={()=>window.open('https://www.youtube.com/@egyletofficial')} className='social-logo' color='black' icon={faYoutube} />
                <FontAwesomeIcon onClick={()=>window.open('https://m.twitch.tv/egylet/home')} className='social-logo' color='black' icon={faTwitch} />     
            </div>
     );
}
 
export default SocialPart;