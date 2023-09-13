import Logo from "../assets/logo.png";
import './footer.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link,  useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <footer className={`
        ${location.pathname === "/Login" || 
        location.pathname === "/Criar-Conta" ||
        location.pathname === "/Recuperar-Conta"  ? "hidden" : "show"} `}>
            <div className="Container-footer">
                <div className="logo">
                    <figure>
                        <img src={Logo} alt="logo" />
                    </figure>
                </div>
                <nav className="nav-footer">
                    <ul>                      
                        <li>
                            <h4>Sobre Nós</h4>
                            <ul>
                                <li>
                                    <p>Politicas Do Site</p>
                                </li>
                                <li>
                                    <p>Privacidade de Cookies </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4>Contatos</h4>
                            <ul>
                                <li>
                                    <p>exemplo@gmail.com</p>
                                </li>
                                <li>
                                    <p><span>(21)</span> 1234-56789</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/Todos-Stories">Stories</Link>
                        </li>
                        <li>
                            
                        </li>
                         <li className="Btn-top">
                            <button onClick={scrollTop}>
                              <KeyboardArrowUpIcon sx={{color: 'snow'}} />  
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <p>Copyright 2023 - 
                <Link to="/">Luskar.js</Link>
            </p>
        </footer>
    )
}

export default Footer;