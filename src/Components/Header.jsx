import { Link} from "react-scroll";

export default function Header({HeroBackGroundStyle,
	headerLogo,
	FooterDog,
	Telegram,
	X,
	arrow,
	BurgerMenu,
	MobileArrow,
	Dropdown,
	MobileX,
	MobileTelegram,
	toggle,
	toggleChange,
	handleAboutLinkClick,
	navRadius,
	navToggleWidth,
	togglePadding
}) {
		
	
	
return (
<>
	<header className="relative h-screen">
		<div className={`relative flex h-full flex-col items-center ${togglePadding} sm:pt-0`} style={HeroBackGroundStyle}>

		<nav id="nav" className={`z-10 h-16 w-4/5 bg-teal-500 flex justify-around border-rd mt-2 lg:fixed lg:text-center ${navToggleWidth}`}  style={{borderRadius: navRadius}}>
		{/* Logo Section */}
			<div id="nav-logo" className="relative w-1/6 h-2/3 my-auto ml-4 flex justify-around">
				<img src={FooterDog} alt="FooterDog" className="" />
				<h2 className="logoTextColor text-2xl pt-2 font-bold ">Gui Inu</h2>
			</div>
			
			{/* Navigation Links */}
			<div id="nav-links" className="sm:flex items-center m-auto font-normal text-xl justify-around w-2/5">
			<Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={handleAboutLinkClick}>
				<ul className="inline-block hover:font-medium">About</ul>
			</Link>
				<ul className="inline-block flex hover:font-medium"><a href="https://www.aptosmonkeys.club/" target="_blank" rel="noopener noreferrer">Aptos Monkeys</a><img src={arrow} alt="arrow" /></ul>
				<ul className="inline-block flex hover:font-medium"><a href="https://echo.aptosmonkeys.club/" target="_blank" rel="noopener noreferrer">Echo </a><img src={arrow} alt="arrow" /></ul>
			</div>

			{/* Mobile Menu Button */}
			<div id="socials" className="w-20 h-4/12 flex my-auto mr-4 justify-between">
				<a href="https://x.com/redactedaptos?t=jKZmeB_manoQcMDtAO-8Hg&s=09" target="_blank" rel="noopener noreferrer"><img src={X} alt="x logo" /></a>
				
				<a href="https://t.me/redactedaptos" target="_blank" rel="noopener noreferrer"><img src={Telegram} alt="telegram logo" /></a>
			</div>

			<div id="menu" className='w-1/6 h-2/3 w-full my-auto ml-4'>
				<img src={BurgerMenu} alt="BurgerMenu" className='cursor-pointer'  onClick={toggleChange}/>
			</div>
				
		</nav>
	
		<div id="overlay" style={{display: toggle }}>
			
			<a href="#" className="inline-block flex justify-between hover:font-semibold" rel="noopener noreferrer"><p className='w-3/6 pl-4 pt-4'>About</p></a>


			<a href="https://www.aptosmonkeys.club/" className="inline-block flex justify-between  hover:font-semibold" target="_blank" rel="noopener noreferrer"><p className=' w-3/6 pl-4'>Aptos Monkeys</p><img src={MobileArrow} alt="X"className='pr-4' /></a>

			<a href="https://echo.aptosmonkeys.club/9" className="inline-block flex justify-between  hover:font-semibold" target="_blank" rel="noopener noreferrer"><p className=' w-3/6 pl-4'>Echo</p><img src={MobileArrow} alt="X"className='pr-4' /></a>

			<a href="#" className="inline-block flex justify-between hover:font-semibold" rel="noopener noreferrer"><p className=' w-3/6 pl-4'>Buy</p><img src={Dropdown} alt="X"className='pr-4' /></a>
 
			<a href="https://x.com/redactedaptos?t=jKZmeB_manoQcMDtAO-8Hg&s=09" className="inline-block flex justify-between hover:font-semibold" target="_blank" rel="noopener noreferrer"><p className=' w-3/6 pl-4'>X</p><img src={MobileX} alt="X"className='pr-4' /></a>

			<a href="https://t.me/redactedaptos" className="inline-block flex justify-between hover:font-semibold" rel="noopener noreferrer"><p className=' w-3/6 pl-4'>Telegram</p><img src={MobileTelegram} alt="X"className='pr-4'/></a>

			
		</div>

		<div className="w-4/5 flex flex-col items-center my-auto sm:my-0">
			<div className="w-4/5 sm:w-2/6 mt-8 sm:mt-24">
				<img src={headerLogo} alt="headerLogo" />
			</div>

			<div className="w-full sm:w-4/5 h-60 mt-3 text-center" >
				<h1 className="font-black text-4xl h2-color" >WHAT IS DEAD CANNOT DIE</h1>
				<p className="header-p font-normal mt-4	text-2xl p-color">Welcome to the realm of Gui Inu, Where Legends <br />transcend and echo in eternity</p>
				<button className="button mt-4 font-semibold"><a href="https://t.me/redactedaptos" target="_blank" rel="noopener noreferrer">Join Us</a></button>
			</div>
			
		</div> 

		</div>
	</header>
 
</>
  )
}


Header.propTypes = false;