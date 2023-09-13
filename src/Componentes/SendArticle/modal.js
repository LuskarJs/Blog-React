import React, {useState} from "react";
import { motion } from "framer-motion";
import "./modal.css";

const ModalImg = ({ handleClose, uploadedImages, handleAddImageToArticle}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedImage = uploadedImages[selectedImageIndex];
        if(selectedImage && titulo && descricao) {
            handleAddImageToArticle(`![${titulo}](${selectedImage.url} "${descricao}")`);
            handleClose();
        }
    }

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Índice da imagem selecionada

    return (
        <motion.section
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: 200 }}
        transition={{ duration: 0.4 }}
        className="section-modal">
            <form action='/' onSubmit={handleSubmit} method="Post" className="ModalImg">
                <div className="Input-s">
                    <label htmlfor="titulo">Titulo da Imagem</label>
                    <input id="titulo" type="text" value={titulo} placeholder="Digite o Titulo da Imagem" onChange={(e) => setTitulo(e.target.value)}/>
                </div>
                <div className="Input-s">
                    <label htmlfor="descricao" >Descrição da Imagem</label>
                    <input id="descricao" type="text" value={descricao} placeholder="Digite a Descrição da Imagem" onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <select
                name="select"
                value={selectedImageIndex}
                onChange={(e) => setSelectedImageIndex(e.target.value)}
                >
                {uploadedImages.map((image, index) => (
                    <option key={index} value={index}>
                    {image.name}
                    </option>
                ))}
        </select>
                <div className="Control-btn">
                    <button type="submit">Confirma</button>
                    <button onClick={handleClose}>Cancelar</button>
                </div>
            </form>
        </motion.section>
    )
}

export const ModalUrl = ({ handleClose, handleAddLinkToArticle }) => {
    const [linkText, setLinkText] = useState("");
    const [linkUrl, setLinkUrl] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (linkText && linkUrl) {
        handleAddLinkToArticle(`[${linkText}](${linkUrl})`);
        handleClose(); 
      }
    };
  
    return (
      <motion.section
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: -200 }}
      transition={{ duration: 0.4 }} 
      className="section-modal">
        <form onSubmit={handleSubmit}>
          <div className="Input-s">
            <label>Digite a Palavra Chave</label>
            <input
              type="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="Digite o Texto"
            />
          </div>
  
          <div className="Input-s">
            <label>Coloque a Url</label>
            <input
              type="text"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="Digite a URL"
            />
          </div>
  
          <div className="Control-btn">
            <button type="submit">Confirma</button>
            <button onClick={handleClose}>Cancelar</button>
          </div>
        </form>
      </motion.section>
    );
  };
  

export default ModalImg;