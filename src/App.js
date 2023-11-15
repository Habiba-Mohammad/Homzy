import './App.css';
import Componies from './Components/Componies/Componies';
import Header from './Components/Header/Header';
import Value from './Components/Value/Value';
import Hero from './Components/Hero/Hero';
import Residencies from './Components/Residencies/Residencies';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
   <div>
   <Header/>
   <Hero/>
   <Componies/>
   <Residencies/>
   <Value/>
   <Contact/>
   <GetStarted/>
   <Footer/>
   </div>
   </>
  );
}

export default App;
