import React from 'react';

interface IProps {
    bubbleValue: string | number,
    bubbleKey?: number,
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void
};

const Bubble: React.FC<IProps> = (props: IProps) => {
    return(
        <li
            key={props.bubbleKey ? props.bubbleKey : undefined}
            className="bubble__item --thin-borders --rounded-borders"
            onClick={props.onClick ? props.onClick : undefined}
        >
            <textarea
                value={props.bubbleValue}
            readOnly/>
        </li>
    );
};

export default Bubble;