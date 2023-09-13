import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    return(
        <motion.section className="section-login"
        initial={{ transform: "translateX(-50%"}}
        animate={{ transform: "translateX(0%"}}
        exit={{ transition : {duration: 1}}}
      >
        <div className='content-login'>
                <div className="content-text">
                    <h2> Bem-vindo de Volta! Faça o Login e Acesse as Últimas Notícias!</h2>
                    <h3>
                    Não perca mais tempo! Faça o login e comece sua jornada de descoberta e informação conosco. Se você ainda não tem uma conta, aproveite para criar uma e desfrutar de todos os nossos recursos.
                    </h3>
                    <p>É ótimo ter você de volta à nossa comunidade de notícias! Faça o login em sua conta para explorar conteúdos exclusivos, atualizações de última hora e artigos envolventes sobre os tópicos que lhe interessam. Estamos prontos para mantê-lo informado e inspirado. </p>
                </div>
                    <figure>
                        <div></div>
                    </figure>
        </div>

            <form>
                <div className="title">
                    <h2>Login</h2>
                </div>

                <div className="input-br">
                    <LoginIcon className='iconLogin' />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="password" placeholder="Ex: email@gmail.com" />
                </div>
                <div className="input-br">
                    < PasswordIcon className='iconPas' />
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua Senha" />
                    <RemoveRedEyeIcon className='showEye' />
                    <VisibilityOffIcon className='CloseEye' />
                </div>

                <div className="pass-option">
                    <div className="select-put">
                        <input type="checkbox"/>
                        <label>Salvar Conta</label>
                        <span></span>
                    </div>

                    <div className="reset-conta">
                        <Link to="/Recuperar-Conta">
                         <p>Esqueci Senha</p>     
                        </Link>
                    </div>
                </div>

                <div className="btns">
                    <button type="submit">Fazer Login</button>
                    <div className='or'>
                        <span></span>
                        <p>ou</p>
                        <span></span>
                    </div>
                    <Link to="/Criar-Conta">
                        <p>criar Conta</p>
                    </Link>
                </div>
            </form>

        </motion.section>
    )
}

export default LoginPage;