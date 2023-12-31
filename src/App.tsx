import NavBar from "./components/NavBar"
import MainInfo from "./components/MainInfo"
import CoffeeList from "./components/CoffeeList"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { SelectedPage } from "./types"
import MapSection from "./components/MapSection"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.AboutUs);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setSelectedPage(SelectedPage.AboutUs);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex-col">
        <NavBar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <MainInfo setSelectedPage={setSelectedPage} />
        <CoffeeList setSelectedPage={setSelectedPage} />
        <MapSection />
        <Contact setSelectedPage={setSelectedPage} /> 
      </div>
      <Footer />

      <ToastContainer />
    </div>
  )
}

export default App
