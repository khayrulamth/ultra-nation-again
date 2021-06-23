import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries,setCountries] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>{setCountries(data)})
  },[]);

  const handleAddCountry = (country)=>{
    const newCart = [...cart,country];
    setCart(newCart);
};
  return (
    <div >
      <h1 >Country: {countries.length}</h1>
      <h2>Country added: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      {
        countries.map(country=><Country handleAddCountry={handleAddCountry} key={country.alpha3Code} country={country}></Country>)
        }
    </div>
  )
}
export default App;
