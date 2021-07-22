import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuYeshtery from './components/Menu/munu';
import Navs from './components/Navs';
import Home from './pages/Home/Home';
import './styles/app.scss';

class App extends Component {
	state = {
		isActive: false,
	};

	handleToggle = () => {
		this.setState({ isActive: !this.state.isActive });
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<Navs handleToggle={this.handleToggle} />
					<MenuYeshtery
						isActive={this.state.isActive}
						handleToggle={this.handleToggle}
					/>
					<Route path='/' exact component={Home} />
				</div>
			</Router>
		);
	}
}

export default App;
