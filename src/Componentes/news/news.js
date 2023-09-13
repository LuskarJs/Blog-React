import "./news.css";
import FeedArray from "../SliderSection/FeedArray";
import {motion} from "framer-motion";
import { useLocation,useNavigate } from 'react-router-dom';
import {HandleShowArticle} from '../FeedSlider/FeedArticles';
export const articles = [
        
            {
              id: 3,
                title: 'Os benefícios do exercício físico para a saúde mental',
                category: 'Saúde',
                summary: 'Praticar exercícios físicos regularmente não traz apenas benefícios para o corpo, mas também para a saúde mental. Estudos científicos demonstraram que a atividade física regular pode ter um impacto positivo na saúde mental, melhorando o humor, reduzindo o estresse e ajudando no tratamento de condições como a depressão e a ansiedade.',
                content: 'Quando nos exercitamos, nosso corpo libera endorfinas, neurotransmissores responsáveis pela sensação de prazer e bem-estar. Além disso, o exercício físico ajuda a reduzir os níveis de cortisol, o hormônio do estresse, e estimula a produção de substâncias químicas no cérebro que estão associadas ao humor positivo. Esses efeitos combinados podem melhorar significativamente a saúde mental e ajudar no tratamento de transtornos mentais. Por isso, incluir atividades físicas na rotina diária é uma estratégia importante para cuidar da saúde mental e alcançar um equilíbrio emocional.\n\nEstudos científicos têm demonstrado consistentemente os benefícios do exercício físico para a saúde mental. Uma pesquisa recente publicada na revista "Psychosomatic Medicine" mostrou que a prática regular de exercícios aeróbicos, como caminhar, correr ou nadar, está associada a uma redução significativa dos sintomas de ansiedade e depressão. Outro estudo publicado no "Journal of Clinical Psychiatry" mostrou que a atividade física regular pode ser tão eficaz quanto a terapia medicamentosa no tratamento da depressão leve a moderada. Além disso, o exercício físico também pode melhorar a qualidade do sono, aumentar a autoestima e a confiança, promover o relaxamento e aliviar a tensão muscular.\n\nA prática regular de atividades físicas também pode servir como uma forma de distração positiva, ajudando a reduzir os pensamentos negativos e a ruminação mental. É importante ressaltar que cada pessoa é única, e o tipo e a intensidade do exercício podem variar de acordo com as preferências individuais e as condições físicas. Consultar um profissional de saúde, como um médico ou um educador físico, é fundamental antes de iniciar qualquer programa de exercícios, especialmente para pessoas com condições de saúde preexistentes.\n\nPortanto, se você busca melhorar sua saúde mental e emocional, considere incluir atividades físicas em sua rotina diária. Comece com atividades que você goste e que sejam adequadas ao seu nível de condicionamento físico. Os benefícios para a saúde mental são inúmeros, e você estará cuidando do seu bem-estar de maneira holística.',
                image: 'https://source.unsplash.com/featured/300x229',
                author: {
                  name: 'Dr. Ricardo Almeida',
                  bio: 'Dr. Ricardo Almeida é um renomado psiquiatra especializado em saúde mental e bem-estar. Ele possui vasta experiência no estudo dos efeitos do exercício físico na saúde mental e tem publicado diversos artigos científicos sobre o assunto. Como defensor da abordagem holística, ele enfatiza a importância da atividade física na promoção do equilíbrio emocional.'
                },
                reviewer: {
                  name: 'Dr. Camila Torres',
                  bio: 'Dr. Camila Torres é uma psicóloga clínica com foco em terapia cognitivo-comportamental. Como revisora do artigo, ela analisou a base científica e os estudos citados, garantindo a precisão e confiabilidade das informações apresentadas sobre os benefícios do exercício físico para a saúde mental. Sua experiência clínica contribuiu para uma abordagem equilibrada e embasada no tema.'
                },
                postTime: '2023-06-18 14:00',
                revisedTime: '2023-06-18 12:15',
                postTimeAfterRevision: '2023-06-18 15:30'
              },
            {
              id: 4,
                title: 'Novas descobertas arqueológicas revelam segredos da civilização antiga',
                category: 'Arqueologia',
                summary: 'Recentes descobertas arqueológicas estão lançando luz sobre os mistérios e segredos das civilizações antigas. Escavações em sítios arqueológicos ao redor do mundo revelaram artefatos, ruínas e inscrições que estão ajudando os arqueólogos a desvendar o passado e compreender melhor as sociedades que existiram há milhares de anos.',
                content: 'As descobertas incluem achados impressionantes, como templos, palácios, túmulos e cidades inteiras preservadas pelo tempo. Essas evidências arqueológicas estão fornecendo insights sobre a vida cotidiana, a cultura, a religião e as realizações tecnológicas das antigas civilizações. Além disso, a análise de artefatos como cerâmicas, ferramentas, pinturas e joias está revelando informações valiosas sobre as técnicas de produção, o comércio e as interações entre diferentes grupos culturais. As novas descobertas arqueológicas estão transformando nossa compreensão do passado e contribuindo para a preservação do patrimônio cultural da humanidade.\n\nRecentemente, uma expedição arqueológica na região da Mesopotâmia revelou um palácio sumério bem preservado, datado de cerca de 4.000 a.C. O palácio, ricamente decorado e contendo uma série de inscrições cuneiformes, oferece uma visão fascinante da organização política e social da civilização suméria. Os arqueólogos também descobriram um sistema de canais de irrigação avançado, evidência do domínio sumério sobre a agricultura e o desenvolvimento urbano.\n\nOutro sítio arqueológico significativo é a antiga cidade maia de Tikal, na Guatemala. Escavações recentes revelaram uma pirâmide até então desconhecida, bem como uma série de edifícios e artefatos que ajudam a desvendar os rituais e a cosmologia maia. Essas descobertas estão lançando nova luz sobre a organização política e religiosa da civilização maia, bem como sua influência nas regiões vizinhas.\n\nNa região do Vale do Indo, no atual Paquistão, arqueólogos descobriram evidências de uma cidade antiga chamada Mohenjo-daro, que remonta a aproximadamente 2.600 a.C. A cidade, cuidadosamente planejada e equipada com um sistema avançado de drenagem, oferece insights sobre as práticas urbanas e sociais da antiga civilização do Vale do Indo. Esculturas, selos de argila e objetos de cerâmica encontrados no local revelam uma cultura rica e complexa.\n\nEsses são apenas alguns exemplos das emocionantes descobertas arqueológicas que estão ocorrendo ao redor do mundo. Os arqueólogos estão continuamente trabalhando para desvendar os segredos das civilizações antigas, e cada nova descoberta amplia nosso conhecimento sobre a história humana. Esses avanços na arqueologia nos permitem compreender melhor as raízes de nossa própria cultura e preservar o legado das civilizações passadas para as gerações futuras.',
                    image: 'https://source.unsplash.com/featured/300x289',
                    author: {
                      name: 'Dra. Sofia Mendonça',
                      bio: 'Dra. Sofia Mendonça é uma renomada arqueóloga e professora universitária especializada em civilizações antigas. Com vasta experiência em escavações e análise de artefatos, ela tem contribuído significativamente para a pesquisa arqueológica e a compreensão das sociedades antigas. Suas descobertas e publicações têm impactado o campo da arqueologia de maneira substancial.'
                    },
                    reviewer: {
                      name: 'Dr. André Silva',
                      bio: 'Dr. André Silva é um arqueólogo especializado em análise de dados e interpretação arqueológica. Como revisor do artigo, ele verificou a precisão histórica e científica das informações apresentadas, garantindo a validade das descobertas arqueológicas mencionadas. Sua experiência no campo da arqueologia contribuiu para a revisão crítica e embasada do texto.'
                    },
                    postTime: '2023-06-18 15:00',
                    revisedTime: '2023-06-18 13:45',
                    postTimeAfterRevision: '2023-06-18 16:30'
                  } ,
            {
              id: 5,
                title: 'As tendências de moda para a próxima temporada primavera e verão',
                category: 'Moda',
                summary: 'A indústria da moda está sempre em constante evolução, e novas tendências surgem a cada temporada. Para a próxima primavera/verão, designers e estilistas estão trazendo propostas inovadoras e ousadas, com destaque para cores vibrantes, estampas marcantes e silhuetas versáteis.',
                content: 'As passarelas internacionais revelaram uma variedade de estilos e inspirações para a próxima temporada. Cores como amarelo vibrante, laranja cítrico e tons pastel estão dominando as coleções, trazendo uma sensação de frescor e alegria. As estampas estão mais ousadas do que nunca, com florais exuberantes, listras em negrito e padrões geométricos. Além disso, as silhuetas estão mais fluidas e confortáveis, com tecidos leves e cortes modernos que valorizam a liberdade de movimento.\n\nUma das principais tendências para a próxima temporada é a mistura de estampas. Os designers estão combinando diferentes padrões em uma única peça, criando looks únicos e cheios de personalidade. Xadrez com floral, listras com poá e animal print com geometria são apenas algumas das combinações inusitadas que estão aparecendo nas passarelas.\n\nOutra tendência forte são as peças oversized. As roupas largas e amplas estão ganhando destaque, proporcionando conforto e estilo. Camisetas, casacos e calças largas são peças-chave nessa tendência, que valoriza a liberdade de movimento e a descontração.\n\nOs anos 90 continuam influenciando a moda, com destaque para as peças de alfaiataria. Blazers e calças de cintura alta estão em alta, trazendo um ar sofisticado e elegante para os looks. Além disso, tecidos como linho e algodão estão sendo bastante utilizados, proporcionando frescor e leveza nas peças.\n\nNo que diz respeito aos acessórios, os brincos statement são uma aposta certeira. Maxibrincos com designs ousados e detalhes coloridos estão complementando os looks de forma impactante. Bolsas em formatos diferenciados, como bolsas de palha e pochetes, também são tendência e adicionam um toque de estilo aos visuais.\n\nPara completar, a moda sustentável está ganhando cada vez mais espaço. Materiais reciclados, processos de produção conscientes e marcas com propósito estão se destacando na indústria da moda. A preocupação com o meio ambiente e a busca por uma moda mais ética são tendências que vieram para ficar.\n\nEssas são apenas algumas das tendências que estão por vir na próxima temporada primavera/verão. Os designers e estilistas estão trazendo propostas inovadoras e ousadas, oferecendo opções para todos os estilos e gostos. Esteja pronto para experimentar novas cores, estampas e silhuetas, e divirta-se com a moda nessa temporada vibrante e cheia de estilo.',
                image: 'https://source.unsplash.com/featured/300x219',
                author: {
                  name: 'Carolina Oliveira',
                  bio: 'Carolina Oliveira é uma influenciadora digital e blogueira de moda reconhecida internacionalmente. Com seu olhar apurado para as tendências e seu estilo único, ela é uma referência no mundo da moda. Seu blog e suas redes sociais são fontes de inspiração para milhões de seguidores ávidos por novidades fashion.'
                },
                reviewer: {
                  name: 'Julia Santos',
                  bio: 'Julia Santos é uma estilista renomada e especialista em tendências de moda. Como revisora do artigo, ela analisou as propostas apresentadas e avaliou sua relevância e impacto no cenário da moda. Sua experiência no campo da moda contribuiu para garantir a precisão e atualidade das informações sobre as tendências da próxima temporada.'
                },
                postTime: '2023-06-18 16:00',
                revisedTime: '2023-06-18 14:30',
                postTimeAfterRevision: '2023-06-18 17:45'
              },
              {
                id: 6,
                  title: 'As tendências de moda para a próxima temporada primavera e verão',
                  category: 'Moda',
                  summary: 'A indústria da moda está sempre em constante evolução, e novas tendências surgem a cada temporada. Para a próxima primavera/verão, designers e estilistas estão trazendo propostas inovadoras e ousadas, com destaque para cores vibrantes, estampas marcantes e silhuetas versáteis.',
                  content: 'As passarelas internacionais revelaram uma variedade de estilos e inspirações para a próxima temporada. Cores como amarelo vibrante, laranja cítrico e tons pastel estão dominando as coleções, trazendo uma sensação de frescor e alegria. As estampas estão mais ousadas do que nunca, com florais exuberantes, listras em negrito e padrões geométricos. Além disso, as silhuetas estão mais fluidas e confortáveis, com tecidos leves e cortes modernos que valorizam a liberdade de movimento.\n\nUma das principais tendências para a próxima temporada é a mistura de estampas. Os designers estão combinando diferentes padrões em uma única peça, criando looks únicos e cheios de personalidade. Xadrez com floral, listras com poá e animal print com geometria são apenas algumas das combinações inusitadas que estão aparecendo nas passarelas.\n\nOutra tendência forte são as peças oversized. As roupas largas e amplas estão ganhando destaque, proporcionando conforto e estilo. Camisetas, casacos e calças largas são peças-chave nessa tendência, que valoriza a liberdade de movimento e a descontração.\n\nOs anos 90 continuam influenciando a moda, com destaque para as peças de alfaiataria. Blazers e calças de cintura alta estão em alta, trazendo um ar sofisticado e elegante para os looks. Além disso, tecidos como linho e algodão estão sendo bastante utilizados, proporcionando frescor e leveza nas peças.\n\nNo que diz respeito aos acessórios, os brincos statement são uma aposta certeira. Maxibrincos com designs ousados e detalhes coloridos estão complementando os looks de forma impactante. Bolsas em formatos diferenciados, como bolsas de palha e pochetes, também são tendência e adicionam um toque de estilo aos visuais.\n\nPara completar, a moda sustentável está ganhando cada vez mais espaço. Materiais reciclados, processos de produção conscientes e marcas com propósito estão se destacando na indústria da moda. A preocupação com o meio ambiente e a busca por uma moda mais ética são tendências que vieram para ficar.\n\nEssas são apenas algumas das tendências que estão por vir na próxima temporada primavera/verão. Os designers e estilistas estão trazendo propostas inovadoras e ousadas, oferecendo opções para todos os estilos e gostos. Esteja pronto para experimentar novas cores, estampas e silhuetas, e divirta-se com a moda nessa temporada vibrante e cheia de estilo.',
                  image: 'https://source.unsplash.com/featured/300x219',
                  author: {
                    name: 'Carolina Oliveira',
                    bio: 'Carolina Oliveira é uma influenciadora digital e blogueira de moda reconhecida internacionalmente. Com seu olhar apurado para as tendências e seu estilo único, ela é uma referência no mundo da moda. Seu blog e suas redes sociais são fontes de inspiração para milhões de seguidores ávidos por novidades fashion.'
                  },
                  reviewer: {
                    name: 'Julia Santos',
                    bio: 'Julia Santos é uma estilista renomada e especialista em tendências de moda. Como revisora do artigo, ela analisou as propostas apresentadas e avaliou sua relevância e impacto no cenário da moda. Sua experiência no campo da moda contribuiu para garantir a precisão e atualidade das informações sobre as tendências da próxima temporada.'
                  },
                  postTime: '2023-06-18 16:00',
                  revisedTime: '2023-06-18 14:30',
                  postTimeAfterRevision: '2023-06-18 17:45'
                }                  
      ];
const News = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

    return(
        <motion.section
        initial={{ transform: "translateX(-50%"}}
        animate={{ transform: "translateX(0%"}}
        exit={{ transition : {duration: 100}}}
        >
            <div className="content-wrapper">
                <div className="NewsFeed">
                    {articles.map((articles, index) => (
                        <div class="Card-article" key={index} onClick={() => HandleShowArticle({ article: articles, navigate })}>
                            <figure>
                                <img src={articles.image} alt={articles.title} />
                            </figure>
                            <div class="Card-info">
                                <h2>{articles.title}</h2>
                                <h3>{articles.summary}</h3>
                            </div>
                        </div>        
                    ))}
                </div>
                <FeedArray/>
                
            </div>
        </motion.section>
    )
}

export default News;