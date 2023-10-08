import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

AOS.init({
  offset: 200,
  duration: 1200,
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
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
