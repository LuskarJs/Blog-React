import React from "react";
import { useNavigate } from 'react-router-dom';
import { removePontuacao } from "../FeedSlider/FeedArticles";
import Stories from "./DataStory";

export const HandleShowStorie = ({ storie, navigate }) => {
  const titleSemPontuacao = removePontuacao(storie.title);
  const FormatTitle = titleSemPontuacao.replace(/\s+/g , '-');
  
  const url = `/storie/${FormatTitle}`;
  navigate(url, { state: { story: storie } });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
};

const ShowStorie = () => {

  const navigate = useNavigate();
  const FirstFStories = Stories.slice(0,5);
  
    return (
        <>
            {FirstFStories.map((story, index) => (
                <li key={index}
                 className="Card-Storie"
                 onClick={() => HandleShowStorie({storie: story, navigate})}
                 >
                <figure>
                  <img src={story.image} alt="titulo"  />
                </figure>
                <div className="info-storie">
                  <p>{story.title}</p>
                </div>
              </li>
            ))}
        </>   
    )
}

export default ShowStorie;