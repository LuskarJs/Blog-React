import WebStories from "../WebStories/WebStorie";
import { useLocation } from "react-router-dom";
import MoreRead from "./moreRead";

const ColumnT = () => {
    const location = useLocation();

    return (
        <section className="columT">
            <WebStories />
            <MoreRead />
        </section>
    )
}

export default ColumnT;