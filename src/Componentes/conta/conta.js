import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation } from 'react-router-dom';
import "./conta.css";


const Conta = () => {
    const location = useLocation();

        return (
            <div className="conta-container">
                <Link to="/Login">
                    <button className={location.pathname === "/Login" ? "active" : ""}>
                        <PersonIcon />
                        <p>Conta</p>
                    </button>
                </Link>
            </div>
        )
}

export default Conta;