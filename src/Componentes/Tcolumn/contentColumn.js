import MoreContent from "../Tcolumn/MoreContent";
import "./MoreContent.css";
import "../feed/feed.css"
import NewsLetter from "../newsLetters/NewLetters";
import CripView from "../CripCoin/cript";
import React from "react";
import {motion} from "framer-motion";
import { useLocation } from "react-router-dom";

const ContentC = () => {
    const location = useLocation();

    return ( 
            <motion.div className={`Content 
            ${location.pathname === "/Login" || 
            location.pathname === "/Criar-Conta" ||
            location.pathname === "/Recuperar-Conta"  ? "hidden" : "show" }`}
            viewport={{ once: true,}}
                initial={{ transform: "translateX(100%"}}
                animate={{ transform: "translateX(0%", x: 100}}
                exit={{ transition : {duration: 1}}}
            >
                <MoreContent />
                <CripView />
                <NewsLetter />
            </motion.div>   
    )
}

export default ContentC;