import { useState } from "react";

const Header = ({ header }) => <h1>{header}</h1>;

const Button = ({ type, handleClick }) => (
  <button onClick={() => handleClick(type)}>{type}</button>
);

const Result = ({ name, result }) => (
  <tr>
    <td>{name}</td>
    <td>{result}</td>
  </tr>
);

const Stats = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  if (all === 0) {
    return <p>No Feedback Given</p>;
  }

  return (
    <table>
      <tbody>
        <Result name="Good" result={good} />
        <Result name="Neutral" result={neutral} />
        <Result name="Bad" result={bad} />
        <Result name="All" result={all} />
        <Result name="Average" result={average.toFixed(1)} />
        <Result name="Positive" result={`${positive.toFixed(1)}%`} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (type) => {
    if (type === "good") setGood(good + 1);
    else if (type === "neutral") setNeutral(neutral + 1);
    else if (type === "bad") setBad(bad + 1);
  };

  return (
    <div>
      <Header header="Give Feedback" />
      <Button type="Good" handleClick={handleClick} />
      <Button type="Neutral" handleClick={handleClick} />
      <Button type="Bad" handleClick={handleClick} />

      <Header header="Statistics" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
