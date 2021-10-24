import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ChatHome from './components/ChatHome'
import Login from './pages/Login';
import Registration from './pages/Registration';
import DoctorHome from './pages/Doctors/DoctorHome';
import DoctorReg from './pages/Doctors/DoctorReg';

function App() {
  return (
          <>
          <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/ChatHome' component={ChatHome} />
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Registration} />
            <Route path='/docHome' component={DoctorHome} />
            <Route path='/docReg' component={DoctorReg} />
          </Switch>
          </Router>
        </>
  );
}

export default App;