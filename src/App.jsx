 // import { useState } from 'react'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from "react-scroll";
import HeroBackgroundImg from "./assets/HeroBackground.png";
import headerLogo from "./assets/HeaderLogo.png";
import Background from "./assets/Background.png";
import Coin from "./assets/Coin.png";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import Dog from "./assets/Dog.svg";
import FooterDog from "./assets/FooterIcon.svg";
import Telegram from "./assets/Telegram.svg";
import X from "./assets/X.svg";
import arrow from "./assets/arrow.svg";
import BurgerMenu from "./assets/BurgerManu.svg";
import MobileArrow from "./assets/MobileArrow.svg";
import Dropdown from "./assets/Dropdown.svg";
import MobileX from "./assets/MobileX.svg";
import MobileTelegram from "./assets/MobileTelegram.svg";
// import ForwardArrow from "./assets/ForwardArrow.svg";

import Header from "./Components/Header";
import AboutSection  from "./Components/AboutSection";
import ExploreSection from './Components/ExploreSection'
import Footer from './Components/Footer';
import './App.css'

function App() {
  const [toggle, setToggle] = useState("none")
  const [navRadius, setNavRadius] = useState("3rem")
  const [navToggleWidth, setNavToggleWidth] = useState("")
  const [togglePadding, setTogglePadding] = useState("pt2")

  const toggleChange = () => {
    if (toggle==="none") {
      setNavRadius("0")
      setToggle("block")
      setNavToggleWidth("nav-toggle-width")
      setTogglePadding("")
    }else{
      
      setNavRadius("3rem")
      setToggle("none")
      setNavToggleWidth("")
      setTogglePadding("pt-2")

    }
    
    // console.log(toggle)
    // console.log(navRadius)
    // console.log(navToggleWidth)
    // console.log(togglePadding)
  }

  const handleAboutLinkClick = () => {
    scroll.scrollTo("about", {
      duration: 500,
      smooth: true,
    });
  };
  

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const HeroBackGroundStyle = {
    backgroundImage: `url(${HeroBackgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  return (
    <>
      <Header HeroBackGroundStyle={HeroBackGroundStyle} headerLogo={headerLogo} FooterDog={FooterDog} Telegram={Telegram} X={X} arrow={arrow} BurgerMenu={BurgerMenu} MobileArrow={MobileArrow} Dropdown={Dropdown} MobileX={MobileX} MobileTelegram={MobileTelegram} toggle={toggle} toggleChange={toggleChange} handleAboutLinkClick={handleAboutLinkClick} navRadius={navRadius} navToggleWidth={navToggleWidth} togglePadding={togglePadding}/>

      <AboutSection Coin={Coin} icon1={icon1} icon2={icon2} backgroundStyle={backgroundStyle}/>

      <ExploreSection Dog={Dog} isMobile={isMobile}/>

      <Footer FooterDog={FooterDog}/>
  


   
    </>
  )
}

export default App