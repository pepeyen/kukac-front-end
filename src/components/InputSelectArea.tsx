import React from 'react';

interface IProps{
    children: React.ReactNode
};

const InputSelectArea: React.FC<IProps> = (props: IProps) => {
    return(
        <div
            id="inputSelectArea"
            className="input-block__select-area"
        >
            {props.children}
        </div>
    );
};

export default InputSelectArea;