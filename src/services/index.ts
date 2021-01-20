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

export const removeFromArray = (targetList: any[], targetValue: any) => {
    let targetArray = targetList;
    
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

interface IPathList {
    d: string,
    fill: string
};

const insertSVGPaths = (targetSVG: HTMLElement, pathList: IPathList[], viewBox: string) => {
    const targetSVGContainer = document.createElementNS('http://www.w3.org/2000/svg','svg');
    targetSVGContainer.setAttribute('viewBox', viewBox);
    targetSVGContainer.setAttribute('fill', 'none');

    for(const currentPath of pathList){
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg','path');

        for(const [key, value] of Object.entries(currentPath)){
            pathElement.setAttribute(key, value);
        };

        targetSVGContainer.appendChild(pathElement);
    };

    targetSVG.appendChild(targetSVGContainer);
};

export const renderNavbarHamburguer = (isMobile: boolean):void => {
    const navbar = document.getElementById('navbar');
    const navbarGroup = document.getElementById('navbarGroup');

    if(navbar && navbarGroup){
        if(isMobile){
            if(!document.getElementById('navbarHamburguerGroup')){
                const navbarHamburguerButton = document.createElement('button');
                const navbarHamburguerGroup = document.createElement('div');
            
                navbarHamburguerButton.classList.add('navbar__hamburguer-button');
                navbarHamburguerButton.classList.add('--left-aligned-group');
                navbarHamburguerButton.id = 'navbarHamburguerButton';
                navbarHamburguerButton.onclick = (():void => {
                    const navbarHamburguerButton = document.getElementById('navbarHamburguerButton');
                    const navbarHamburguerGroup = document.getElementById('navbarHamburguerGroup');
        
                    if(navbarHamburguerGroup && navbarHamburguerButton){
                        if(navbarHamburguerGroup.classList.contains('--active')){
                            navbarHamburguerButton.classList.remove('--active');
                            navbarHamburguerGroup.classList.remove('--active');
                        }else{
                            navbarHamburguerButton.classList.add('--active');
                            navbarHamburguerGroup.classList.add('--active');
                        } 
                    };
                });
                insertSVGPaths(navbarHamburguerButton ,[
                    {
                        d: "M501.333 54H10.667C4.779 54 0 61.8403 0 71.5C0 81.1597 4.779 89 10.667 89H501.334C507.222 89 512.001 81.1597 512.001 71.5C512.001 61.8403 507.221 54 501.333 54Z",
                        fill: "#fbf27c"
                    },
                    {
                        d: "M501.333 245.333H10.667C4.779 245.333 0 253.173 0 262.833C0 272.493 4.779 280.333 10.667 280.333H501.334C507.222 280.333 512.001 272.493 512.001 262.833C512.001 253.173 507.221 245.333 501.333 245.333Z",
                        fill: "#fbf27c"
                    },
                    {
                        d: "M501.333 437H10.667C4.779 437 0 444.839 0 454.499C0 464.159 4.779 472 10.667 472H501.334C507.222 472 512.001 464.159 512.001 454.499C512 444.839 507.221 437 501.333 437Z",
                        fill: "#fbf27c"
                    }
                ], '0 0 512 512');
            
                navbarHamburguerGroup.classList.add('navbar__hamburguer-group');
                navbarHamburguerGroup.id = 'navbarHamburguerGroup';
        
                navbar.appendChild(navbarHamburguerButton);
        
                Object.values(navbarGroup?.childNodes).map(children => navbarHamburguerGroup.appendChild(children));
                
                document.getElementsByTagName('nav')[0].appendChild(navbarHamburguerGroup); 
            };
        }else{
            const navbarHamburguerButton = document.getElementById('navbarHamburguerButton');
            const navbarHamburguerGroup = document.getElementById('navbarHamburguerGroup');

            if(navbarHamburguerButton && navbarHamburguerGroup){
                Object.values(navbarHamburguerGroup.childNodes).map(children => navbarGroup.appendChild(children));

                navbarHamburguerButton.remove();
                navbarHamburguerGroup.remove();
            }
        }
    }
};

export const toCamelCase = (str: string): string => {
    const map = {
        'a' : 'á|à|ã|â|À|Á|Ã|Â',
        'e' : 'é|è|ê|É|È|Ê',
        'i' : 'í|ì|î|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
        'n' : 'ñ|Ñ'
    };
    
    for(let pattern in map){
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};

export const getInputValues = (inputContainerElementId: string): Object => {
    const inputTextArea = document.getElementById(inputContainerElementId);
    let inputValues = {}, inputChildrenLength = 0;

    if(inputTextArea){
        Object.values(inputTextArea.childNodes).map((children: ChildNode) => {
            if(children.childNodes){
                Object.values(children.childNodes).map((children: ChildNode) => {
                    if(children.nodeName === 'INPUT'){
                        const inputChildren = children as HTMLInputElement;

                        if(!inputChildren.disabled){
                            if(inputChildren.value){
                                inputValues = {
                                    ...inputValues,
                                    [toCamelCase(inputChildren.name)]: inputChildren.value
                                };
                            };
                            
                            inputChildrenLength ++;
                        };

                        return -1;
                    };

                    return -1;
                });
            };

            return -1;
        });
    };
    
    if(inputChildrenLength === Object.values(inputValues).length){
        return inputValues;
    }else{
        return {};
    }
};
export const isPalindrome = (num: number) => {
    let factor = 1;

    while (num / factor >= 10){
        factor *= 10;
    };

    while(num) {
        let first = Math.floor(num / factor);
        let last = num % 10;

        if(first !== last){
            return false;
        };

        num = Math.floor((num % factor) / 10);

        factor = factor / 100;
    };

    return true;
};
export const findPalindromeRange = (from: number, to: number) => {
    const palindromeList: number[] =  [];

    for(let i = from; i <= to; i++){
        if(isPalindrome(i)){
            palindromeList.push(i);
        }
    };

    return palindromeList;
};

interface IBillList {
    [key: string]: number
};

interface IBillDetais {
    billList: IBillList,
    totalBillCount: number
};

export const generateChange = (changeValue: number): IBillDetais => {
    let changePossibleValues: number[] = [1, 10, 100];
    changePossibleValues = changePossibleValues.sort((a, b) => b- a).reverse();

    let changeList: IBillList = {},
        totalBillCount: number = 0;

    changePossibleValues.forEach(changePossibleValue => {
        let isColission = false;

        Object.keys(changeList).map(key => parseInt(key) === changePossibleValue);

        if(!isColission){
            changeList = {
                ...changeList,
                [changePossibleValue]: 0
            };
        };
    });

    for(let i = 1; i <= changeValue; i++){
        for(let value = changePossibleValues.length - 1; value >= 0; value--){
            const billValue = changePossibleValues[value];

            while(i % billValue >= 0 && changeValue >= billValue){
                changeList[billValue] ++;
                totalBillCount ++;
                changeValue = changeValue - billValue;
            };
        };
    };

    return{
        billList: changeList,
        totalBillCount: totalBillCount
    };
};

export const testPossibleValues = (possibleValues: number[] | string[], target: number | string) => {
    possibleValues.forEach(value => {
        if(value === target){
            return 1;
        };
    });

    return 0;
};

export const fetchCep = <T>(cepValue: string, dataType: string): Promise<T> => {
    return fetch(`https://viacep.com.br/ws/${cepValue}/${dataType}`, {
        method: 'GET'
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json().then(data => data as T);
    }) ;
};

export const fade = (element: HTMLElement) => {
    let opacity = 1;

    const timer = setInterval(() => {
        if(opacity <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        };

        element.style.opacity = opacity.toString();
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity -= opacity * 0.1;
    }, 50);
};

export const unfade = (element: HTMLElement) => {
    let opacity = 0.1;

    element.style.display = 'flex';

    const timer = setInterval(() => {
        if(opacity >= 1){
            clearInterval(timer);
        };

        element.style.opacity = opacity.toString();
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity += opacity * 0.1;
    }, 10);
};

export const renderAlertBox = (alertText: string):void => {
    const alertBoxElement: HTMLDivElement = document.createElement('div');
    const alertBoxTextElement: HTMLSpanElement = document.createElement('span');

    alertBoxElement.id = "alertBox";
    alertBoxElement.classList.add("alert-box");

    alertBoxTextElement.textContent = alertText;
    alertBoxTextElement.classList.add("alert-box__text");
    alertBoxTextElement.classList.add("--rounded-borders");

    alertBoxElement.appendChild(alertBoxTextElement);

    document.body.appendChild(alertBoxElement);

    unfade(alertBoxElement);

    setTimeout(() => fade(alertBoxElement), 1200);

    setTimeout(() => document.body.removeChild(alertBoxElement), 3000);
};

export const generateDownload = (fileName: string, fileExtension: string, fileContent: string): void => {
    if(fileContent !== '' &&  fileName !== '' && fileExtension !== ''){
        const mime = require('mime-types'),
          downloadButton = document.createElement('a'),
          fullFileName = `${fileName}.${fileExtension}`;
    
        downloadButton.setAttribute('href', `data:${mime.contentType(fullFileName)},` + encodeURIComponent(fileContent));
        downloadButton.setAttribute('download', fullFileName);

        document.body.appendChild(downloadButton);

        downloadButton.click();

        document.body.removeChild(downloadButton);
    };
};