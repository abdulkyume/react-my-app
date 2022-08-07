import "./App.css";

function App() {
  var person = {
    name: "Abdul",
    job: "fresher"
  };
  const products = [{name:'Photoshop', details:'$90.00'}]
  return (
    <div className="App">
        <p>My first react {person.name}</p>
        <p>My first react {person.job}</p>
        <Person name="Abdul" job="student"></Person>
        <Person name="Kyume" job="student"></Person>
        <Person name="Takbir" job="student"></Person>
        <Product name={products[0].name} details={products[0].details}></Product>
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

function Person(variable){
    return <div>
      <h1 style={{color:'red',backgroundColor:'lightblue'}}>name: {variable.name}</h1>
      <h2 style={{color:'lightblue',backgroundColor:'red'}}>Friend: {variable.job}</h2>
    </div>;
}

export default App;
