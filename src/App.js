import React,{ useEffect, useState } from "react";
import "./App.css";

function App() {
  const products = [
    {name:'Photoshop', details:'$90.00'},
    {name:'Adobe', details:'$80.00'},
    {name:'PDF', details:'$70.00'},
    {name:'Premier Elements', details:'$270.00'},
  ]
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          products.map(product => <li>{product.name} | {product.details}</li>)
        }
      </ul>
      {
        products.map(product => <Product name={product.name} details={product.details}></Product>)
      } 
    </div> 
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      {
        users.map(user=> <li>{user.name}  ==|== {user.phone} ==|== {user.email}</li>)
      }
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Product(prodcts){
  const productStyle={
    border:'1px solid grey',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    float:'left',
    height:'200px',
    width:'200px',
  }  
  return (
    <div style={productStyle}>
      <h2>name: {prodcts.name}</h2>
      <h1>{prodcts.details}</h1>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
