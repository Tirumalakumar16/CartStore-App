import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar.jsx";
import store from "./store/store.jsx";


import {Provider} from 'react-redux'

function App() {
 

  return (
    
      <div className="App">
     <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  
  )
}

export default App
