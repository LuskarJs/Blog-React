import './feed.css';
import FeedScroll from "./feedScroll";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';

const Feed = () => {
  const location = useLocation();

  return (
    <motion.section className="feed" 
      initial={{ transform: "translateX(-50%"}}
      animate={{ transform: "translateX(0%"}}
      exit={{ transition : {duration: 1}}}
      >
      <FeedScroll />
    </motion.section>
  );
};

export default Feed ;
