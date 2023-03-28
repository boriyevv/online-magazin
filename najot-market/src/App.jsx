import { Routes, Route } from "react-router-dom";
import Redirect from "./components/Redirect.jsx";
import Cart from "./pages/Cart.jsx";
// import Details from "./pages/Details.jsx";
import Home from './Pages/Home.jsx';
import Login from "./pages/Login.jsx";

function App() {
  
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="*" element={<Redirect to="/" />} />
      </Routes>
      </div>                                                                                                          
  )

}

export default App
