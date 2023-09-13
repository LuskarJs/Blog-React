import "./buttonMore.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ButtonMore = () => {

    return(
        <section className="MoreContent-btn">
            <button className="MoreButton">
                <MoreHorizIcon sx={{color: 'snow'}} />
            </button>
        </section>
    )
}

export default ButtonMore;