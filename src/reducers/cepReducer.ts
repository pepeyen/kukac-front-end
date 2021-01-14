interface CepObject {
    cepValue: string,
    cepBlockId: number
};

interface Cep {
    type: string,
    cep: CepObject
};

export const cepReducer = (state: CepObject[] = [], action: Cep) => {
    switch(action.type){
        case 'REGISTER_CEP':
            return state.push(action.cep);
        default:
            return state;
    };
};