import Navbar from './components/Navbar'
import text_chaardhaam from './assets/text-chaardhaam.png'
import maa_vaishno_devi_dham from './assets/maa_vashno_devi_dham.jpg'
import shani_dham from './assets/shani_dham.jpg'
import radha_krishna_dham from './assets/radhe_krishna_dham.jpg'
import shiv_dham from './assets/shiv_dham.jpg'
import hero_bg from './assets/hero-bg.gif'

function App() {

  return (
    <div id='root'>
        <Navbar />
        <div id="detail">
            <div className="bg-center bg-no-repeat bg-cover flex justify-center" style={{ backgroundImage:
                `url(${hero_bg})` }}>
                <div className="wrapper flex flex-col gap-10 sm:gap-16 justify-center py-10 sm:py-20 max-w-[80rem]">
                    <div className="flex justify-center items-center sm:-mt-10">
                        <img src={text_chaardhaam} alt="chardham" className="w-[50%] sm:w-[25%] xl:w-[15%]" />
                    </div>
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-10">
                        <a className="overflow-hidden" href="https://chaardham.in/maa-vaishno-devi-dham"><img
                                src={maa_vaishno_devi_dham} alt="chardham"
                                className="img-responsive transition-transform duration-300 hover:scale-105 !shadow-2xl" /></a><a
                            className="overflow-hidden" href="https://chaardham.in/shani-dham"><img src={shani_dham}
                                alt="chardham"
                                className="img-responsive transition-transform duration-300 hover:scale-105" /></a><a
                            className="overflow-hidden" href="https://chaardham.in/radha-krishna-dham"><img
                                src={radha_krishna_dham} alt="chardham"
                                className="img-responsive transition-transform duration-300 hover:scale-105" /></a><a
                            className="overflow-hidden" href="https://chaardham.in/shiv-dham"><img src={shiv_dham}
                                alt="chardham"
                                className="img-responsive transition-transform duration-300 hover:scale-105" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
