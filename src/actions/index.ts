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

export const registerCep = (cepInfo: ICepInfo, cepBlockId: number) => {
    return {
        type: 'REGISTER_CEP',
        cep: {
            cepInfo: cepInfo,
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