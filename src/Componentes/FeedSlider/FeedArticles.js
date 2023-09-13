import React from 'react';
import { useNavigate } from 'react-router-dom';

 const removePontuacao = (text) => {
    return text.replace(/[^\w\s]|_/g, '');
  };

const HandleShowArticle = ({article, navigate}) => {
    const titleSemPontuacao = removePontuacao(article.title);   
    const FormatTitle = titleSemPontuacao.replace(/\s+/g , '-');

    const url = `/artigo/${FormatTitle}`;
    navigate(url, { state: { article } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    // O componente de função precisa retornar algum conteúdo JSX, mesmo que vazio
    return null;
  };

const FeedArticle = ({ Feed }) => {
    const navigate = useNavigate();
    
        return (
            Feed.map((articles, index) => (
                    <li className='card-slide' key={index} onClick={() => HandleShowArticle({ article: articles, navigate })}>
                        <div className="img">
                            < img src={articles.image} alt={articles.title} />
                        </div>
                        <div className="content">
                            <div className='Content-info'>
                                <div className='ifn-tlt'>
                                    <h2>{articles.title}</h2>
                                    <h3>{articles.category}</h3>
                                </div>
                                <div className='time'>
                                    <p>{articles.time}</p>
                                </div>
                            </div>
                            <div className='Description'>
                                <p>{articles.summary}</p>
                            </div>
                        </div>
                        
                    </li>
            ))
    )
}

export { FeedArticle, HandleShowArticle,  removePontuacao };