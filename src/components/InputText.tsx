import React from 'react';

type OnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => void;

interface IProps {
    onKeyUp?: OnKeyUp,
    inputType: string,
    labelText: string,
    numMinValue?: number,
    numMaxValue?: number,
    stepMinRange?: number,
    isDisabled?: boolean,
    textMaxLength?: number,
    inputTextId?: string
};

const InputText: React.FC<IProps> = (props: IProps) => {
    return(
        <div
            className="input-block__text"
            id={props.inputTextId ? props.inputTextId : undefined}
        >
            {props.inputType === 'number' ?
                <input
                    type={props.inputType}
                    onKeyUp={props.onKeyUp}
                    name={props.labelText}
                    min={props.numMinValue ? props.numMinValue : undefined}
                    max={props.numMaxValue ? props.numMaxValue : undefined}
                    step={props.stepMinRange ? props.stepMinRange : undefined}
                    defaultValue={!props.isDisabled ? props.numMinValue ? props.numMinValue : undefined : undefined}
                disabled={props.isDisabled ? true : undefined}/>
                :
                <input
                    type={props.inputType}
                    onKeyUp={props.onKeyUp}
                    name={props.labelText}
                    maxLength={props.textMaxLength ? props.textMaxLength : undefined}
                disabled={props.isDisabled ? true : undefined}/>
            }
            <label>{props.labelText}</label>
        </div>
    );
};

export default InputText;