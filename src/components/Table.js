import '../main.css';
const formatter=new Intl.NumberFormat('en-Us',{
  style:'currency',
  currency:'USD',
  minimumFractionDigits:2,
  maximumFractionDigits:2
})
function Table(props){
    return(
        <div>
      <table className="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            props.Data.map((val)=>(
                <tr key={val.year}>     
            <td>{val.year}</td>
            <td>{formatter.format(val.savingsEndOfYear)}</td>
            <td>{formatter.format(val.yearlyInterest)}</td>
            <td>{formatter.format(val.savingsEndOfYear-props.intialInvestment-(val.yearlyInterest*val.year))}</td>
            <td>{formatter.format(props.intialInvestment+(val.yearlyInterest*val.year))}</td>
          </tr>
            ))
          }
          </tbody>
      </table>
        </div>
    );
}
export default Table;