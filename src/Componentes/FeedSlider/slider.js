import React from "react";
import "./slider.css";
import PostList from "../SliderSection/PostList";
export const Articles = [
      {
        id: 1,
        title: "Dicas para uma Rotina de Exercícios em Casa",
        category: "Saúde",
        summary: "Este artigo oferece dicas práticas para estabelecer uma rotina de exercícios em casa e manter-se ativo.",
        content: "Exercitar-se regularmente traz diversos benefícios para a saúde. Mesmo em casa, é possível manter uma rotina de exercícios eficaz. Neste artigo, apresentamos dicas e sugestões para você criar um ambiente propício para a prática de exercícios em casa, além de recomendações de atividades físicas que podem ser realizadas sem a necessidade de equipamentos específicos. Descubra como se manter ativo e saudável sem sair de casa.",
        image: "https://source.unsplash.com/featured/300x219",
        author: {
          name: "Ana Silva",
          bio: "Ana Silva é uma personal trainer certificada com ampla experiência em treinamento físico e condicionamento. Ela acredita que a atividade física é essencial para uma vida saudável e busca incentivar as pessoas a adotarem um estilo de vida ativo."
        },
        reviewer: {
          name: "Pedro Santos",
          bio: "Pedro Santos é nutricionista e especialista em saúde e bem-estar. Ele revisa artigos relacionados à saúde e oferece insights valiosos sobre a importância da atividade física para a qualidade de vida."
        },
        postTime: "2023-06-19 09:00",
        revisedTime: "2023-06-19 10:30",
        postTimeAfterRevision: "2023-06-19 10:45"
      },
      {
        id: 2,
        title: "Introdução ao Desenvolvimento Web",
        category: "Tecnologia",
        summary: "Este artigo fornece uma introdução básica ao desenvolvimento web e suas principais tecnologias.",
        content: "O desenvolvimento web é uma área em constante evolução, e compreender seus conceitos fundamentais é essencial para aqueles que desejam ingressar nesse campo. Neste artigo, abordamos os conceitos básicos do desenvolvimento web, incluindo linguagens de marcação, como HTML e CSS, e linguagens de programação, como JavaScript. Além disso, apresentamos as principais tecnologias e ferramentas utilizadas no desenvolvimento web. Esteja preparado para dar os primeiros passos no mundo do desenvolvimento web.",
        image: "https://source.unsplash.com/featured/300x220",
        author: {
          name: "Carlos Ferreira",
          bio: "Carlos Ferreira é um desenvolvedor web com experiência em diversas tecnologias e frameworks. Ele é apaixonado por compartilhar seus conhecimentos e ajudar outras pessoas a iniciarem suas jornadas no desenvolvimento web."
        },
        reviewer: {
          name: "Mariana Rocha",
          bio: "Mariana Rocha é uma designer de UX/UI e revisora de artigos relacionados à tecnologia. Ela se dedica a garantir que os artigos ofereçam informações precisas e úteis para os leitores."
        },
        postTime: "2023-06-20 11:15",
        revisedTime: "2023-06-20 12:45",
        postTimeAfterRevision: "2023-06-20 13:30"
      },
      {
        id: 3,
        title: "A Importância da Educação Financeira",
        category: "Arte e Design",
        summary: "Este artigo explora a importância da educação financeira e como ela pode capacitar as pessoas a tomar decisões financeiras sólidas.",
        content: "A educação financeira desempenha um papel vital em nossa vida cotidiana. Neste artigo, discutimos os princípios básicos da educação financeira e como eles podem ajudar as pessoas a gerenciar seu dinheiro de forma eficaz. Exploramos tópicos como orçamento, poupança, investimento e planejamento financeiro a longo prazo. O objetivo é capacitar os leitores a tomar decisões financeiras informadas e construir uma base sólida para a estabilidade financeira.",
        image: "https://source.unsplash.com/featured/300x230",
        author: {
          name: "Michael Thompson",
          bio: "Michael Thompson é um especialista em finanças com uma paixão por promover a educação financeira. Ele capacita as pessoas a assumirem o controle de suas finanças e a tomar decisões financeiras sólidas."
        },
        reviewer: {
          name: "Sarah Miller",
          bio: "Sarah Miller é uma consultora financeira e escritora especializada em educação financeira pessoal. Ela garante que o artigo forneça conselhos práticos e capacite os leitores a melhorar sua educação financeira."
        },
        postTime: "2023-06-27 15:45",
        revisedTime: "2023-06-27 17:00",
        postTimeAfterRevision: "2023-06-27 18:15"
      },
      {
        id: 4,
        title: "Explorando o Mundo da Literatura Fantástica",
        category: "Literatura",
        summary: "Este artigo explora o encantador mundo da literatura fantástica e sua popularidade duradoura.",
        content: "A literatura fantástica transporta os leitores para reinos mágicos repletos de criaturas míticas, jornadas épicas e aventuras maravilhosas. Neste artigo, exploramos as origens e a evolução da literatura fantástica, desde mitos antigos até romances fantásticos modernos. Investigamos autores renomados e suas obras inovadoras que moldaram o gênero. Embarque em uma jornada literária e descubra o fascínio dos mundos de fantasia que incendeiam a imaginação.",
        image: "https://source.unsplash.com/featured/300x231",
        author: {
          name: "Olivia Thompson",
          bio: "Olivia Thompson é uma entusiasta da literatura e ávida leitora de literatura fantástica. Ela compartilha sua paixão pelo gênero e apresenta os leitores ao cativante mundo da literatura fantástica."
        },
        reviewer: {
          name: "Robert Harris",
          bio: "Robert Harris é professor de literatura e editor especializado em literatura fantástica. Ele garante que o artigo explore a riqueza e a importância dos temas e motivos do gênero."
        },
        postTime: "2023-06-28 11:00",
        revisedTime: "2023-06-28 12:15",
        postTimeAfterRevision: "2023-06-28 13:30"
      }
      ,
      {
        id: 5,
        title: "O Poder da Meditação na Vida Diária",
        category: "Bem-estar",
        summary: "Este artigo explora os benefícios da meditação e como ela pode melhorar o bem-estar físico e mental.",
        content: "A meditação é uma prática milenar que oferece inúmeros benefícios para a mente, o corpo e a alma. Neste artigo, exploramos os efeitos positivos da meditação na redução do estresse, melhoria da concentração, aumento da consciência plena e promoção do equilíbrio emocional. Também fornecemos orientações para começar uma prática de meditação e integrá-la à vida diária. Descubra o poder transformador da meditação e comece a colher os benefícios de uma mente calma e equilibrada.",
        image: "https://source.unsplash.com/featured/300x232",
        author: {
          name: "Gabriel Silva",
          bio: "Gabriel Silva é um praticante de meditação e entusiasta do bem-estar. Ele compartilha sua experiência e conhecimento para ajudar outras pessoas a incorporar a meditação em suas vidas diárias."
        },
        reviewer: {
          name: "Isabella Santos",
          bio: "Isabella Santos é uma terapeuta holística e escritora especializada em bem-estar mental e físico. Ela garante que o artigo forneça informações confiáveis e inspire os leitores a iniciar uma prática de meditação."
        },
        postTime: "2023-06-29 14:30",
        revisedTime: "2023-06-29 15:45",
        postTimeAfterRevision: "2023-06-29 17:00"
      },      
      ];      
const SliderSection = () => {
   

    return (
        <section className="SectionSlider">
                <div className="title">
                    <h2>Artigos do Dia</h2>
                </div>
                <div className="slider-container">
                    <PostList article={Articles} />
                </div>
        </section>
            ) 
}           

export default SliderSection;