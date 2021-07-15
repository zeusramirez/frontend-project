
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
  const [totalItems, setTotalItems] = useState(0)
  function addItemToCart (obj) {
    setTotalItems( totalItems + 1)
    if (cartItems.length > 0){
      cartItems.map(item => {
        if(item.id === obj.id){
          item.quantity++ 
          let singleCart = cartItems.filter(food => food.id !== obj.id )
          setCartItems([...singleCart, item])
          
        }else{
         
          setCartItems([...cartItems, obj])
        }
      })
  }else{
    setCartItems([obj])
  }
  }
  function clearCart() {
    setTotalItems(0)
    setCartItems([])
  }
  function removeCartItem(id) {
    setTotalItems(totalItems - 1)
    let newArr = cartItems.filter(item => {
      if (item.id === id && item.quantity > 1){
        item.quantity--
        return(item)
      }else if (item.id !== id){
        return(item)
      }
    })
    setCartItems(newArr)
  }
  return (
    <div className="App background">
      <Navbar user={user} setUser={setUser} totalItems={totalItems}/>
      <Switch>
        <Route exact path='/' render={() => <Restaurants/>} />
        <Route exact path='/menu/:id' render={() => <Menu addItemToCart={addItemToCart} user={user}/> } />
        <Route exact path='/cart' render={() => <Cart clearCart={clearCart} user={user} removeCartItem={removeCartItem} cartItems={cartItems}/>}/>
        <Route exact path='/account' render={() => <Account user={user} setUser={setUser}/>}/>
        <Route exact path='/orders' render={() => <Orders user={user}/>}/>
        <Route exact path='/login' render={()=> <Login user={user} setUser={setUser}/>}/>
      </Switch>
   
    </div>
  );
}

export default App;
