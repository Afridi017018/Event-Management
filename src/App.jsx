import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"

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
