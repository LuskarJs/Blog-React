import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import './Componentes/header/header';
import App from './App';
import CategoryFeed from './Componentes/category/category';
import Feed from './Componentes/feed/feed';
import reportWebVitals from './reportWebVitals';
import News from './Componentes/news/news';
import LoginPage from "./Componentes/conta/L-Account";
import CreatePage from "./Componentes/conta/C-Account";
import ForgetInput from "./Componentes/conta/forget";
import ShowArticle from './Componentes/showArticle/ArticleSee';
import SeeCategory from './Componentes/ShowCategory/SeeCategory';
import ArticleForm from "./Componentes/SendArticle/ArticleForm";
import ViewStorie from './Componentes/WebStories/viewStorie';
import AllStorie from './Componentes/WebStories/allStory';
const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Feed />} />
          <Route path="/Noticias" element={<News />} />
          <Route path="/Categorias" element={<CategoryFeed />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Criar-Conta" element={<CreatePage />} />
          <Route path="/Recuperar-Conta" element={<ForgetInput />} />
          <Route path="/artigo/:titulo" element={<ShowArticle />} />
          <Route path="/storie/:titulo" element={<ViewStorie />} />
          <Route path="/Categoria/:Category" element={<SeeCategory />} />
          <Route path="/Enviar-Artigo" element={<ArticleForm />} />
          <Route path="/Todos-Stories" element={<AllStorie />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);

reportWebVitals();
