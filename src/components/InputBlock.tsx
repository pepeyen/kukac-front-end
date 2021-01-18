import React from 'react';

interface IProps {
    children: React.ReactNode
};

const InputBlock: React.FC<IProps> = (props: IProps) => {
    return(
        <div className="input-block">
            {props.children}
        </div>
    );
};

export default InputBlock;