import V_Component from './components/Vpage';
import './App.css'
import { useState } from 'react'

// import the images here
import ballon from './components/image/ballon.svg';
import bear from './components/image/bear.svg';
import bouquet from './components/image/bouquet.svg';

function App() {
  const [ name, setName ] = useState( '' );

  function handleName ( e ) {
    setName( e.target.value );
  }

  // checks if the name matches and then returns this 
  if ( ( name.toLowerCase() === 'fila' )|| ( name.toLowerCase() === 'rina' ) || ( name.toLowerCase() === 'filarina' ) ) {
    return <>
      <div>
        <img src={ bear} alt="This is an image of a teddy bear" />
        <img src={ ballon } alt="This is an image of a ballon" />
        <img src={ bouquet } alt="This is an image of a bouquet of flowers" />
      </div>
      <V_Component name={ name.charAt(0).toUpperCase() + name.substring(1) } />
    </>
  }

  // this is what we return first 
  return(<>
  <div>
    <img src={ bear} alt="This is an image of a teddy bear" />
    <img src={ ballon } alt="This is an image of a ballon" />
    <img src={ bouquet } alt="This is an image of a bouquet of flowers" />
  </div>
    <h1>So, it is almost <b>Valentines Day😏</b></h1>
    <label >Enter your name: <input type="text" value={ name } onInput={ handleName } /></label>
  </>)
}

export default App
