import "./ArticleForm.css";
import { motion } from "framer-motion";
import React, {useState, useEffect} from "react";
import SubjectIcon from '@mui/icons-material/Subject';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModalImg from './modal';
import {  Link } from "react-router-dom";
import { ModalUrl } from './modal';
import { FeedGeral } from "../SliderSection/FeedArray";

const ArticleForm = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

    const [Feed, setFeedGeral] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [openUrlModal, setOpenUrlModal] = useState(false);

    console.log(Feed);
    const OpenModalImg = () => {
      setOpenModal(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const CloseModalImg = () => {
      setOpenModal(false);
    }

    const CloseModalUrl = () => {
      setOpenUrlModal(false);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Aqui você pode criar um novo objeto de artigo com os dados do estado articleData
      const newArticle = {
        id: Feed.length + 1,
        title: articleData.title,
        summary: articleData.summary,
        category: articleData.category,
        content: articleData.content,
        image: [coverImage, articleImage, secondImage],
        author: {
          name: articleData.author.name,
          bio: articleData.author.bio
        },
        postTime: Date.now(),
        };
    
      // Chame a função onSubmitArticle para adicionar o novo artigo ao feed
      
      addArticleToFeed(newArticle);
      
      // Limpe os campos do formulário após o envio
      setArticleData({
        title: "",
      summary: "",
      category: "",
      content: "",
      image: [],
      author: {
        name: "",
        bio: ""
      },
      postTime: "",
      });
    };
    
    const [articleData, setArticleData] = useState({
      title: "",
      summary: "",
      category: "",
      content: "",
      image: [],
      author: {
        name: "",
        bio: ""
      },
      postTime: "",
    });

   const addArticleToFeed = (newArticle) => {
      const updatedFeed = [...FeedGeral, newArticle];
      setFeedGeral(updatedFeed);
    };

    const [activeIndex, setActiveIndex] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedTag, setEditedTag] = useState("");
    const [tags, setTags] = useState([]);

    const [coverImage, setCoverImage] = useState(null);
    const [articleImage, setArticleImage] = useState(null);
    const [secondImage, setSecondImage] = useState(null);

    const [coverImageName, setCoverImageName] = useState("");
    const [articleImageName, setArticleImageName] = useState("");
    const [secondImageName, setSecondImageName] = useState("");

    const [content, setContent] = useState("");

    const handleAddImageToArticle = (imageMarkdown) => {
      setContent(content + "\n" + imageMarkdown);
    };

    const handleAddLinkToArticle = (linkMarkdown) => {
      setArticleData({
        ...articleData,
        content: articleData.content + "\n" + linkMarkdown
      });
      setOpenUrlModal(true);
    };

    const uploadedImages = [
      {id:0, name: "Nenhuma imagem selecionada", url: null }, // Opção vazia
      {id:1, name: coverImageName, url: coverImage },
      {id:2, name: articleImageName, url: articleImage },
      {id:3, name: secondImageName, url: secondImage },
    ];
    

  const handleBreakLine = () => {
    setContent(content + "\n\n");
  };

    const handleFileChange = (event, setImageState, setImageNameState) => {
        const file = event.target.files[0];
        if (file) {
          const ImageUrl = URL.createObjectURL(file);
          setImageState(ImageUrl);
          setImageNameState(file.name);
          setArticleData({ ...articleData, [setImageState]: ImageUrl});
        }
      }

    const TagItem = ({ tag, index }) => {
    
        const handleLiClick = (index) => {
            setActiveIndex(index);
          };
      
          const handleDeleteTag = () => {
            const updatedTags = [...tags];
            updatedTags.splice(index, 1);
            setTags(updatedTags);
          };
      
          const handleEditTag = () => {
            const updatedTags = [...tags];
            updatedTags[index] = editedTag;
            setTags(updatedTags);
            setEditMode(false);
          };

        const toggleEditMode = () => {
            setEditMode(!editMode)
            setEditedTag(tag)
        }

        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
              handleEditTag(e);
            }
          };

        return (
          <motion.li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleLiClick(index)}
            onKeyDown={handleKeyDown}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            whileInView={{ opacity: 1, x: -50 }}
          >
            {editMode ? (
        // Se estiver em modo de edição, mostra o input para editar a tag
            <input
            className="inputChange"
            type="text"
            value={editedTag}
            onChange={(e) => setEditedTag(e.target.value)}
            onBlur={handleEditTag}
            />
            ) : (
                // Caso contrário, mostra o texto normalmente
                <>
                <span onClick={toggleEditMode}><EditIcon /></span>
                <p>{tag}</p>
                <span onClick={handleDeleteTag}><DeleteIcon /></span>
                </>
            )}
          </motion.li>
        );
      };
  
    const AddTag = (e) => {
      e.preventDefault();
      const inputText = document.querySelector('#formTag input').value;
  
      if (inputText) {
        setTags([inputText, ...tags]);
        document.getElementById("formTag").reset();
      }
    };

    return (
        <motion.section
        initial={{ transform: "translateX(-50%"}}
        animate={{ transform: "translateX(0%"}}
        exit={{ transition : {duration: 100}}}
        className="Content-form-artigo">
         {openModal && (
          <ModalImg
            handleClose={CloseModalImg}
            uploadedImages={uploadedImages}
            handleAddImageToArticle={handleAddImageToArticle}
          />
        )}

        { openUrlModal && (
          <ModalUrl
            handleClose={CloseModalUrl}
            handleAddLinkToArticle={handleAddLinkToArticle}
          />
        )}


            <div className="title-form">
                <h2>Envie Seu Artigo</h2>
            </div>
            <form>
                <div className="input-article">
                    <label>
                        Titulo do Artigo
                    </label>
                    <input
                      type="text"
                      value={articleData.title}
                      onChange={(e) => setArticleData({ ...articleData, title: e.target.value })}
                    />
                </div>
                <div className="input-article">
                    <label>
                        Descrição do Artigo
                    </label>
                    <textarea
                      value={articleData.summary}
                      onChange={(e) => setArticleData({ ...articleData, summary: e.target.value })}
                    />
                </div>
                <div className="input-article">
                    <label>
                        Fonte da Noticias
                    </label>
                    <input type="text"
                    value={articleData}
                    onChange={(e) => setArticleData({...articleData})}
                    />
                </div>
              <div className="img-content">
                <ul className="lista-img">
                    <li className="input-article">
                    <label htmlFor="img1">
                        <span>{coverImageName || "Selecione uma Imagem"}</span>
                        <span>Imagem de Capa </span>
                    </label>
                        <input id="img1" type="file" onChange={(e) => handleFileChange(e, setCoverImage, setCoverImageName)} />
                        {coverImage && <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.2 }}
                        src={coverImage} alt="Imagem de Capa" />}
                    </li>
                    <li className="input-article">
                        <label for="img2">
                        <span>{articleImageName || "Selecione uma Imagem"}</span>
                        <span>Imagem do Artigo</span>
                        </label>
                        <input id="img2" type="file" onChange={(e) => handleFileChange(e, setArticleImage, setArticleImageName)} />
                        {articleImage && <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }}
                        src={articleImage} alt="Imagem do Artigo" />}
                    </li>
                    <li className="input-article">
                        <label for="img3">
                            <span>{secondImageName || "Selecione um Imagem"}</span>
                            <span>Segunda Imagem </span>
                        </label>
                        <input id="img3" type="file" onChange={(e) => handleFileChange(e, setSecondImage, setSecondImageName)} />
                        {secondImage && <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }} src={secondImage} alt="Segunda Imagem do Artigo" />}
                    </li>
                </ul>

              </div>
                <div className="input-article">
                    <div class="content-art">
                        <label>
                            Conteudo do Artigo
                        </label>
                        <textarea
                        value={articleData.content}
                        onChange={(e) => setArticleData({...articleData, content: e.target.value})}/>
                    </div>
                    <div className="Content-control">
                        <span onClick={handleBreakLine}><SubjectIcon /></span>
                        <span onClick={handleAddLinkToArticle}><AddLinkIcon /></span>
                        <span onClick={ OpenModalImg}><AddPhotoAlternateIcon /></span>
                    </div>
                </div>
                <div className="input-article">
                    <label>
                        Tags de Artigo
                    </label>
                    <p>Clique na TAG para <span>Editar</span> ou <span>Deletar</span> a tag Selecionada'</p>
                    <div className="fnt-tag">
                        <form id="formTag" action="">
                          <input type="text"
                            maxLength="27"
                            placeholder="Digite a Tag"
                            value={articleData.category}
                            onChange={(e) => setArticleData({...articleData, category: e.target.value})}
                            />
                                <button onClick={AddTag}>Adicionar Tag</button>
                        </form>
                        <ul id="lista-tag">
                        {tags.map((tag, index) => (
                            <TagItem key={index} tag={tag} index={index} />                        
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="input-article">
                    <label>
                        Nome Do Autor
                    </label>
                    <input type="text"
                    placeholder="Digite o Seu Nome Real"
                    value={articleData.name}
                    onChange={(e) => setArticleData({...articleData, name: e.target.value})}
                    />
                </div>
                <div className="input-article">
                    <label>
                        Fale um Pouco Sobre você
                    </label>
                    <input type="text"
                    placeholder="Digite um pouco Sobre você"
                    value={articleData.bio}
                    onClick={addArticleToFeed}
                    />
                </div>
                <div className="control-btn">
                <button id="SendButton" onClick={handleSubmit}>Enviar Artigo</button>
                  <button>
                  <Link to='/'>
                    Voltar ao Inicio
                    </Link >
                  </button>
                </div>
            </form>
        </motion.section>
    )
}

export default ArticleForm;