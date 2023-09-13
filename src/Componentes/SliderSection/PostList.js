import {  SwiperSlide , Swiper } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';
import {HandleShowArticle} from "../FeedSlider/FeedArticles";

const PostList = ({article}) => {
  const navigate = useNavigate();

  const HandleHover = (event) => {
    const Target = event.target;
    const parent = Target.parentElement?.querySelector(".title-card");
    const img = Target.parentElement?.querySelector(".Content-img img");
    const slide = parent?.parentElement;

    if(Target && img && parent && slide){
      img.classList.add("scale")
      slide.classList.add('expand');
      Target.classList.add("show");
      parent.classList.add('hide');
    }
  }

  const HandleRemove = (event) => {
    const target = event.target.parentElement;
    const parent = target?.parentElement.querySelector(".title-card");
    const slide = parent?.parentElement;
    const img = target?.parentElement.querySelector(".Content-img img");

    if(target && img && parent && slide) {
      img.classList.remove("scale")
      slide.classList.remove('expand');
      parent.classList.remove('hide');
      target.classList.remove('show');
    }
  }
  
    return (
      <Swiper 
      slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      className="articles-S"
      breakpoints={{

        320: {
          slidesPerView: 1,
        },
        525: {
          slidesPerView: 2,
        },
        1180: {
          slidesPerView: 3,
        },
      }}
    >
      {article.map((articles, index) => (
        <SwiperSlide
          onClick={HandleHover}
          key={index}
          className="slider-card"
        >
          <div className="Content-img">
            <img src={articles.image} alt={articles.title} />
          </div>
          <div className="shadow"></div>
          <div className="BtnAr">
              <p onClick={() => HandleShowArticle({ article: articles, navigate })}>Ver Artigo</p>
          </div>
          <div className="title-card">
            <h3>{articles.title}</h3>
            <h4>{articles.category}</h4>
            <span>{articles.time}</span>
          </div>
          <div className="info-card">
            <div className="close" onClick={HandleRemove}>
              X
            </div>
            <article>
              <h3>{articles.title}</h3>
              <h4>{articles.category}</h4>
              <span>{articles.time}</span>
            </article>
            <div className="description">
              <p>
                <strong>Resumo:</strong> {articles.summary}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    )
}

export default PostList;