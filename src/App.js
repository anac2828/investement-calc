import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    const { yearlyContribution, interestRate, duration } = userInput;
    let { currentSavings } = userInput;
    let investedCapital = currentSavings;
    let totalInterest = 0;

    // let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput["expected-return"] / 100;
    // const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * (interestRate / 100);
      investedCapital += yearlyContribution;

      currentSavings += yearlyInterest + yearlyContribution;

      totalInterest = yearlyInterest + totalInterest;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest,
        currentSavings,
        investedCapital,
        totalInterest,
      });
    }

    setTableData((previous) => [...previous, ...yearlyData]);

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <Form onCalculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {tableData.length === 0 ? (
        <p style={{ textAlign: "center" }}>Please calcuate your investment</p>
      ) : (
        <Table tableData={tableData} />
      )}
    </div>
  );
}

export default App;
