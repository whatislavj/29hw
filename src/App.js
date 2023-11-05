import { useState } from 'react';
import './App.css';
import Input from './Input';
import Button from './Button';

function App() {
  const [value, setValue] = useState('');

  const showValue = () => {
    console.log('Input Value: ' + value);
  }

  return (
    <div className='container'>
      <h1>29th HW</h1>
      <Input value={value} setValue={setValue} />
      <Button name='show input value' onClick={showValue} />
    </div>
  );
}

export default App;
