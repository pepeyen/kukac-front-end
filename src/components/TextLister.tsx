import React, {
    useState,
    useEffect
} from 'react';

type Text = string | number;

interface IProps{
    textList: Text[],
    textMaxScreenTime?: number
};

const TextLister: React.FC<IProps> = (props: IProps) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            if(index >= props.textList.length - 1){
                setIndex(0);
            }else{
                setIndex(index + 1);
            }
        }, props.textMaxScreenTime ? props.textMaxScreenTime : 2500);

    },[index, props.textList, props.textMaxScreenTime]);
    
    return(
        <span className="page__lister-text">{props.textList[index]}</span>
    );
};

export default TextLister;