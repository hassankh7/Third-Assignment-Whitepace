// Allah Ke name Se Shuru

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Work from "./components/work";
import Extension from "./components/extension";
import Sponsors from "./components/our-sponsors";
import Footer from "./components/footer";


export default function Home() {
  return(
    <div>

    <Navbar/>
    <Hero/>
    <Work/>
    <Extension/>
    <Sponsors/>
    <Footer/>
    </div>
 );
}