import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const  CreatePage = () => {

    return(
        <motion.section className="section-create"
        initial={{ transform: "translateX(-50%"}}
        animate={{ transform: "translateX(0%"}}
        exit={{ transition : {duration: 1}}}>
            <div className='content-create'>
                <div className="content-text">
                    <h2>Seja Parte da Comunidade de Notícias! Crie Sua Conta Hoje! </h2>
                    <h3>Você adora estar por dentro das últimas novidades e acontecimentos?</h3>
                    <p> Nosso blog de notícias é o lugar ideal para você! Ao criar uma conta, você terá acesso exclusivo a uma variedade de conteúdos informativos, análises aprofundadas e artigos envolventes sobre os tópicos que mais lhe interessam.</p>
                </div>
                    <figure>
                        <div></div>
                    </figure>
            </div>

            <form method='POST'>
                <div className="title">
                    <h2>Crie Sua Conta</h2>
                </div>
                <div class="info-name">
                    <div className="input-br">
                        <label for="email">Nome</label>
                        <input type="email" id="email" name="password" placeholder="Ex: email@gmail.com" />
                    </div>
                    <div className="input-br">
                        <label for="email">Sobrenome</label>
                        <input type="email" id="email" name="password" placeholder="Ex: email@gmail.com" />
                    </div>
                </div>

                <div className="input-br">
                    <LoginIcon className='iconLogin' />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="password" placeholder="Ex: email@gmail.com" />
                </div>
                <div className="input-br">
                    <LoginIcon className='iconLogin' />
                    <label for="email">Confirma Email</label>
                    <input type="email" id="email" name="password" placeholder="Ex: email@gmail.com" />
                </div>
                <div className="input-br">
                    < PasswordIcon className='iconPas' />
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua Senha" />
                    <RemoveRedEyeIcon className='showEye' />
                    <VisibilityOffIcon className='CloseEye' />
                </div>
                <div className="input-br">
                    < PasswordIcon className='iconPas' />
                    <label for="password">Confirma Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua Senha" />
                    <RemoveRedEyeIcon className='showEye' />
                    <VisibilityOffIcon className='CloseEye' />
                </div>

                <div className="btns">
                    <button type="submit">Criar Conta</button>
                    <div className='or'>
                        <span></span>
                        <p>ou</p>
                        <span></span>
                    </div>
                    <Link to ="/Login">
                        <p>Fazer Login</p>
                    </Link>
                </div>
            </form>

        </motion.section>
    )
}

export default CreatePage;