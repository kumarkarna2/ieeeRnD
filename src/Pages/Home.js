import React from 'react';
import NaviBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import FAQ from './Components/FAQs/FAQ';
import Events from './Components/Events/Events';


export default function Home() {
  return (
    <div>
        <NaviBar/>
        <Landing/>
        <About/>
        <FAQ/>
        <Events/>
    </div>
  )
}
