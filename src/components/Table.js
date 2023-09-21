export default function Table({ tableData }) {
  const currencyFormat = new Intl.NumberFormat("us-en", {
    style: "currency",
    currency: "USD",
  });

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
        {tableData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{currencyFormat.format(data.currentSavings)}</td>
            <td>{currencyFormat.format(data.yearlyInterest)}</td>
            <td>{currencyFormat.format(data.totalInterest)}</td>
            <td>{currencyFormat.format(data.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
