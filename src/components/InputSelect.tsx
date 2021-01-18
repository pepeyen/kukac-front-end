import React from 'react';

type OnChange = (event: React.ChangeEvent<HTMLSelectElement>) => void;

interface IProps{
    children: React.ReactNode,
    selectId: string,
    selectLabelText?: string,
    onChange: OnChange
};

const InputSelect: React.FC<IProps> = (props: IProps) => {
    return(
        <React.Fragment>
            {props.selectLabelText ? <label htmlFor={props.selectId}>{props.selectLabelText}</label> : null}
            <select
                id={props.selectId}
                className="input-block__select"
                name={props.selectId}
                onChange={props.onChange}
            >
                {props.children}
            </select>
        </React.Fragment>
    );
};

export default InputSelect;