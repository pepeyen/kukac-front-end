import React from 'react';
import { useDispatch } from 'react-redux';

//Actions
import {
    removeCep,
    decreaseCepCounter
} from '../actions';

//Componets
import { InputSubmit } from '../components';

interface ICepResult{
    cepBlockId: number,
    cepValue: string
};

interface IProps{
    cepResultList: ICepResult[]
};

const CepResultArea: React.FC<IProps> = (props: IProps) => {
    const dispatch = useDispatch();

    const removeCepBlock = (cepCounter: number): void => {
        dispatch(removeCep(cepCounter));
		dispatch(decreaseCepCounter());
    };

    
    if(props.cepResultList.length > 0){
        return(
            <ul>
                {props.cepResultList.map((cepResult, index) => {
                    return(
                        <li key={index}>
                            <span>
                                ID {cepResult.cepBlockId}: {cepResult.cepValue}
                                <InputSubmit
                                    onClick={(() => removeCepBlock(index))}
                                    buttonText="Remover CEP"
                                />
                            </span>
                        </li>
                    );
                })}
            </ul>
        );
    }else{
        return null;
    } 
};

export default CepResultArea;