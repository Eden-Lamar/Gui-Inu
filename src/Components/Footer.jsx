
export default function Footer({FooterDog}) {
  return (
	<>
	<footer className="h-40 bg-neutral-950 flex justify-center items-center">
        <div className="container flex flex-col items-center justify-center p-4">
          <div className="flex items-center mb-4">
            <img src={FooterDog} alt="Footer Logo" className="h-12 w-12" />
            <h2 className="ml-3 text-3xl font-bold text-white">Gui Inu</h2>
          </div>
          <p className="text-xs text-center text-white">&copy; The Aptos Monkey Team</p>
        </div>
	</footer>

	
	</>
  )
}

Footer.propTypes= false