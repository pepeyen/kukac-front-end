import React from 'react';

//Components
import { CepBlock } from './components';

const App: React.FC = () => {
	const cepBlocksCount = 5;
	return(
		<React.Fragment>
			{
				[...Array(cepBlocksCount)].map((value, index: number) => {
					return(
						<CepBlock
							key={index}
							cepBlockID={index}
						/>
					);
				})
			}
		</React.Fragment>
	);
}

export default App;