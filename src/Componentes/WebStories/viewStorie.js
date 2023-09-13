import { useLocation } from 'react-router-dom';
import ReturnTime from '../showArticle/returnTime';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import notFoundImage from './conceito-removebg-preview.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReportIcon from '@mui/icons-material/Report';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from "react";

const FunctionIcon = () => {

    const [onClick,setOnClick] = useState(false);

    const ChangeIcon = () => {
        if(onClick){
            return <FavoriteIcon/>
        } else {
            return <FavoriteBorderIcon/>
        }
    }

    return (
        <ul className="list-icon">
            <li><ReplyIcon/></li>
            <li onClick={() => setOnClick(!onClick)}>
                <ChangeIcon/>
            </li>
            <li><ReportIcon/></li>
        </ul>
    )
}

const NotFound = ({ comments }) => {
    
    return (
        <ul className='coment-area'>
            {comments && comments.length > 0 ? (
                comments.map((comment, index) => (
                    <li key={index} className='comment'>
                        <div className="info-Coment">
                            <figure>
                                <img src={comment.userImage} alt={comment.user} />
                            </figure>
                            <h2>{comment.user}</h2>
                        </div>
                        <div className='content-coment'>
                            <p>{comment.comment}</p>
                        </div>
                        <FunctionIcon/>
                    </li>
                ))
            ) : (
                <div className='notfound'>
                    <figure>
                        <img src={notFoundImage} alt='' />
                    </figure>
                    <p>Nenhum Comentário foi encontrado</p>
                </div>
            )}
        </ul>
    );
};

const NewComent = ({
    newCommentText,
    setNewCommentText,
    currentStory,
    setCurrentStory,
    setShowNewComment,
    comments,
    setComments,
    userImage,
    setUserImage, 
    userName, 
    setUserName
  }) => {
    const addNewComment = () => {
      if (newCommentText.trim() !== '') {
        const newComment = {
          user: userName, 
          userImage: userImage, 
          comment: newCommentText,
        };
  
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
  
        const updatedStory = {
            ...currentStory,
            comments: updatedComments,
        };
        setCurrentStory(updatedStory);
  
        setNewCommentText('');
  
        setShowNewComment(false);
      }
    };
  


    return (
        <motion.div 
        className='content-coment-new'
        initial={{transform: "translateY(-50%)"}}
        animate={{transform: "translateY(0%)"}}
        exit={{transition : {duration: 3}}}
        >
            <form onSubmit={(e) => { e.preventDefault(); addNewComment();}}>
                <div className='inputs'>
                    <input type='text' placeholder='Digite seu nome' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <input type='url' placeholder='exemplo: www.site./urldaImage' value={userImage} onChange={(e) => setUserImage(e.target.value)}/>
                </div>
                <textarea
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder='Digite um novo comentario'></textarea>
                <button type='Submit'>Enviar comentario</button>
            </form>
        </motion.div>
    )
}

const ViewStorie = () => {
    const location = useLocation();
    const { story } = location.state || {};   
    const [showNewComment, setShowNewComment] = useState(false);
    const [newCommentText, setNewCommentText] = useState('');
    const [currentStory, setCurrentStory] = useState(story); 
    const [comments, setComments] = useState(story.comments);
    const [Name,setNameComent] = useState(story.user);
    const [Image,setImageComent] = useState(story.userImage);

    return (
        <motion.section className="content-bg"
            initial={{ transform: "translateX(-50%)"}}
            animate={{ transform: "translateX(0%)"}}
            exit={{ transition : {duration: 3}}}>
            <div className="content-storie">
                    <div className="Views">
                        <figure>
                            <img src={story.image} alt={story.title} />
                        </figure>
                    </div>
                    <div class="content-info-story">
                        <div className="time-bar">
                            <div className="storie"></div>
                        </div>
                        <div className="info-storie">
                            <h3>{story.title}</h3>
                            <p>< AccessTimeIcon />{ReturnTime(story.date)}</p>
                            <h4>{story.category}</h4>
                        </div>
                        <ul className='coments'>
                        <div className='add-coment'>
                            <button onClick={() => setShowNewComment(true)}>+ novo Comentário</button>
                        </div>
                        {showNewComment && (
                        <NewComent
                        newCommentText={newCommentText}
                        setNewCommentText={setNewCommentText}
                        currentStory={currentStory}
                        setCurrentStory={setCurrentStory}
                        setShowNewComment={setShowNewComment}
                        comments={comments}
                        setComments={setComments}
                        userImage={Image} 
                        setUserImage={setImageComent} 
                        userName={Name}
                        setUserName={setNameComent} 
                      />
                )}
                            <NotFound comments={comments} />
                        </ul>
                    </div>
            </div>   
        </motion.section>
    )
}

export default ViewStorie;