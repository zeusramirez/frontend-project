
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Menu from './components/Menu';
import Cart from './components/ui/Cart';
import Orders from './components/ui/Orders'
import Account from './components/Account'
import Login from './components/Login';
import {useState} from 'react'

function App() {
  const [user, setUser] = useState()
  const [cartItems, setCartItems] = useState([])
  function addItemToCart (obj) {
    setCartItems([...cartItems, obj])
    console.log(cartItems)
  }
  function clearCart() {
    setCartItems([])
  }
  return (
    <div className="App background">
      <Navbar user={user} setUser={setUser}/>
      <Banner />
      <Switch>
        <Route exact path='/' render={() => <Restaurants/>} />
        <Route exact path='/menu/:id' render={() => <Menu addItemToCart={addItemToCart} user={user}/> } />
        <Route exact path='/cart' render={() => <Cart clearCart={clearCart} user={user} cartItems={cartItems}/>}/>
        <Route exact path='/account' render={() => <Account user={user} setUser={setUser}/>}/>
        <Route exact path='/orders' render={() => <Orders user={user}/>}/>
        <Route exact path='/login' render={()=> <Login user={user} setUser={setUser}/>}/>
      </Switch>
   
    </div>
  );
}

export default App;
