import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";
import Principal from "./componets/Principal/Principal";
import Footer from "./componets/Footer/Footer";


const App = () => {

  return(
    <>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={ <Principal />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
    </>
  )

}

export default App
