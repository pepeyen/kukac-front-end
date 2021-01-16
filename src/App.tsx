import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

//Components
import { Navbar } from './components';

//Views
import {
	FirstQuestion,
	SecondQuestion,
	ThirdQuestion,
	FourthQuestion,
	Home
} from './views';

const App: React.FC = () => {	
	return(
		<React.Fragment>
			<header>
				<Navbar />
            </header>
			<main>
				<Switch>
					<Route
                        exact path="/"
                        component={() => {return <Redirect to="/questoes" />;}}
                    />
					<Route
						exact path='/questoes'
						component={Home}
					/>
					<Route
						exact path='/questoes/primeira'
						component={FirstQuestion}
					/>
					<Route
						exact path='/questoes/segunda'
						component={SecondQuestion}
					/>
					<Route
						exact path='/questoes/terceira'
						component={ThirdQuestion}
					/>
					<Route
						exact path='/questoes/quarta'
						component={FourthQuestion}
					/>
				</Switch>
			</main>
			<footer>
			</footer>
		</React.Fragment>
	);
}

export default App;