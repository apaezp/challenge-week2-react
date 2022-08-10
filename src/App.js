import Input from './components/Input'
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const checkForm = (e) => {
    e.preventDefault();

    if (name === "" && password === "") {
      setError(false);
      return
    } else {
      setError(true);
      setName("");
      setPassword("");
    }
  }
  
  return (
    <>
    <Input name={setName} password={setPassword} checkForm={checkForm} error={error} valueName={name} valuePass={password}/>
    
    </>
  );
}

export default App;
