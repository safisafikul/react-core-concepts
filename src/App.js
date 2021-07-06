// import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Learner!!!</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name="Safi" job="Actor"></Person>
        <Person name="Faruk" job="Footballer"></Person>
        <Person name="Saddam" job="Driver"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'red',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{border: '2px solid gold', width: '400px', margin:'10px'}}>
      <h3>My name: {props.name}</h3>
      <h3>My profession: {props.job}</h3>
    </div>
  )
}

export default App;
