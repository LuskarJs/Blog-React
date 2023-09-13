import "./SeeCategory.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {motion} from 'framer-motion';
import { HandleShowArticle } from "../FeedSlider/FeedArticles";

const SeeCategory = ({ article}) => {
  const navigate = useNavigate();

  return (
    <motion.li 
    initial={{ transform: "translateY(50%)"}}
    animate={{ transform: "translateY(0%)"}}
    exit={{ transition : {duration: 100}}} 
    onClick={() => HandleShowArticle({ article: article, navigate })}
    >
      <div className="Info-Card">
        <h2>{article.title}</h2>
      </div>
      <figure>
        <img src={article.image} alt={article.title} />
      </figure>
    </motion.li>
  );
};

const ShowCategory = ({category, categorias, articles}) => {
    const [SelectCategory, SetSelectCategory] = useState(category ? category.title : '');

    const handleSelectCategory = (e) => {
      const selectedCategory = categorias.find((categoria) => categoria.title === e.target.value);
      const categoryTitle = selectedCategory ? selectedCategory.title : '';
      SetSelectCategory(categoryTitle);
    };

    const filteredArticles = articles ? articles.filter(
        (article) => article.category === (SelectCategory ? SelectCategory : SelectCategory.title)
      ) : [];

    return (
        <section className="category">
            <div className="selectCategory">
            <select value={SelectCategory} onChange={handleSelectCategory}>
                <option value="">Selecione uma categoria</option>
                {categorias.map((categoria,index) => (
                    <option key={index} value={categoria.title} >
                      {categoria.title}
                    </option>
                ))}
            </select>
            <p>
              {SelectCategory ? SelectCategory : 'Nenhuma categoria selecionada'}
            </p>
            </div>
            <ul className="FeedCategory">
            {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <SeeCategory key={index} article={article}/>
          ))
        ) : (
        <div className="flex">
          <div className="img"></div>
          <p>Nenhum Artigo dessa Categoria foi Encontrado</p>
        </div>   
        )}
            </ul>
        </section>
    )
}


export default ShowCategory;