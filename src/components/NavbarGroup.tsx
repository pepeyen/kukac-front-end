import React from 'react';

interface IProps {
    children: React.ReactNode,
    horizontalAlignment?: string
};


const NavbarGroup: React.FC<IProps> = (props: IProps) => {
    return(
        <div className={`navbar__group --${props.horizontalAlignment}-aligned-group`}>
            {props.children}
        </div>
    );
};

export default NavbarGroup;