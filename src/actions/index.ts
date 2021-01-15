export const registerCep = (cepValue: string, cepBlockId: number) => {
    return {
        type: 'REGISTER_CEP',
        cep: {
            cepValue: cepValue,
            cepBlockId: cepBlockId
        }
    };
};

export const removeCep = (cepBlockId: number) => {
    return {
        type: 'REMOVE_CEP',
        cep: {
            cepBlockId: cepBlockId
        }
    };
};

export const increaseCepCounter = () => {
    return {
        type: 'INCREASE_CEP_COUNTER'
    };
};

export const decreaseCepCounter = () => {
    return {
        type: 'DECREASE_CEP_COUNTER'
    };
};