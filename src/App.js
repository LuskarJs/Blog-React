import "../src/Componentes/Tcolumn/contentColumn";
import Btn from "./Componentes/btn/btn";
import { useLocation } from 'react-router-dom';
import Footer from './Componentes/footer/footer';
import Dasheader from './Componentes/header/header';
import ContentC from "../src/Componentes/Tcolumn/contentColumn";
import { Outlet } from 'react-router-dom';
import './App.css';


function App() {

  const location = useLocation();

    return (
      <div className="App" id="App">
             
        <div className="bg-body"></div>
          <Dasheader />
        <div className='wrapper'>
          <Outlet />
          <ContentC />
        </div>
          <Footer />  
          <Btn />
      </div>
      )
  }

export default App;
  