import React, { useState } from 'react';

//Components
import {
    Bubble,
    BubbleList,
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
    getInputValues,
    renderAlertBox
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

    const copyToClipboard = (event: React.MouseEvent<HTMLLIElement>): void =>{
        const targetElement = (event.target as HTMLLIElement).childNodes[0];
        const palindromeTextArea = targetElement as HTMLTextAreaElement;

        palindromeTextArea.select();
        palindromeTextArea.setSelectionRange(0, 99999);
    
        document.execCommand("copy");

        renderAlertBox("Copiado <(￣︶￣)>");
    };

    return(
        <Page title="Resolução">
            <InputBlock>
                <InputTextArea>
                    <InputText
                        inputType="number"
                        labelText="De"
                        numMinValue={1}
                        numMaxValue={9999998}
                    />
                    <InputText
                        inputType="number"
                        labelText="Para"
                        numMinValue={1}
                        numMaxValue={9999999}
                    />
                </InputTextArea>
                <InputSubmitArea>
                    <InputSubmit
                        buttonText="Ache os palíndromos"
                        onClick={submitButtonHandler}
                    />
                </InputSubmitArea>
            </InputBlock>
            <BubbleList>
            {
                palindromeList.map((palindrome, index) => {
                    return(
                        <Bubble
                            bubbleKey={index}
                            bubbleValue={palindrome}
                            onClick={copyToClipboard}
                        />
                    );
                })
            }
            </BubbleList>
        </Page>
    );
};

export default FirstQuestion;