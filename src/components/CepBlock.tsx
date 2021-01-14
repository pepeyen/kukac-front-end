import React from 'react';
import { useDispatch } from 'react-redux';

//Actions
import { registerCep } from '../actions';

//Services
import { cepConverter } from '../services';

type Props = {
    cepBlockID: number
};

const CepBlock: React.FC<Props> = (props: Props) => {
    const dispatch = useDispatch();

    const registerCepBlock = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
        event.preventDefault();

        const targetCepBlock = document.getElementById(`inputBlock${props.cepBlockID}`) as HTMLDivElement;

        Object.values(targetCepBlock.childNodes).forEach((element, index) => {
            if(element.nodeName === 'INPUT'){   
                let inputValue: string = (element as HTMLInputElement).value;

                if(inputValue.length === 10){
                    dispatch(registerCep(inputValue.replace(/[^0-9]/g,""), index));
                }
            };
        });
    };

    const liveFormatCepBlock = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        event.currentTarget.value = cepConverter(event.currentTarget.value);
    };

    return(
        <React.Fragment>
            <div
                id={`inputBlock${props.cepBlockID}`}
                className="input__block"
            >
                <input
                    type='text'
                    maxLength={8}
                    onKeyUp={liveFormatCepBlock}
                />
                <label>CEP</label>
            </div>
            <button
                className="input__button"
                onClick={registerCepBlock}
            >
                Registrar CEP
            </button>
        </React.Fragment>
    );
};

export default CepBlock;