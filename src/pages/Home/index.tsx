import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import Logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return(
     <div id="page-home">
       <div className="content">
         <header>
           <img src={Logo} alt="Reciclagem"/>
         </header>

         <main>
           <h1>Coleta Seletiva e reciclagem em geral.</h1>
           <p>Reciclagem de materiais diversos, tais como, pael, plástico, vidro, metal, pilhas, lixo eletrônico entre outros.</p>

           <Link to="/create-location">
             <span><FiLogIn/></span>
             <strong>Cadastrar novo local de coleta</strong>
           </Link>
         </main>
       </div>
     </div>
  );
}

export default Home;