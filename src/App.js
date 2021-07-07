// next 8

import { useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Samman', 'Hugosab', 'Jackobs', 'Landmand', 'Hervey']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premiere El', price: '$249.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Learner!!!</p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
          {
            products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10)
  // const handleIncrease = () => setCount(count + 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}



function Product(props) {
  const productStyle = {
    border: '5px solid purple',
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

export default App;