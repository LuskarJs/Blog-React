import { useState } from "react";

const SeparacaoParagrafo = ({text, limiteCaracter, imagens}) => {
    const [RestanteTexto, SetRestanteTexto] = useState("");
    const paragrafos = text.split("\n\n");
    
    const RenderParagrafo = paragrafos.map((paragrafo, index) => {
        if (paragrafo.length > limiteCaracter) {
            const paragrafoLimitado = paragrafo.slice(0, limiteCaracter);
            const Restante = paragrafo.slice(limiteCaracter);
            SetRestanteTexto((prevText) => prevText + Restante);
            return (
                <div key={index}>
                    {imagens &&
                    imagens.map((imagem) => {
                    if (imagem.posicao === "antes") {
                        return <img key={imagem.url} src={imagem.url} alt="Imagem" />;
                    }
                    return null;
                    })}
                <p className="paragrafo">{paragrafoLimitado}</p>
                    {imagens &&
                        imagens.map((imagem) => {
                        if (imagem.posicao === "depois") {
                            return <img key={imagem.url} src={imagem.url} alt="Imagem" />;
                        }
                        return null;
                        })}
                    </div>
            );
        }

        return (
            <div key={index}>
                {imagens &&
                    imagens.map((imagem) => {
                        if (imagem.posicao === "antes") {
                        return <img key={imagem.url} src={imagem.url} alt="Imagem" />;
                        }
                        return null;
                    })}
                    <p className="paragrafo">{paragrafo}</p>
                    {imagens &&
                    imagens.map((imagem) => {
                        if (imagem.posicao === "depois") {
                        return <img key={imagem.url} src={imagem.url} alt="Imagem" />;
                        }
                        return null;
                    })}
        </div>
        );
    });

    return <div>
                {RenderParagrafo}
                {RestanteTexto && (
                    <SeparacaoParagrafo
                    text={RestanteTexto}
                    limiteCaracteres={limiteCaracter}
                    imagens={imagens}
                    />
      )}
            </div>
}

export default SeparacaoParagrafo;