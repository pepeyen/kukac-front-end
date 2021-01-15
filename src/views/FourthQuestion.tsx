import React from 'react';
import { useSelector } from 'react-redux';

//Components
import { CepBlock } from '../components';

interface CepCounterState {
	cepCounter: number
};


const FourthQuestion: React.FC = () => {
    const cepCounter = (state: CepCounterState) => state.cepCounter;
	const currentCepBlockId = useSelector(cepCounter);
	const maxCepCounter = 5;
	
	return(
		<article>
			<CepBlock
				key={currentCepBlockId}
				cepBlockID={currentCepBlockId}
				isRegisterDisabled={currentCepBlockId >= maxCepCounter ? true : false}
				isRemovalDisabled={currentCepBlockId <= 0 ? true : false}
			/>
		</article>
	);
};

export default FourthQuestion;