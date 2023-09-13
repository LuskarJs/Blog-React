import React, { useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Btn = () => {
    const [TextMenu, setTexMenu] = useState("Ver");

  const ShowContent = () => {

    const content = document.querySelector(".Content");
    const btn = document.querySelector(".ShowColumn");

    if(!content.classList.contains("show")){
        btn.classList.add("Closer");
        content.classList.add('show');
        setTexMenu("Fechar");
    }else {
        content.classList.remove('show');
        btn.classList.remove("Closer");
        setTexMenu("ver");
    }
  }

    return (
        <div className="ShowColumn">
          <button id="btn" onClick={ShowContent}>
            <span> < ArrowBackIosIcon sx={{color: "snow"}} /> </span>
            <p> {TextMenu} </p>
          </button>
        </div>
    )
}

export default Btn;