import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SeparacaoParagrafo from './separaParagrafo';
import "./articlesee.css";
import EmailIcon from '@mui/icons-material/Email';
import FlagIcon from '@mui/icons-material/Flag';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import ReturnTime from './returnTime';

const ShareArticle = () => {

    return (
        <ul className='ShareList'>
            <li><FacebookIcon /></li>
            <li><InstagramIcon/></li>
            <li><TwitterIcon/></li>
            <li><EmailIcon /></li>
        </ul>
    )
}

const AllComtentary = () => {

    return (
        <section className='sec-todos-comentarios'>
            <ul className='content-list'>
            
            <li className='comentarios'>
            <div className='info-user'>
                <figure>
                <img src="https://source.unsplash.com/featured/300x259" alt="" />
                </figure>
                <div className="respo">
                <div className="content-info-user">
                    <div className='name-user'>
                    <h3>Mauro</h3>
                    </div>
                    <div className='Iconaction'>
                    <FlagIcon />
                    <EditIcon />
                    <SendIcon />
                    </div>
                </div>
                <div className='resp'>
                    <p>
                    Essa descoberta é realmente fascinante! A ciência continua nos surpreendendo a cada dia. Estou ansioso para ver como essas novas evidências da origem do universo podem expandir nosso conhecimento e perspectivas.
                    </p>
                </div>
                </div>
            </div>
            </li>

            <li className='comentarios'>
            <div className='info-user'>
                <figure>
                <img src="https://source.unsplash.com/featured/300x259" alt="" />
                </figure>
                <div className="respo">
                <div className="content-info-user">
                    <div className='name-user'>
                    <h3>Luciana</h3>
                    </div>
                    <div className='Iconaction'>
                    <FlagIcon />
                    <EditIcon />
                    <SendIcon />
                    </div>
                </div>
                <div className='resp'>
                    <p>
                    Eu sempre me perguntei sobre a origem do universo. É incrível ver novas evidências sendo reveladas e como isso pode nos ajudar a entender melhor o nosso lugar no cosmos.
                    </p>
                </div>
                </div>
            </div>
            </li>

            <li className='comentarios'>
            <div className='info-user'>
                <figure>
                <img src="https://source.unsplash.com/featured/300x259" alt="" />
                </figure>
                <div className="respo">
                <div className="content-info-user">
                    <div className='name-user'>
                    <h3>Carlos</h3>
                    </div>
                    <div className='Iconaction'>
                    <FlagIcon />
                    <EditIcon />
                    <SendIcon />
                    </div>
                </div>
                <div className='resp'>
                    <p>
                    É impressionante como a ciência avança rapidamente. As novas evidências da origem do universo nos mostram o quão vasto e complexo é o nosso cosmos. Estou animado para aprender mais sobre esse assunto!
                    </p>
                </div>
                </div>
            </div>
            </li>

            <li className='comentarios'>
            <div className='info-user'>
                <figure>
                <img src="https://source.unsplash.com/featured/300x259" alt="" />
                </figure>
                <div className="respo">
                <div className="content-info-user">
                    <div className='name-user'>
                    <h3>Sofia</h3>
                    </div>
                    <div className='Iconaction'>
                    <FlagIcon />
                    <EditIcon />
                    <SendIcon />
                    </div>
                </div>
                <div className='resp'>
                    <p>
                    Eu adoro ler sobre descobertas científicas! Sempre aprendemos algo novo e emocionante. As novas evidências da origem do universo são mais uma prova do poder da ciência em desvendar os mistérios do mundo ao nosso redor.
                    </p>
                </div>
                </div>
            </div>
            </li>


            </ul>
        </section>
    )
}

const Comentary = () => {
    return (
        <section className='section-comentario'>

            <div className='comentario-info'>
                <div className='square1'></div>
                <div className='square2'></div>
                <figure>
                    <img src="https://source.unsplash.com/featured/300x259" alt="" />
                </figure>
            </div>

            <div className='comentario-content-txt'>
                <textarea></textarea>
                <button type='sumbit' >Enviar Cometrario </button>
            </div>
            
        </section>
    )
}

const ShowArticle = () => {

    const location = useLocation();
    const { article } = location.state || {};
    const OrigialTitle = "Blog - Noticia"

   useEffect(() => {
    document.title = article.title;

    return () => {
        document.title = OrigialTitle;
    }
   }, [article.title])

    return (
        <motion.section className="Content-article-post"
        initial={{ transform: "translateX(-50%"}}
        animate={{ transform: "translateX(0%"}}
        exit={{ transition : {duration: 100}}}>
        <div className="article-complete">
            <ul className='route'>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>
                <span>&gt;</span>
                <li>
                    <Link to="/Noticias">
                        Noticias
                    </Link>
                </li>
                <span>&gt;</span>
                <li>      
                    <p>{article.title}</p>
                </li>
            </ul>

            <div className="bg-img">
                <figure>
                    <img src={article.image} alt={article.title}/>
                    <figcaption>{article.title}</figcaption>
                </figure>
                <div className="Content-info">
                    <h2>{article.title}</h2>
                    <p>{article.summary}</p>
                </div>
            </div>
            <div className='info-editor'>
                <p><PersonIcon/> Autor: <span>{article.author.name} </span></p>
                <p> <EditIcon/> Revisor: <span>{article.reviewer.name} </span></p> 
                <p> <AccessTimeIcon/> Postado: <span> {ReturnTime(article.postTime)},</span></p> 
                <p> <AccessTimeIcon/> Atualizado: <span>{ReturnTime(article.postTimeAfterRevision)}</span></p>
            </div>
            <article>
                <SeparacaoParagrafo text={article.content} />
            </article>
            <ul className='TagsCategory'>
                <h3>TAGS</h3>
                <li>{article.category}</li>
            </ul>
            <div className='Editor'>
                <div className='prof-editor'>
                    <figure>
                        <img src="https://source.unsplash.com/featured/300x201" alt=""/>
                    </figure>
                    <div className="editor-info">
                        <h3>{article.author.name}</h3>
                        <p>Editor</p>
                        <ul>
                            <li><TwitterIcon /></li>
                            <li><FacebookIcon /></li>
                            <li><InstagramIcon/></li>
                        </ul>
                        <p>{article.author.bio}</p>
                    </div>
                </div>
                <div className='prof-rev'>
                    <figure>
                        <img src="https://source.unsplash.com/featured/300x211" alt=""/>
                    </figure>
                    <div className="rev-info">
                        <h3>{article.reviewer.name}</h3>
                        <p>Revisor</p>
                        <ul>
                            <li><TwitterIcon /></li>
                            <li><FacebookIcon /></li>
                            <li><InstagramIcon/></li>
                        </ul>
                        <p>{article.reviewer.bio}</p>
                    </div>
                </div>
            </div>
            <ShareArticle />
            < Comentary />
            < AllComtentary />
        </div>
    </motion.section>
    )
}

export default ShowArticle;