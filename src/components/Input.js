import React from 'react'
import Btn from './Btn'
import './Input.css'

const Input = (props) => {

  return (
    <>
      
    <div className="input-container">
      <form onSubmit={props.checkForm}>
        { props.error ? <p className="error">Please fill out all fields</p> : null }
        <div className="input-field">
          <h1> Desafío: Estado de los componentes y eventos </h1>
          <h3> Name </h3>
          <input className="inputName" type="text" placeholder="Type your name" onChange={(e) => props.name (e.target.value)} value={props.valueName}  />
        </div>
        <div className="input-field">
          <h3> Password </h3>
          <input className="inputPassword" type="password" placeholder="Type your password" onChange={(e) => props.password (e.target.value)} value={props.valuePass} />
        </div>
        {props.valuePass ==="252525" ? <Btn /> : null}

      </form>
    </div>
    </>
  )
}

export default Input;