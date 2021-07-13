
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path='/' component={Restaurants} />
        <Route exact path='/menu/:id' component={Menu} />
        </Switch>
   
    </div>
  );
}

export default App;
