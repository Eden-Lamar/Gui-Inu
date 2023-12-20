
export default function ExploreSection({Dog, isMobile}) {
  return (
	<>
	
	<section className="w-full h-screen bg-gray-950 flex justify-around items-center">
    <div className="container w-11/12 lg:w-11/12 h-4/5 sm:mt-8 my-auto backgroundColor rounded-lg flex justify-around items-center">
      <div className="w-full lg:w-2/5 h-4/5 my-auto p-4 ">
        <h2 className="text-black text-4xl font-bold">Embrace the Meme, Embrace Eternity</h2>
        <p className="text-black font-medium mt-4">Gui Inu isn&apos;t just a coin; it&apos;s a movement. A story etched in the blockchain, a spirit uncontainable by market trends. Join us, and be part of a legend that will echo through the annals of crypto history.</p>
        <div className="links mt-4">
          <ul className={isMobile ? 'flex flex-col items-left' : ''}>
            <li className="mb-2">
              <a href="https://x.com/redactedaptos?t=jKZmeB_manoQcMDtAO-8Hg&s=09" target="_blank" rel="noopener noreferrer" className="underline text-xl font-medium leading-10"><p>Explore the Legend</p></a>
            </li>
            <li className="mb-2">
              <a href="https://www.aptosmonkeys.club/" target="_blank" rel="noopener noreferrer" className="underline text-xl font-medium leading-10"><p>Join the Community</p></a>
            </li>
            <li>
              <a href="https://t.me/redactedaptos" target="_blank" rel="noopener noreferrer" className="underline text-xl font-medium leading-10"><p>Begin your Journey</p></a>
            </li>
          </ul>
        </div>
      </div>

    <div className="hidden lg:block relative w-2/5 h-4/5 my-auto flex justify-center">
      <img src={Dog} alt="Dog" className="max-w-full max-h-full" />
    </div>
  </div>
</section>
	
	</>
  )
}

ExploreSection.propTypes = false;