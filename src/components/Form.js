import { useState } from 'react';
import '../main.css';
function Form(props){
  const[currentSaving,setCurrentSaving]=useState();
  const[yearlySaving,setYearlySaving]=useState();
  const[expectedInterset,setExpectedInterset]=useState();
  const[investmentDuration,setInvestmentDuration]=useState();
  const currentSavingHandler=(e)=>{
    setCurrentSaving(e.target.value);
  }
  const yearlySavingHandler=(e)=>{
    setYearlySaving(e.target.value);
  }
  const expectedIntersetHandler=(e)=>{
    setExpectedInterset(e.target.value);
  }
  const investmentDurationHandler=(e)=>{
    setInvestmentDuration(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    const storedData={
      cSaving:currentSaving,
      ySaving:yearlySaving,
      eInterset:expectedInterset,
      iDuration:investmentDuration,
    };
    props.value(storedData);
    setCurrentSaving();
    setYearlySaving();
    setExpectedInterset();
    setInvestmentDuration();
  } 
  const handleReset=(e)=>{
    e.preventDefault();
    window.reload();
  }
  return(
    <div>
        <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label>Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSaving} onChange={currentSavingHandler}/>
          </p>
          <p>
            <label >Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlySaving} onChange={yearlySavingHandler}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Interest (%, per year)</label>
            <input type="number" id="expected-return" value={expectedInterset} onChange={expectedIntersetHandler}/>
          </p>
          <p>
            <label>Investment Duration (years)</label>
            <input type="number" id="duration" value={investmentDuration} onChange={investmentDurationHandler}/>
          </p>
        </div>
        <p className="actions">
          <button type="submit" className="button">
            Calculate
          </button>
          <button type="reset" className="buttonAlt" onChange={handleReset}>
            Reset
          </button>
        </p>
      </form>
    </div>
  );
}
export default Form;