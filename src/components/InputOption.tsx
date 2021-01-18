import React from 'react';

interface IProps{
    optionValue: string,
    optionText: string
};

const InputOption: React.FC<IProps> = (props: IProps) => {
    return(
        <option
            className="input-block__option"
            value={props.optionValue}
        >
            {props.optionText}
        </option>
    );
};

export default InputOption;