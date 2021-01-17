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
                
                document.getElementsByTagName('header')[0].appendChild(navbarHamburguerGroup); 
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