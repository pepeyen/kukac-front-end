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
import {
	cepConverter,
	fetchCep
} from '../services';

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

const FourthQuestion: React.FC = () => {
	const dispatch = useDispatch(),
		  cepResults = useSelector((state: any) => state.cepList),
		  cepCounter = useSelector((state: any) => state.cepCounter),
		  [errorMessage, setErrorMessage] = useState(''),
		  maxCepCounter = 4;

    const registerCepBlock = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
		event.preventDefault();
		
        const targetCepBlock = document.getElementById(`inputBlock${cepCounter}`) as HTMLDivElement;

        Object.values(targetCepBlock.childNodes).forEach((element): void => {
            if(element.nodeName === 'INPUT'){   
                let inputValue: string = (element as HTMLInputElement).value;
				
                if(inputValue.length === 10){
					fetchCep<ICepInfo>(inputValue.replace(/[^0-9]/g,""), 'json')
					.then(data => {
						if(data.erro){
							setErrorMessage('CEP inválido (＃＞＜)');
						}else{
							dispatch(registerCep(data, cepCounter));
							dispatch(increaseCepCounter());
						}
					})
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
			<CepResultArea
				cepResultList={cepResults}
				errorMessage={errorMessage}
			/>
		</Page>
	);
};

export default FourthQuestion;