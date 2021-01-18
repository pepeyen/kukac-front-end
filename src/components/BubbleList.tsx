import React from 'react';

interface IProps {
    children: React.ReactNode
};

const BubbleList: React.FC<IProps> = (props: IProps) => {
    return(
        <ul className="bubble__list">
            {props.children}
        </ul>
    );
};

export default BubbleList;