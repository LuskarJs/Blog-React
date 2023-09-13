import { HandleShowArticle } from "../FeedSlider/FeedArticles";
import { useLocation, useNavigate } from "react-router-dom";
import './more.css'

const articlesTop = [
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
        title: "Inteligência Artificial na Indústria Automotiva: A Revolução dos Veículos Autônomos",
        category: "Tecnologia",
        summary: "Saiba como a inteligência artificial está impulsionando a revolução dos veículos autônomos e transformando a indústria automotiva.",
        content: "A indústria automotiva está passando por uma revolução impulsionada pela inteligência artificial (IA). Os veículos autônomos estão se tornando uma realidade cada vez mais próxima, graças aos avanços tecnológicos na área de IA.\n\nOs veículos autônomos são projetados para operar sem a necessidade de um motorista humano. Eles usam sensores, câmeras e sistemas de navegação para detectar o ambiente ao seu redor e tomar decisões inteligentes com base nesses dados.\n\nUma das principais vantagens dos veículos autônomos é a segurança. A IA pode reagir mais rapidamente do que um motorista humano e evitar acidentes causados por erros humanos, como distração ou fadiga.\n\nAlém disso, os veículos autônomos têm o potencial de melhorar a eficiência do transporte, reduzindo congestionamentos e otimizando o consumo de combustível.\n\nNo entanto, ainda existem desafios a serem superados antes que os veículos autônomos se tornem amplamente adotados. Questões legais, éticas e de segurança devem ser abordadas para garantir a confiança do público e a integração segura dos veículos autônomos nas vias públicas.\n\nEm suma, a inteligência artificial está revolucionando a indústria automotiva por meio dos veículos autônomos. Essa tecnologia promete melhorar a segurança e a eficiência do transporte, transformando a maneira como nos deslocamos.",
        image: "https://exemplo.com/imagem-inteligencia-artificial.jpg",
        author: {
          name: "Maria Silva",
          bio: "Maria Silva é uma escritora especializada em tecnologia e inovação. Ela acompanha de perto as últimas tendências em inteligência artificial e seu impacto em diferentes setores, incluindo a indústria automotiva."
        },
        reviewer: {
          name: "João Santos",
          bio: "João Santos é engenheiro de software e entusiasta da inteligência artificial. Ele revisa artigos sobre tecnologia e oferece insights sobre como a IA está moldando o futuro dos veículos."
        },
        postTime: "2023-06-18 14:00",
        revisedTime: "2023-06-18 15:30",
        postTimeAfterRevision: "2023-06-18 15:45"
      },
      {
        id: 3,
        title: "Tratamento inovador para o câncer está oferecendo esperança aos pacientes",
        category: "Saúde",
        summary: "Descubra como um novo tratamento revolucionário está trazendo esperança e melhorando os resultados no combate ao câncer.",
        content: "Um novo tratamento inovador para o câncer está oferecendo esperança aos pacientes que enfrentam essa doença devastadora. Esse tratamento, conhecido como terapia genética, utiliza técnicas avançadas para direcionar especificamente as células cancerígenas e estimular o sistema imunológico a combatê-las.\n\nA terapia genética funciona modificando geneticamente as células do paciente para que elas possam reconhecer e destruir as células cancerígenas de forma mais eficaz. Isso é feito introduzindo genes específicos nas células, que produzem proteínas capazes de identificar e atacar as células cancerígenas.\n\nEsse tipo de tratamento tem mostrado resultados promissores em diversos tipos de câncer, incluindo leucemia, câncer de pulmão e melanoma. Além disso, a terapia genética também pode ser combinada com outras formas de tratamento, como quimioterapia e radioterapia, para potencializar os efeitos e melhorar os resultados.\n\nEmbora a terapia genética ainda esteja em estágios iniciais de desenvolvimento, ela representa uma nova fronteira no combate ao câncer. A pesquisa e os avanços nessa área oferecem esperança aos pacientes e aumentam as chances de cura.\n\nÉ importante ressaltar que cada caso de câncer é único, e o tratamento mais adequado deve ser determinado pelo médico especialista com base nas características individuais de cada paciente.\n",
        image: "https://exemplo.com/imagem-tratamento-cancer.jpg",
        author: {
          name: "Ana Rodrigues",
          bio: "Ana Rodrigues é uma jornalista científica com interesse especial em avanços médicos e de saúde. Ela busca fornecer informações precisas e atualizadas sobre novas terapias e tratamentos no combate ao câncer."
        },
        reviewer: {
          name: "Pedro Oliveira",
          bio: "Pedro Oliveira é um pesquisador da área médica com foco em oncologia. Ele revisa artigos científicos sobre novas terapias e técnicas no tratamento do câncer, buscando oferecer perspectivas clínicas e científicas."
        },
        postTime: "2023-06-17 10:00",
        revisedTime: "2023-06-17 11:30",
        postTimeAfterRevision: "2023-06-17 11:45"
      },
      {
        id: 4,
        title: "Moda sustentável: As marcas que estão revolucionando o mundo da moda com suas práticas eco-friendly",
        category: "Moda",
        summary: "Descubra como as marcas de moda estão adotando práticas sustentáveis e contribuindo para um futuro mais consciente e eco-friendly.",
        content: "A moda sustentável está ganhando destaque no mundo da moda, com marcas que estão adotando práticas eco-friendly e revolucionando o setor. Essas marcas estão repensando todo o ciclo de vida das roupas, desde a escolha dos materiais até a produção e o descarte responsável.\n\nUma das principais tendências na moda sustentável é o uso de tecidos reciclados. Marcas pioneiras estão transformando resíduos, como garrafas de plástico e redes de pesca descartadas, em tecidos de alta qualidade para a produção de roupas. Além disso, outras marcas estão optando por materiais orgânicos, como algodão e linho cultivados de forma sustentável.\n\nOutra prática comum na moda sustentável é a produção local e em pequena escala. Ao reduzir a distância entre a produção e o consumo, essas marcas conseguem minimizar o impacto ambiental causado pelo transporte e o excesso de estoque. Além disso, a produção em pequena escala permite um maior controle sobre a qualidade e as condições de trabalho.\n\nAlgumas marcas também estão investindo em programas de reciclagem e reutilização de roupas, incentivando os consumidores a doar peças usadas ou devolvê-las para reciclagem. Essa abordagem fecha o ciclo de vida das roupas e reduz o desperdício.\n\nEm suma, a moda sustentável está transformando a indústria da moda, mostrando que é possível criar roupas bonitas e estilosas sem comprometer o meio ambiente. Essas marcas estão revolucionando o setor e inspirando outras empresas a adotarem práticas mais conscientes.\n",
        image: "https://exemplo.com/imagem-moda-sustentavel.jpg",
        author: {
          name: "Luiza Santos",
          bio: "Luiza Santos é uma entusiasta da moda sustentável e busca promover marcas e práticas eco-friendly. Ela acredita que a moda pode ser uma forma de expressão e cuidado com o planeta ao mesmo tempo."
        },
        reviewer: {
          name: "Carlos Oliveira",
          bio: "Carlos Oliveira é um especialista em moda e tendências. Ele revisa artigos sobre moda sustentável, fornecendo insights sobre as marcas que estão liderando o movimento e promovendo práticas eco-friendly."
        },
        postTime: "2023-06-16 15:00",
        revisedTime: "2023-06-16 16:30",
        postTimeAfterRevision: "2023-06-16 16:45"
      },
    ]


const MoreRead = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="Read">
                <div className="title-read">
                    <h2>Mais Lidas</h2>
                </div>
                <ul className="More-Read">
                   {articlesTop.map((article,index) => (
                    <li key={index} onClick={() => HandleShowArticle({ article: article, navigate })}>
                        <span>{article.id}</span>
                        <p>{article.title}</p>
                    </li>
                   ))}
                </ul>
            </div>
    )
}

export default MoreRead;