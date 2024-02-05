import "./App.css";
import Casion from "./Components/Casion";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Jackpotsec from "./Components/Jackpotsec";
import Leermas from "./Components/Leermas";
import Mission from "./Components/Mission";
import Mynav from "./Components/Mynav";
import Section3 from "./Components/Section3";
import Solo from "./Components/Solo";
import Faq from "./Components/Faq";
import Ellos from "./Components/Ellos";
import Tripleseven from "./Components/Tripleseven";
import Slivercard from "./Components/Slivercard";
import Luxarycard from "./Components/Luxarycard";
import Plantinumcard from "./Components/Plantinumcard";
import Vivomap from "./Components/Vivomap";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
import BackToTop from './assests/images/BackToTop.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
    const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
          <>
        <div className="App overflow-x-clip">
          <div className=" bg-[#00141B]">
            <div className="bg-[url(./assests/images/herobg.webp)] bg-cover bg-fixed bg-center bg-no-repeat">
              <Mynav />
              <Header />
            </div>
            <Mission />
            <Section3 />
            <div className="bg-[url(./assests/images/jackpot.webp)]">
              <Jackpotsec />
              <div class="pb-[10 0px]">
                <Solo />
              </div>
              <Vivomap />
            </div>
                <Casion />
                 <Tripleseven />
            <Slivercard />
            <Luxarycard />
            <Plantinumcard />
            <Ellos />
            <Faq />
            <Leermas />
            <Footer />
          </div>
            </div>
          <div onClick={() => top()} className={backToTop ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center backTopBtn rounded-[50px] bg-[#04151b] cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
            </>
        )}
          </>
  );
}

export default App;
