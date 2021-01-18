import React, { useState } from 'react';

//Components
import {
    Page,
    InputBlock,
    InputText,
    InputTextArea,
    InputSubmit,
    InputSubmitArea
} from '../components';

//Services
import {
    findPalindromeRange,
    getInputValues
} from '../services';

type Palindrome = number[];

const FirstQuestion: React.FC = () => {
    const [palindromeList, setPalindromeList] = useState<Palindrome>([]);

    const submitButtonHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>):void => {
        event.preventDefault();

        const inputValues = getInputValues('inputTextArea');
        
        if(Object.values(inputValues).length > 0){
            const inputValueList: number[] = [];

            Object.values(inputValues).map(inputValue => inputValueList.push(parseInt(inputValue)));
            
            setPalindromeList(findPalindromeRange(inputValueList[0], inputValueList[1]));
        };
    };

    return(
        <Page title="Resolução">
            <InputBlock>
                <InputTextArea>
                    <InputText
                        inputType="number"
                        labelText="De"
                        numMinValue={1}
                    />
                    <InputText
                        inputType="number"
                        labelText="Para"
                        numMinValue={1}
                    />
                </InputTextArea>
                <InputSubmitArea>
                    <InputSubmit
                        buttonText="Ache os palíndromos"
                        onClick={submitButtonHandler}
                    />
                </InputSubmitArea>
            </InputBlock>
            {palindromeList.map((palindrome, index) => <span key={index}>{palindrome}</span>)}
        </Page>
    );
};

export default FirstQuestion;