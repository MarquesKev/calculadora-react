import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handlerClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleMultNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleDiviNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handlePercentage = () => {
    setCurrentNumber(prev => String(Number(prev) / 100 * Number(firstNumber)));
  }

  const handleSquareRoot = () => {
    setCurrentNumber(prev => String(Math.sqrt(Number(prev))));
  };
  

  const handleAddDecimal = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber(prev => `${prev}.`);
    }
  }

  const handleDeleteLastDigit = () => {
    setCurrentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDiviNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="AC" onClick={handlerClear}/>
          <Button label="√" onClick={handleSquareRoot}/>
          <Button label="%" onClick={handlePercentage}/>
          <Button label="/" onClick={handleDiviNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>    
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={handleAddDecimal}/>
          <Button label="⌫" onClick={handleDeleteLastDigit}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>         
      </Content>
    </Container>
  );
}

export default App;
