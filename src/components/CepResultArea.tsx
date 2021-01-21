import React from 'react';
import { useDispatch } from 'react-redux';

//Actions
import {
    removeCep,
    decreaseCepCounter
} from '../actions';

interface ICepInfo{
    erro?: boolean,
    cep?: string,
    logradouro?: string,
    complemento?: string,
    bairro?: string,
    localidade?: string,
    uf?: string,
    ibge?: string,
    gia?: string,
    ddd?: string,
    siafi?: string
};

interface ICepResult{
    cepBlockId: number,
    cepInfo: ICepInfo
};

interface IProps{
    cepResultList: ICepResult[],
    errorMessage?: string
};

const CepResultArea: React.FC<IProps> = (props: IProps) => {
    const dispatch = useDispatch();

    const removeCepBlock = (cepCounter: number): void => {
        dispatch(removeCep(cepCounter));
		dispatch(decreaseCepCounter());
    };
    
    if(props.cepResultList.length > 0){
        return(
            <ul className="cep-results">
                {props.cepResultList.map(cepResult => {
                    return(
                        <li
                            key={cepResult.cepBlockId}
                            className="cep-results__item --thin-borders --rounded-borders"
                        >
                            <ul className="cep-results__info-list">
                                {
                                    Object.entries(cepResult.cepInfo).map(([index, value], key) => {
                                        if(value !== ''){
                                            return(
                                                <li
                                                    className="cep-results__info"
                                                    key={(key + 1) * 10}
                                                >
                                                    <p>{index.toUpperCase()} <span>{value}</span></p>
                                                </li>
                                            );
                                        }else{
                                            return null;
                                        }
                                    })
                                }
                            </ul>
                            <button
                                className="cep-results__button"
                                onClick={(() => removeCepBlock(cepResult.cepBlockId))}
                            >
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512.001 512.001"
                                >
                                    <path
                                        d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
                                        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
                                        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
                                        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
                                        L284.286,256.002z"
                                        fill="#403F3F"
                                    />
                                </svg>
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }else{
        if(props.errorMessage !== ''){
            return(
                <h3 className="page__feedback">{props.errorMessage}</h3>
            );
        }else{
            return null;
        }
    } 
};

export default CepResultArea;