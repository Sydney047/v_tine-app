import { useState } from "react"
import { Link } from "react-router";

export default function V_Component ( { name = 'Rina' } ) {
    const [ isDisabled, setDisabled ] = useState( false );

    function handleDisable () {
        setDisabled( !isDisabled );
    }

    return(<>
       <div className="vpageDiv"> 
        <h1>Hi, { name }</h1>
        <h2>Will you be my valentine🙃?</h2>
        <button><Link to="celebrations">YES 😊</Link></button>
        <button className="noBtn" disabled={isDisabled} onMouseEnter={ handleDisable } onMouseLeave={ handleDisable } >No 😞</button>
    </div></>)
}