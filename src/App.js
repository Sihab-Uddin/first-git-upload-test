import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './Components/Home/Home';
import Errors from "./Components/Errors/Error404"
import Option2 from './Components/Option2/Option2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/Option2" element={<Option2 />}/>
      <Route path="*" element={<Errors />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
