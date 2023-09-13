import React from 'react';
import Switcher from '../switch/switch';
import Conta from "../conta/conta";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CategoryIcon from '@mui/icons-material/Category';
import './header.css';
import Logo from "../assets/logo.png";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


const Dasheader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

   const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

        return (
            <header className='header' >
                <div className='Nav-Bar'>
                        <div className='logo'>
                            <img src={Logo} alt="Logo"/>
                        </div>
                        <div className="icon">
                            <MenuIcon
                            sx={{ color: 'snow' }}
                            onClick={toggleMenu}
                            />
                            <CancelIcon 
                            sx={{color: 'snow'}}
                            onClick={toggleMenu}
                             />
                        </div>
                    </div>
                <nav className={` ${showMenu ? "show" : ''}`}>               
                   <ul>
                        <li className={location.pathname === "/" ? "active" : ""}>
                            <HomeIcon
                            sx={{ color: 'snow' }}
                            />
                            <Link to='/'>
                            Inicio
                            </Link>
                        </li>
                        <li className={location.pathname === "/Noticias" ? "active" : ""}>
                            <NewspaperIcon
                            sx={{ color: 'snow' }}
                            />
                            <Link to="/Noticias">
                            Notícias 
                            </Link>
                        </li>
                        <li className={location.pathname === "/Categorias" ? "active" : ""}>
                            <CategoryIcon
                            sx={{ color: 'snow' }}
                            />
                            <Link to='/Categorias'>
                            Categorias
                            </Link>
                        </li>
                    </ul>
                    <div className='op'>
                        <Conta/>
                        <Switcher/>  
                    </div>
                    
                </nav>
            </header>
        )
    }


export default Dasheader; 