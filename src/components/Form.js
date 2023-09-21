import { useState } from "react";

export default function Form({ onCalculateHandler }) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [interestRate, setInteresRate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const investmentInfo = {
      currentSavings,
      yearlyContribution,
      interestRate,
      duration,
    };

    onCalculateHandler(investmentInfo);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={(e) => setYearlyContribution(Number(e.target.value))}
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
            value={interestRate}
            onChange={(e) => setInteresRate(Number(e.target.value))}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
