import Stories from "./DataStory";
import {HandleShowStorie} from "./stories"
import { useNavigate } from 'react-router-dom';
import ReturnTime from '../showArticle/returnTime';
import {  SwiperSlide , Swiper } from "swiper/react";

const AllStorie = () => {
    const navigate = useNavigate();
    window.scrollTo({top: 0 ,  behavior: "smooth"} );

    const RenderStorie = () => {

        return (
            <>
                 {Stories.map((storie, index) => (
                
                <SwiperSlide key={index}
                    className="Card-Storie"
                    onClick={() => HandleShowStorie({storie: storie, navigate})}
                    >
                   <figure>
                     <img src={storie.image} alt="titulo"  />
                   </figure>
                   <div className="info-storie">
                     <p>{storie.title}</p>
                   </div>
                   <div className="time">
                    <p>{ReturnTime(storie.date)}</p>
                   </div>
                   <div className="category">
                    <p>{storie.category}</p>
                   </div>
                 </SwiperSlide>
                ))}
            </>
        )
    }

    return (
        <section className="AllStorie">
            <div className="Title-storie">
                    <h2>Todos Os Stories</h2>
            </div>
            <div class="sec-storie">    
                <Swiper
                 slidesPerView={3}
                 spaceBetween={30}
                 loop={true}
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
                className="list-storie-all">
                    {RenderStorie()}
                </Swiper>
            </div>
        </section>
    )
}

export default AllStorie;