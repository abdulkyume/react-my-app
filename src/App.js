import "./App.css";

function App() {
  var person = {
    name: "Abdul",
    job: "fresher"
  }
  return (
    <div className="App">
        <p>My first react {person.name}</p>
        <p>My first react {person.job}</p>
        <Person name="Abdul" job="student"></Person>
        <Person name="Kyume" job="student"></Person>
        <Person name="Takbir" job="student"></Person>
    </div>
    
  );
}


function Person(variable){
    return <div>
      <h1 style={{color:'red',backgroundColor:'lightblue'}}>name: {variable.name}</h1>
      <h2 style={{color:'lightblue',backgroundColor:'red'}}>Friend: {variable.job}</h2>
    </div>;
}

export default App;
