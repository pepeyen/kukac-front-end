import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    children: React.ReactNode,
    redirectTo: string,
    isActive: boolean
};

const NavbarRedirector: React.FC<IProps> = (props: IProps) => {
    return(
        <Link
            className={props.isActive ? "navbar__redirector --active-redirector" : "navbar__redirector"}
            to={props.redirectTo}
        >
            {props.children}
        </Link>
    );
};

export default NavbarRedirector;