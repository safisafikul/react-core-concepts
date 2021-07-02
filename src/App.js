// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Learner!!!</p>
        <Person name="Munna" job="Actor"></Person>
        <Person name="Faruk" job="Footballer"></Person>
        <Person name="Saddam" job="Driver"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{border: '5px solid gold', width: '400px', margin:'10px'}}>
      <h3 style={{color: 'cyan', fontSize: '50px'}}>My name: {props.name}</h3>
      <h3 style={{color: 'magenta', fontSize: '20px'}}>My profession: {props.job}</h3>
    </div>
  )
}

export default App;
