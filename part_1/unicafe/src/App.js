import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => (
  <div>
    {props.text} {props.stat}
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setNeutralValue = () => {
    setNeutral(neutral+1)
  }

  let all = good+neutral+bad
  let average = (good*1 + neutral*0 -1*bad)/all
  let positive = (good/all)*100 + " %"
  console.log(all, average, positive)

  if (all != 0) {
    return (
      <>
        <h1>get feedback</h1>
        <Button handleClick={() => setGood(good+1)} text="good" />
        <Button handleClick={setNeutralValue} text="neutral" />
        <Button handleClick={() => setBad(bad+1)} text="bad" />
        <h1>statistics</h1>
        <Statistics text="good" stat={good} />
        <Statistics text="neutral" stat={neutral} />
        <Statistics text="bad" stat={bad} />
        <Statistics text="all" stat={all} />
        <Statistics text="average" stat={average} />
        <Statistics text="positive" stat={positive} />
      </>
    )
  }
  else {
    return (
      <>
        <h1>get feedback</h1>
        <Button handleClick={() => setGood(good+1)} text="good" />
        <Button handleClick={setNeutralValue} text="neutral" />
        <Button handleClick={() => setBad(bad+1)} text="bad" />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
}

export default App
