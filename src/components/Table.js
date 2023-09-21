export default function Table({ tableData }) {
  return (
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
        {tableData.map((year) => (
          <tr key={year.year}>
            <td>{year.year}</td>
            <td>{year.currentSavings}</td>
            <td>{year.yearlyInterest}</td>
            <td>{year.totalInterest}</td>
            <td>{year.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
