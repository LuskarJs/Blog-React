import Search from "../search/search";
import SliderSection from "../FeedSlider/slider";
import FeedArray from "../SliderSection/FeedArray";
import ButtonMore from "../MoreContent/buttonMore";
import SendIcon from '@mui/icons-material/Send';
import {  Link } from "react-router-dom";
import './feed.css';

const FeedScroll = () =>{
    
    const Button = () => {
    
        return (
            <Link to='/Enviar-Artigo'>
                <button>
                <SendIcon sx={{color: 'snow'}} />

                </button>
            </Link>
        )
        
    }


    return(
        <div className="feed-scroll">
            <div className="content-search">
                <Search />
                <Button />
            </div>
            <SliderSection />
            <FeedArray />
            <ButtonMore/>
      </div>
    )
}

export default FeedScroll;