import React from "react";
import './switch.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState,useEffect } from "react";

const Switcher = () => {
    const [OnclickC,SetOnclick] = useState(true);

    useEffect(() => {
        const root = document.getElementById("App");
        const label = document.querySelector("form label");
        
        if (OnclickC) {
            root.classList.remove("Dark");
            root.classList.add("Light");
            label.classList.remove("color");
        } else {
            root.classList.add("Dark");
            root.classList.remove("Light");
            label.classList.add("color");
        }
    }, [OnclickC]);

        return (
            <div className="switcher-container">
                <div className="switcher">
                    <div className='dark' onClick={() => SetOnclick(false)}>
                        <div className={`bar-left ${OnclickC ? "active" : ''}`}></div>
                        <DarkModeIcon />
                    </div>
                    <div className='light' onClick={() => SetOnclick(true)}>
                        <div className={`bar-right ${OnclickC ? "" : "active"}`}></div>
                        <LightModeIcon/>  
                    </div>
                </div>
            </div>
        )
}



export default Switcher;