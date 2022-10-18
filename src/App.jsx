import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Axios from 'axios'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
