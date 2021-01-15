interface ICepCounterActionType {
    type: string
};

export const cepCounterReducer = (state: number = 0, action: ICepCounterActionType) => {
    switch(action.type){
        case 'INCREASE_CEP_COUNTER':
            return state = state + 1;

        case 'DECREASE_CEP_COUNTER':
            if(state > 0){
                return state = state - 1;
            }else{
                return state = 0;
            }
            
        default:
            return state;
    };
};