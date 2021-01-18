import React, { useState } from 'react';

//Classes
import {
    Car,
    Motorcycle
} from '../services/Vehicles';

//Components
import {
    CodeBlock,
    Page,
    InputBlock,
    InputOption,
    InputSelect,
    InputSelectArea,
    InputText,
    InputTextArea,
    InputSubmit,
    InputSubmitArea
} from '../components';

//Services
import { getInputValues } from '../services';

const ThirdQuestion: React.FC = () => {
    type VehicleType = string;

    const [vehicleType, setVehicleType] = useState<VehicleType>('carro');
    const [vehicle, setVehicle] = useState<Car | Motorcycle>(new Car());
    const [inputValues, setInputValues] = useState<Object>({});

    const insertButtonHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>):void => {
        event.preventDefault();
        
        if(Object.values(getInputValues('inputTextArea')).length > 0){
            setInputValues({
                ...inputValues,
                [vehicleType]: getInputValues('inputTextArea')
            });
        };   
    };

    const downloadButtonHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>):void => {
        event.preventDefault();
        
        const inputValuesList = inputValues;
        
        if(Object.values(inputValuesList).length > 0){
            const downloadButton = document.createElement('a');
        
            downloadButton.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(inputValuesList)));
            downloadButton.setAttribute('download', 'filename.json');

            document.body.appendChild(downloadButton);

            downloadButton.click();

            document.body.removeChild(downloadButton);
        };
    };

    const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>):void =>{
        if(event.currentTarget.value !== ""){
            switch (event.currentTarget.value) {
                case 'carro':
                    setVehicle(new Car());

                    break;
                case 'moto':
                    setVehicle(new Motorcycle());

                    break;
                default:
                    break;
            }

            setVehicleType(event.currentTarget.value);
        };
    };

    return(
        <Page title="Resolução">
            <InputBlock>
                <InputSelectArea>
                    <InputSelect
                        selectId="vehiclesSelect"
                        selectLabelText="Veículos"
                        onChange={selectHandler}
                    >
                        <InputOption
                            optionValue="carro"
                            optionText="Carro"
                        />
                        <InputOption
                            optionValue="moto"
                            optionText="Moto"
                        />
                    </InputSelect>
                </InputSelectArea>
                <InputTextArea>
                    <InputText
                        inputType="text"
                        labelText="Modelo"
                    />
                    <InputText
                        inputType="number"
                        labelText="Ano de Fabricação"
                        numMinValue={vehicle.getManufacturingYear()}
                        numMaxValue={2021}
                    />
                    <InputText
                        inputType="number"
                        labelText="Quantidade de Portas"
                        numMinValue={2}
                        numMaxValue={4}
                    isDisabled={vehicleType !== 'carro'}/>
                    <InputText
                        inputType="text"
                        labelText="Marca"
                    />
                    <InputText
                        inputType="number"
                        labelText="Quantidade de passageiros"
                        numMinValue={1}
                        numMaxValue={2}
                    isDisabled={vehicleType !== 'moto'}/>
                    <InputText
                        inputType="number"
                        labelText="Quantidade de rodas"
                        numMinValue={2}
                        numMaxValue={2} 
                    isDisabled={vehicleType !== 'moto'}/>
                </InputTextArea>
                <CodeBlock
                    codeBlockLanguage="javascript"
                    codeBlockContent={JSON.stringify(inputValues, null, 4)}
                />
                <InputSubmitArea>
                    <InputSubmit
                        buttonText="Adicionar ao controle de veículos"
                        onClick={insertButtonHandler}
                    />
                    <InputSubmit
                        buttonText="Baixar controle de veículos"
                        onClick={downloadButtonHandler}
                    isDisabled={Object.values(inputValues).length === 0}/>
                </InputSubmitArea>
            </InputBlock>
        </Page>
    );
};

export default ThirdQuestion;