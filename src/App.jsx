import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 200,
  duration: 1000,
  delay: 100,
});

function App() {
 

  return (
    <>
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
      
    </>
  )
}

export default App
