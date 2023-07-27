import './main.css';
import Form from './components/Form.js';
import Title from './components/Title';
import Table from './components/Table';
import { useState } from 'react';
function App() {
  const[storedData,setStoredData]=useState(null);
  const calculateHandler = (storedData) => {
   setStoredData(storedData);
  };
  const yearlyData = [];
  if(storedData){
    let currentSavings = +storedData.cSaving; 
    const yearlyContribution = +storedData.ySaving; 
    const expectedReturn = +(storedData.eInterset) / 100;
    const duration = +storedData.iDuration;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  };
  return (
    <div>
      <Title/>
      <Form value={calculateHandler}/>
      {!storedData && <p className='textCentre'>No Investment Data</p>}
      {storedData && <Table Data={yearlyData} intialInvestment={storedData.cSaving}/>}
    </div>
  );
}

export default App;
