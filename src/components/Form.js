import { useState } from "react";

const initialInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

export default function Form({ onCalculateInvestment, onResetData }) {
  // const [currentSavings, setCurrentSavings] = useState("");
  // const [yearlyContribution, setYearlyContribution] = useState("");
  // const [interestRate, setInteresRate] = useState("");
  // const [duration, setDuration] = useState("");

  const [userInput, setUserInput] = useState(initialInput);

  const handleSubmit = (e) => {
    e.preventDefault();

    // onResetData();

    // const investmentInfo = {
    //   currentSavings,
    //   yearlyContribution,
    //   interestRate,
    //   duration,
    // };

    // onCalculateInvestment(investmentInfo);
    // setCurrentSavings("");
    // setYearlyContribution("");
    // setInteresRate("");
    // setDuration("");
  };

  const handleReset = () => {
    setUserInput(initialInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(e) =>
              inputChangeHandler("current-savings", Number(e.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", Number(e.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(e) =>
              inputChangeHandler("expected-return", Number(e.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(e) =>
              inputChangeHandler("duration", Number(e.target.value))
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
