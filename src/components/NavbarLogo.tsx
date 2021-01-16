import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    children: React.ReactNode,
    logoType: string,
    redirectTo: string,
    horizontalAlignment?: string,
    isActive: boolean
};

const NavbarLogo: React.FC<IProps> = (props: IProps) => {
    return(
        <Link
            className={props.isActive ? `navbar__logo --${props.logoType}-logo --${props.horizontalAlignment}-aligned-group --active-logo` : 
                                        `navbar__logo --${props.logoType}-logo --${props.horizontalAlignment}-aligned-group`}
            to={props.redirectTo}
        >
            {props.children}
        </Link>
    );
};

export default NavbarLogo;