import React from 'react';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';

import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Experience from './sections/experience/Experience';





function App() {
return (
<main>
<Navbar/>
<Header />
<About/>
<Experience/>
<Portfolio/>
<Contact/>
<FloatingNav/>
<Footer/>

</main>
)

}

export default App;
