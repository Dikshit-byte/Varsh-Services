import React from 'react'
import { useEffect } from 'react'
import Aboutone from './Aboutone'
import Abouttwo from './Abouttwo'
import Aboutzero from './Aboutzero'
import Aboutfooter from './Aboutfooter'
import Aboutthree from './Aboutthree'
import Carasoul from './Carasoul'
import FloatingWhatsApp from 'react-floating-whatsapp'
import WhatsappImg from '../../images/managing director.jpg'
import { Heads } from '../OurHeads/Heads';
import AboutReal from './AboutReal'
const About = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, []);
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+918533873389"
        accountName="AGBiz Technologies"
        allowClickAway
        notification
        notificationDelay={60000}
        notificationSound
        avatar={WhatsappImg}
        className="whatsapp"
        statusMessage=""
        chatMessage="Welcome To AGBiz"
      />
      <div className='Aboutus'>
        <Aboutzero />
        <Aboutone />
        <Aboutthree />
        <div className="carousal">
          <Carasoul />
        </div>
        <Abouttwo />
        <AboutReal />
        <Heads />
      </div>
      <Aboutfooter />
    </>
  )
}

export default About;