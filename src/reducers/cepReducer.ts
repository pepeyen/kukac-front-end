//Service
import { removeFromArray } from '../services';

interface InsertCepObject {
    cepValue: string,
    cepBlockId: number
};

interface RemoveCepObject {
    cepBlockId: number
};

interface Cep {
    type: string,
    cep: any
};

const findCep = (targetCepBlock: any, currentCepBlock: InsertCepObject): boolean => {
    let searchResult = false;

    if(targetCepBlock){
        targetCepBlock.forEach(cepBlock => {
            Object.entries(cepBlock).forEach((targetCepBlockValue, targetCepBlockIndex) => {
                if(targetCepBlockValue[0] !== 'cepValue' && currentCepBlock[targetCepBlockValue[0]] === targetCepBlockValue[1]){
                    searchResult = cepBlock;
                };
            });
        });
    };

    return searchResult;
};

export const cepReducer = (state: any[] = [], action: Cep): any[] => {
    switch(action.type){
        case 'REGISTER_CEP':
            const nextState = state;
            const insertAction = action.cep as InsertCepObject;

            if(!findCep(nextState, insertAction)){
                nextState.push(insertAction);
            }else{
                nextState[nextState.indexOf(findCep(nextState, insertAction))] = insertAction;
            }

            return nextState;

        case 'REMOVE_CEP':
            let newState = state;
            const removeAction = action.cep as RemoveCepObject;

            newState = removeFromArray(newState, removeAction.cepBlockId);

            return newState;
            
        default:
            return state;
    };
};