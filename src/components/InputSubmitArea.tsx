import React from 'react';

interface IProps{
    children: React.ReactNode
};

const InputSubmitArea: React.FC<IProps> = (props: IProps) => {
    return(
        <div
            id="inputSubmitArea"
            className="input-block__submit-area"
        >
            {props.children}
        </div>
    );
};

export default InputSubmitArea;