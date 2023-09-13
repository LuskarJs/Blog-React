import "./NewLetter.css";

 const NewsLetter = () => {
    
    return (
        <div className="Container">
            <form>
                <label htmlfor="news" >Aqui Você fica conectado com as últimas notícias em um único lugar</label>
                <input text="text" placeholder="exemplo@gmail.com" name="news" id="news" />
                <button>Receber NewsLetter</button>
            </form>
        </div>
    )
}

export default NewsLetter;