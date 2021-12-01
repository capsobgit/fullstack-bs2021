import React, { useState } from "react";

/**
 *
 * This App collects feedback for unicafe
 */

const Statistics = (props) => {
  const computeAllScore = () => {
    return props.good + props.neutral + props.bad;
  };

  const computeAverageScore = () => {
    return (props.good - props.bad) / 9;
  };

  const computePositiveScore = () => {
    return (100 / computeAllScore()) * props.good;
  };

  if (props.init === false) {
    return (
      <tbody>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={computeAllScore()} />
      <StatisticLine text="average" value={computeAverageScore()} />
      <StatisticLine
        text="positive"
        value={isNaN(computePositiveScore()) ? 0 : computePositiveScore()}
      />
    </tbody>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{text === "positive" ? value + "%" : value}</td>
    </tr>
  );
};

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [init, setInit] = useState(false);

  const handleUpvote = () => {
    setGood(good + 1);
    if (init === false) {
      setInit(true);
    }
  };
  const handleNeutralvote = () => {
    setNeutral(neutral + 1);
    if (init === false) {
      setInit(true);
    }
  };
  const handleDownvote = () => {
    setBad(bad + 1);
    if (init === false) {
      setInit(true);
    }
  };

  return (
    <>
      <h1>give feedback here</h1>
      <Button onClick={handleUpvote}>good</Button>
      <Button onClick={handleNeutralvote}>neutral</Button>
      <Button onClick={handleDownvote}>bad</Button>
      <h2>statistics</h2>
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} init={init} />
      </table>
    </>
  );
};

export default App;
