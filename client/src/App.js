import { Component } from 'react';
import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import LogInDelegator from './components/renderingDelegates/homePage/LogInDelegator';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
	constructor(props) {

		super(props);

		this.state = {

		}

	}

	render() {

		return (

			<div className="app">
				<Router>
					<NavigationBar/>
				

					<Switch>
						<Route path="/">
							<LogInDelegator showLogIn={true} />
						</Route>

						<Route path="/account">
							{/*TODO: ACCOUNT*/}
						</Route>

						<Route path="/dashboard">
							<Dashboard />
						</Route>

						<Route path="/signup">
							<LogInDelegator showLogIn={false} />
						</Route>

						<Route path="/login">
							<LogInDelegator showLogIn={true} />
						</Route>
					</Switch>
				</Router>
			</div>

		);

	}
}

export default App;
