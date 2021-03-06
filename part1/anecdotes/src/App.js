import React, { useState } from "react";

const Button = (props) => {
  /**
   * conditional rendering of specific button
   */
  if (props.name === "choose") {
    return <button onClick={props.handleRandomItem}>next anecdote</button>;
  }
  if (props.name === "vote")
    return (
      <button
        onClick={() => {
          props.handleIncrementVote();
        }}
      >
        vote
      </button>
    );
};

const Display = (props) => {
  return <div>{props.anecdotes[props.maxVotedIndex]}</div>;
};

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const vote = new Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(vote);
  const [maxVotedIndex, setMaxVotedIndex] = useState(0);

  /**
   * return random item distinct to current item
   */
  function handleRandomItem() {
    let randnum = computeNextRandomItem(anecdotes.length);
    while (randnum === selected) {
      randnum = computeNextRandomItem(anecdotes.length);
    }
    setSelected(randnum);
  }
  /**
   * return random number
   */
  const computeNextRandomItem = (num) => {
    return Math.floor(Math.random() * num);
  };
  /**
   * increments anecdotes vote
   */
  function handleIncrementVote() {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(
      votes.map((item, i) => {
        return i === selected ? (votes[selected] += 1) : votes[i];
      })
    );

    getMaxVotedAnecdote();
  }

  /**
   * return Index pos of most voted anecdote
   */
  const getMaxVotedAnecdote = () => {
    let index = 0;
    let max = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > max) {
        index = i;
        max = votes[i];
      }
    }
    setMaxVotedIndex(index);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button name="choose" handleRandomItem={handleRandomItem}></Button>
      <Button name="vote" handleIncrementVote={handleIncrementVote}></Button>
      <h1>Anecdote with most votes</h1>
      <Display anecdotes={anecdotes} maxVotedIndex={maxVotedIndex} />
    </>
  );
}
export default App;
