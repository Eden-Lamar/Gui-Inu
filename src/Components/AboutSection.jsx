
export default function AboutSection ({Coin, icon1, icon2, backgroundStyle}) {
  return (
	<>
<section id='about' className="relative w-full h-screen bg-gray-950 ">
    <div className="h-3/4 w-full" style={backgroundStyle}>
  <div className="container mx-auto h-full flex justify-around">
    {/* Hidden on mobile view */}
    <div className="hidden sm:block w-2/5 my-auto sm text-center sm:text-left">
      <div>
        <h2 className="font-black text-4xl h2-color">Unleash the Eternal <br /> Vibes of Cryptocurrency! <br /> ✨</h2>
        <p className="paragraph-color font-normal mt-2 text-xl p-color">In the mystical lands where digital and ethereal converge, Gui Inu emerges as more than a coin - it&apos;s an immortal saga. Born from the ashes of forgotten currencies, it whispers the ancient prophecy: <span className="h2-color">&quot;What is dead cannot die.&quot;</span>
        </p>
      </div>
    </div>

    {/* Hidden on mobile view */}
    <div className="hidden sm:block rounded-full relative w-1/3 flex justify-center my-auto spin">
      <img src={Coin} alt="coin" className="drop-shadow-2xl"/>
    </div>

    {/* Visible only on mobile view */}
    <div className="sm:hidden w-full text-center my-auto">
      <div className="px-6">
        <h2 className="font-black text-4xl text-left h2-color">Unleash the Eternal <br /> Vibes of Cryptocurrency! <br /> ✨</h2>
        <p className="font-normal paragraph-color mt-2 text-left text-xl">In the mystical lands where digital and ethereal converge, Gui Inu emerges as more than a coin - it&apos;s an immortal saga. Born from the ashes of forgotten currencies, it whispers the ancient prophecy: <span className="h2-color">&quot;What is dead cannot die.&quot;</span>
        </p>
		</div>
		</div>
	</div>
	</div>


  <div className=" min-h-fit lg:h-1/4 w-full bg-slate-950 py-2">
	<div className="container mx-auto h-full flex justify-around">
		<div className="first p-2 sm:p-1 min-h-fit w-1/2 lg:w-1/4 text-left sm:text-left my-auto sm:my-4">
		<h2 className="h2-color font-semibold text-2xl"> JOIN THE RESURGENCE</h2>
		<p className="paragraph-color mt-2 font-normal text-base">We rise above the digital realm, breaking the chains of conventional crypto. </p>
		<button className="btn my-4 font-thin"><p><a href="https://t.me/redactedaptos" target="_blank" rel="noopener noreferrer">Join Us</a></p></button>
		</div>

    <div className="card w-1/2 flex flex-col lg:w-1/5 sm:py-2 flex lg:flex-row justify-around items-center">
      <div className="card1 h-2/5 sm:h-full lg:w-5/12 sm:w-full w-4/5 rounded-md bg-zinc-800 border border-slate-500 lg:mb-0 p-2 sm:p-2 text-left sm:text-left">
        <img src={icon1} alt="icon1" className="mx-auto lg:mx-0" />
        <div className='mt-2 lg:my-8'>
          <p className="p-color font-thin text-xs lg:text-xs">Powered by</p>
          <p className="p-color font-medium text-xs lg:text-xs sm:mt-1">Aptos</p>
        </div>
      </div>

      <div className="card2 h-2/5 sm:h-full lg:w-5/12 sm:w-full w-4/5 rounded-md bg-zinc-800 border border-slate-500 p-2 sm:p-2 text-left sm:text-left ">
        <img src={icon2} alt="icon2" className="mx-auto lg:mx-0" />
			<div className='mt-2 lg:my-8 '>
				<p className="p-color font-thin text-xs lg:text-xs">Created by</p>
				<p className="p-color font-medium text-xs lg:text-xs sm:mt-1">AptosMonkeys</p>
			</div>
		</div>
		</div>
		</div>
	</div>






</section>
	
	</>
  )
}

AboutSection.propTypes = false;