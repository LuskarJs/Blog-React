import "./category.css";
import { Articles } from "../FeedSlider/slider";
import {motion} from "framer-motion";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import ShowCategory from "../ShowCategory/SeeCategory";

const CategoryFeed = () => {
    const location = useLocation();
    const [selectCategory, setSelectCategory] = useState('');

    const SelecionarCategoria = (categoria) => {
      setSelectCategory(categoria);
    };
    const categorias = [
        { title: "Notícias locais", img:"https://th.bing.com/th/id/OIG.JKvwivorpxUOl5zdi_hG?pid=ImgGn" },
        { title: "Política", img:"https://th.bing.com/th/id/OIG.aipyjb3tN_YpEIDiEYG9?pid=ImgGn" },
        { title: "Notícias nacionais", img:"https://th.bing.com/th/id/OIG.Cnr6qYijpcPk1I1cLtrR?pid=ImgGn" },
        { title: "Saúde", img:"https://th.bing.com/th/id/OIG.zZ9bFGzs42SOYSP.G3YL?pid=ImgGn" },
        { title: "Notícias internacionais", img: "https://th.bing.com/th/id/OIG.tkrysKM1JqKPaC9Dis1f?pid=ImgGn" },
        { title: "Ciência", img: "https://th.bing.com/th/id/OIG.cee0MrUCrewZZVPKCTn8?pid=ImgGn" },
        { title: "Economia e negócios", img: "https://th.bing.com/th/id/OIG.Ne6FFGhp3RHWrx1Bjn7W?pid=ImgGn" },
        { title: "Tecnologia", img: "https://th.bing.com/th/id/OIG.2sLC2Q6Y7aWkfNHU1vYw?pid=ImgGn" },
        { title: "Entretenimento", img: "https://th.bing.com/th/id/OIG.LNeBsXwbVlzcV6Yl2A_X?pid=ImgGn" },
        { title: "Esportes", img: "https://th.bing.com/th/id/OIG.uKzuHZNQ5k2DN4NM_ZcK?pid=ImgGn" },
        { title: "Literatura", img: "https://th.bing.com/th/id/OIG.hHG5rh3IRDn5lFH13rj7?pid=ImgGn" },
        { title: "Arte e Design", img: "https://th.bing.com/th/id/OIG.wvc743pvcfuVro.abpEC?pid=ImgGn" },
        { title: "Viagens e turismo", img: "https://th.bing.com/th/id/OIG.O2PaC0G2iTrnWoB9h3wa?pid=ImgGn" },
        { title: "Bem-estar", img: "https://th.bing.com/th/id/OIG.oJHBeDkxsN3YOnaSBHr9?pid=ImgGn" },
        { title: "Moda e beleza", img: "https://th.bing.com/th/id/OIG.7X2vOKUdXe3dpk0Vi6vY?pid=ImgGn" },
        { title: "Meio ambiente", img: "https://th.bing.com/th/id/OIG.RTGz.R.cYpEUKd5xkVcB?pid=ImgGn" },
        { title: "Alimentação e gastronomia", img: "https://th.bing.com/th/id/OIG.BdDjNUw9yS35STeXD5f1?pid=ImgGn" },
        { title: "Educação", img: "https://th.bing.com/th/id/OIG.QJNnrQzUsQ_HTtvEKBPG?pid=ImgGn" },
        { title: "Opinião/Editorial", img: "https://th.bing.com/th/id/OIG.sLDsjr_8RWu6Pn4lNff2?pid=ImgGn" }
      ];

    
    return (
        <motion.section 
        className="Category-Feed"
        initial={{ transform: "translateX(-50%)"}}
        animate={{ transform: "translateX(0%)"}}
        exit={{ transition : {duration: 1}}}>
            {!selectCategory && (
        <ul className="List-category">
          {categorias.map((categoria, index) => (
            <li className="option-category" key={index} onClick={() => SelecionarCategoria(categoria)}>
              <figure>
                <img src={categoria.img} alt={categoria.title} />
              </figure>
              <p>{categoria.title}</p>
            </li>
          ))}
        </ul>
      )}
      {selectCategory && (
        <ShowCategory category={selectCategory} categorias={categorias} articles={Articles}/>
      )}
        </motion.section>
    )
}



export default CategoryFeed;