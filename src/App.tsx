import React, {useEffect} from 'react';

//Components
import { CepBlock } from './components';

const App: React.FC = () => {
	const cepBlocksCount = 5;

	useEffect(() => {
		fetch('https://viacep.com.br/ws/31060350/json/ ')
		.then(result => {
			return result.json();
		})
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.log(error);
		})
	});

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