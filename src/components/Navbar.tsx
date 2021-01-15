import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return(
        <nav>
            <Link to="/questoes">Questões</Link>
            <Link to="/questoes/primeira">Primeira Questão</Link>
            <Link to="/questoes/segunda">Segunda Questão</Link>
            <Link to="/questoes/terceira">Terceira Questão</Link>
            <Link to="/questoes/quarta">Quarta Questão</Link>
        </nav>
    );
};

export default Navbar;