import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import LoginIcon from '@mui/icons-material/Login';

const ForgetInput = () => {

    return(
        <motion.section className="section-Forget"
        initial={{ transform: "translateX(-50%"}}
        animate={{ transform: "translateX(0%"}}
        exit={{ transition : {duration: 1}}}
      >

            <div className='content-forget'>
                            <div className="content-text">
                                <h2> Recupere o Acesso à sua Conta! Redefina sua Senha com Facilidade.</h2>
                                <h3>
                                Perdeu sua senha? Não se preocupe. Nossa plataforma oferece um processo simples de recuperação de senha para garantir que você volte a acessar nossas últimas notícias em pouco tempo.
                                </h3>
                                <p>Nosso processo de recuperação é projetado para garantir a segurança dos seus dados. Você está a apenas alguns passos de voltar a desfrutar das últimas informações e artigos envolventes </p>
                            </div>
                                <figure>
                                    <div></div>
                                </figure>
            </div>

            <form>

                <div className="input-br">
                    <LoginIcon className='iconLogin' />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="password" placeholder="Ex: email@gmail.com" />
                </div>
               
                <div className="btns">
                    <button type="submit">Recuperar Conta</button>
                    <Link to ="/Login">
                        <p>Fazer Login</p>
                    </Link>
                </div>
            </form>

        </motion.section>
    )
}

export default ForgetInput;