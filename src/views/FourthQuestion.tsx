import React, { useState } from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

//Actions
import {
    registerCep,
    increaseCepCounter
} from '../actions';

//Componets
import {
	CepResultArea,
	Page,
    InputBlock,
    InputText,
    InputTextArea,
    InputSubmit,
    InputSubmitArea
} from '../components';

//Services
import { cepConverter } from '../services';

const FourthQuestion: React.FC = () => {
	const dispatch = useDispatch();
	const [cepCounter, setCepCounter] = useState(0);
	const cepResultList = (state: any) => state.cepList;
	const cepResults = useSelector(cepResultList);
	const maxCepCounter = 4;
	console.log(cepResults)
    const registerCepBlock = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
		event.preventDefault();
		
        const targetCepBlock = document.getElementById(`inputBlock${cepCounter}`) as HTMLDivElement;

        Object.values(targetCepBlock.childNodes).forEach((element): void => {
            if(element.nodeName === 'INPUT'){   
                let inputValue: string = (element as HTMLInputElement).value;
				
                if(inputValue.length === 10){
                    dispatch(registerCep(inputValue.replace(/[^0-9]/g,""), cepCounter));
					dispatch(increaseCepCounter());
					setCepCounter(cepCounter + 1);
                }
            };
        });
    };

    const liveFormatCepBlock = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        event.currentTarget.value = cepConverter(event.currentTarget.value);
	};

	return(
		<Page title="Resolução">
			<InputBlock>
				<InputTextArea>
					<InputText
						inputTextId={`inputBlock${cepCounter}`}
						inputType='text'
						labelText="CEP"
						textMaxLength={8}
						onKeyUp={liveFormatCepBlock}
					isDisabled={cepCounter > maxCepCounter ? true : false}/>
				</InputTextArea>
				<InputSubmitArea>
					<InputSubmit
						onClick={registerCepBlock}
						buttonText="Registrar CEP"
					isDisabled={cepCounter > maxCepCounter ? true : false}/>
				</InputSubmitArea>
			</InputBlock>
			<CepResultArea cepResultList={cepResults}/>
		</Page>
	);
};

export default FourthQuestion;