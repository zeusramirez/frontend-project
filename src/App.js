
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Menu from './components/Menu';
import Cart from './components/ui/Cart';
import Orders from './components/ui/Orders'
import Account from './components/Account'
import {useState} from 'react'

function App() {

  const [cartItems, setCartItems] = useState([])
  function addItemToCart (obj) {
    setCartItems([...cartItems, obj])
    console.log(cartItems)
  }
  function clearCart() {
    setCartItems([])
  }
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path='/' render={() => <Restaurants/>} />
        <Route exact path='/menu/:id' render={() => <Menu addItemToCart={addItemToCart}/> } />
        <Route exact path='/cart' render={() => <Cart clearCart={clearCart} cartItems={cartItems}/>}/>
        <Route exact path='/account' render={() => <Account />}/>
        <Route exact path='/orders' render={() => <Orders />}/>
      </Switch>
   
    </div>
  );
}

export default App;
