export const registerCep = (cepValue: string, cepBlockId: number) => {
    return {
        type: 'REGISTER_CEP',
        cep: {
            cepValue: cepValue,
            cepBlockId: cepBlockId
        }
    };
};