import React from 'react';

type OnClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

interface IProps {
    onClick: OnClick,
    buttonText: string,
    isDisabled?: boolean
};

const InputSubmit: React.FC<IProps> = (props: IProps) => {
    return(
        <button
            className="input-block__submit"
            onClick={props.onClick}
        disabled={props.isDisabled ? true : undefined}>
            {props.buttonText}
        </button>
    );
};

export default InputSubmit;