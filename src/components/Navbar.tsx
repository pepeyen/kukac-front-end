import React from 'react';
import { useLocation } from 'react-router-dom';

//Components
import {
    NavbarGroup,
    NavbarLogo,
    NavbarRedirector
} from './index';

const Navbar: React.FC = () => {
    const location  = useLocation();

    return(
        <nav className="navbar">
            <NavbarLogo
                redirectTo="/questoes"
                logoType="text"
                horizontalAlignment="right"
                isActive={location.pathname === "/questoes"}
            >
                Questões
            </NavbarLogo>
            <NavbarGroup horizontalAlignment="left">
                <NavbarRedirector
                    redirectTo="/questoes/primeira"
                    isActive={location.pathname === "/questoes/primeira"}
                >
                    Primeira Questão
                </NavbarRedirector>
                <NavbarRedirector
                    redirectTo="/questoes/segunda"
                    isActive={location.pathname === "/questoes/segunda"}
                >
                    Segunda Questão
                </NavbarRedirector>
                <NavbarRedirector
                    redirectTo="/questoes/terceira"
                    isActive={location.pathname === "/questoes/terceira"}
                >
                    Terceira Questão
                </NavbarRedirector>
                <NavbarRedirector
                    redirectTo="/questoes/quarta"
                    isActive={location.pathname === "/questoes/quarta"}
                >
                    Quarta Questão
                </NavbarRedirector>
            </NavbarGroup>
        </nav>
    );
};

export default Navbar;