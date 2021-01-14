export const cepConverter = (cep: string): string => {
    if(cep !== '') {
        const regex = /^([\d]{2})\.?([\d]{3})-?([\d]{3})/;

        if(regex.test(cep)){
            cep = cep.replace(regex,"$1.$2-$3");
        }else{
            cep = cep.replace(/[^0-9]/g,"");
        }
    }

    return cep;
};