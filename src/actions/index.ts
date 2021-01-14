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