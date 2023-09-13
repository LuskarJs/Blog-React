import "./WebStorie.css";
import React, {useRef, useState, useEffect} from "react";
import ShowStorie from "./stories";

const WebStories = () => {
    const storiesRef = useRef(null);
    const [currentStorie, setCurrentStorie] = useState(0);
    const Stories = document.querySelectorAll(".storie .bar");

    useEffect(() => {
        const interval = setInterval(() => {
            const ProxIndex = (currentStorie + 1 ) % Stories.length;
            scrollToStorie(ProxIndex)
        }, 6200);

        return () => {
            clearInterval(interval);
        };
    }, );

    function scrollToStorie(storieIndex) {
      const storiesD = storiesRef.current;
      const scrollOffset = storiesD.offsetWidth / 1.3;
      const scrollTo = storieIndex * scrollOffset;  
        
        const list = storiesD.nextElementSibling;
        const Stories = list.querySelectorAll(".storie .bar");
        
      storiesD.scrollTo({left: scrollTo});

      Stories.forEach((item,index) => {
            if(index === storieIndex) {
                item.classList.add('active');
            }else {
                item.classList.remove('active');
            }
      });

      setCurrentStorie(storieIndex);
    }

    return (
        <section className="Content-Stories" >
            <div className="title-stories">
                <h2>Web Stories</h2>
            </div>
            <ul className="Stories" ref={storiesRef} >
                <ShowStorie />
            </ul>
            <ul className="NavBar-time">
                <li className="storie active" onClick={() => scrollToStorie(0)}>
                    <div className="bar"></div>
                </li>
                <li className="storie" onClick={() => scrollToStorie(1)}>
                    <div className="bar"></div>
                </li>
                <li className="storie" onClick={() => scrollToStorie(2)}>
                    <div className="bar"></div>
                </li>
                <li className="storie" onClick={() => scrollToStorie(3)}>
                    <div className="bar"></div>
                </li>
                <li className="storie" onClick={() => scrollToStorie(4)}>
                    <div className="bar"></div>
                </li>  
            </ul>
        </section>
    )
}

export default WebStories;