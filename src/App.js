import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Page_2 from './components/Page_2';
import { BrowserRouter,Routes,
  Route } from "react-router-dom";
import Nav from './components/Nav';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Nav/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="page_2" element={<Page_2/>} />
      
    </Routes>
      
      
    </div>

   
    </BrowserRouter>
    </>
  );
}

export default App;
