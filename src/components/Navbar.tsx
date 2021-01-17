import React, {
    useState,
    useEffect
} from 'react';
import { useLocation } from 'react-router-dom';

//Components
import {
    NavbarGroup,
    NavbarLogo,
    NavbarRedirector
} from './index';

//Services
import { renderNavbarHamburguer } from '../services';

interface IWindowSizeState {
    width: number,
    height: number
};

const Navbar: React.FC = () => {
    const maxNavbarThreshold = 906;
    const location  = useLocation();
    const [windowSize, setWindowSize] = useState<IWindowSizeState>();

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if(windowSize?.width && windowSize.width <= maxNavbarThreshold){
        renderNavbarHamburguer(true);
    }else{
        renderNavbarHamburguer(false);
    }

    return(
        <nav
            id="navbar"
            className="navbar"
        >
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