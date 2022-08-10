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
          <h1> Desafío: estado de los componentes y eventos </h1>
          <label> Name </label>
          <input className="inputName" type="text" placeholder="Name" onChange={(e) => props.name (e.target.value)} value={props.valueName}  />
        </div>
        <div className="input-field">
          <label> Password </label>
          <input className="inputPassword" type="password" placeholder="Password" onChange={(e) => props.password (e.target.value)} value={props.valuePass} />
        </div>
        {props.valuePass ==="252525" ? <Btn /> : null}

      </form>
    </div>
    </>
  )
}

export default Input;