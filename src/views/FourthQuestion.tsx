import React from 'react';
import { useSelector } from 'react-redux';

//Components
import {
	CepBlock,
	Page
} from '../components';

interface CepCounterState {
	cepCounter: number
};


const FourthQuestion: React.FC = () => {
    const cepCounter = (state: CepCounterState) => state.cepCounter;
	const currentCepBlockId = useSelector(cepCounter);
	const maxCepCounter = 5;
	
	return(
		<Page title="Resolução">
			<CepBlock
				key={currentCepBlockId}
				cepBlockID={currentCepBlockId}
				isRegisterDisabled={currentCepBlockId >= maxCepCounter ? true : false}
				isRemovalDisabled={currentCepBlockId <= 0 ? true : false}
			/>
		</Page>
	);
};

export default FourthQuestion;