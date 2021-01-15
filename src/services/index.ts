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

export const removeFromArray = (targetArray: any[], targetValue: any) => {
    for(let i = 0; i < targetArray.length; i++){   
        if(targetArray[i] === targetValue) {
            targetArray.splice(i, 1); 

            i--; 
        }else{
            if(typeof targetArray[i] === 'object'){
                Object.values(targetArray[i]).forEach(value => {
                    if(value === targetValue){
                        targetArray.splice(i, 1); 

                        i--;
                    }
                })
            }
        }
    }

    return targetArray;
};