import React from 'react';

interface IProps{
    children: React.ReactNode
};


const InputTextArea: React.FC<IProps> = (props: IProps) => {
    return(
        <div
            id="inputTextArea"
            className="input-block__text-area"
        >
            {props.children}
        </div>
    );
};

export default InputTextArea;