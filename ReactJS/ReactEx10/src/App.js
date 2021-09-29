import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Signin from './pages/signin';
import Footer from './components/Navbar/footer';
import Update from './pages/update'
import Api1 from './API/Api1'
import Api2 from './API/Api2'
import Api3F from './API/Api3/Api3F';

function App() {
return (<>
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
    	<Route path='/signin' component={Signin} />
		<Route path='/update' component={Update} />
		<Route path='/Api1' component={Api1} />
		<Route path='/Api2' component={Api2} />
		<Route path='/Api3' component={Api3F} />
	</Switch>
	</Router>
	<Footer />
	</>
);
}

export default App;
