import React, { useState } from 'react';

//Components
import {
    Page,
    InputBlock,
    InputText,
    InputTextArea,
    InputSubmit,
    InputSubmitArea,
    TextLister
} from '../components';

//Services
import {
    getInputValues,
    generateChange
} from '../services';

interface IBillDetails {
    billValue: number,
    billCount: number
};

interface IChangeDetails {
    changeValue: number,
    billList: IBillDetails[],
    totalbillCount: number
};

interface IShoppingDetails {
    shoppingPrice: number,
    change: IChangeDetails

};

const SecondQuestion: React.FC = () => {
    const [shoppingDetails, setShoppingDetails] = useState<IShoppingDetails>();
    const [questionFeedback, setQuestionFeedback] = useState('Por favor insira as informações da compra (＾◡＾)');
    const currencyList = ['R$', '$', '¥', '€'];

    const submitButtonHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>):void => {
        event.preventDefault();

        const inputValues = getInputValues('inputTextArea');
        
        if(Object.values(inputValues).length > 1){
            const inputValueList: number[] = [];

            Object.values(inputValues).map(inputValue => inputValueList.push(parseInt(inputValue)));

            const shoppingPrice = inputValueList[0],
                  shoppingPaidValue = inputValueList[1],
                  billList: IBillDetails[] = [];

            let changeValue = shoppingPaidValue - shoppingPrice;

            if(changeValue >= 0){
                const changeDetails = generateChange(changeValue);

                for(const [key, value] of Object.entries(changeDetails.billList)){
                    billList.push({
                        billValue: parseInt(key),
                        billCount: value
                    } as IBillDetails);
                };
    
                const change: IChangeDetails = {
                    changeValue: changeValue,
                    billList: billList,
                    totalbillCount: changeDetails.totalBillCount 
                };
    
                setShoppingDetails({
                    shoppingPrice: shoppingPrice,
                    change: change
                });
            }else{
                setQuestionFeedback('Você não pagou a compra por inteiro ┐(`～`;)┌');
            }
        };
    };

    return(
        <Page title="Resolução">
            <InputBlock>
                <InputTextArea>
                    <InputText
                        inputType="number"
                        labelText="Valor da compra"
                        numMinValue={1}
                    />
                    <InputText
                        inputType="number"
                        labelText="Valor pago"
                        numMinValue={1}
                    />
                </InputTextArea>
                <InputSubmitArea>
                    <InputSubmit
                        buttonText="Calcule o troco"
                        onClick={submitButtonHandler}
                    />
                </InputSubmitArea>
            </InputBlock>
            {shoppingDetails ? 
                <div className="page__answer --thin-borders --rounded-borders">
                    <p className="page__answer-title">Valor da compra <span><TextLister textList={currencyList} textMaxScreenTime={2000}/> {shoppingDetails.shoppingPrice}</span></p>
                    <div className="page__answer-results">
                        <p className="page__answer-result">Valor do troco <span>{shoppingDetails.change.changeValue}</span></p>
                        <p className="page__answer-result">Valor minimo de notas <span>{shoppingDetails.change.totalbillCount}</span></p>
                        <ul className="page__answer-bills">
                            {
                                shoppingDetails.change.billList.map((bill, index) => {
                                    return(
                                        <li
                                            key={index ? index : 0}
                                            className="page__answer-bill"
                                        >
                                            <p className="page__answer-result">Quantidade total de notas de {bill.billValue} <span>{bill.billCount}</span></p>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                :
                <h3 className="page__feedback">{questionFeedback}</h3>
            }
        </Page>
    );
};

export default SecondQuestion;