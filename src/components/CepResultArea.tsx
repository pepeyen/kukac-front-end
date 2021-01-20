import React from 'react';
import { useDispatch } from 'react-redux';

//Actions
import {
    removeCep,
    decreaseCepCounter
} from '../actions';

//Componets
import { InputSubmit } from '../components';

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
            <div>
                <ul>
                    {props.cepResultList.map(cepResult => {
                        return(
                            <li key={cepResult.cepBlockId}>
                                <span>
                                    {
                                        Object.entries(cepResult.cepInfo).map(([index, value], key) => {
                                            if(value !== ''){
                                                return(
                                                    <p key={key}>{index.toUpperCase()}: {value}</p>
                                                );
                                            }else{
                                                return null;
                                            }
                                        })
                                    }
                                    <InputSubmit
                                        onClick={(() => removeCepBlock(cepResult.cepBlockId))}
                                        buttonText="Remover CEP"
                                    />
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
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