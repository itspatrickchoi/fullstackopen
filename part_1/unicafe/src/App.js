import { useState } from 'react'

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const Buttons = (props) => {
  return(
    <div>
      <Button handleClick={props.setGoodValue} text="good" />
      <Button handleClick={props.setNeutralValue} text="neutral" />
      <Button handleClick={props.setBadValue} text="bad" />
    </div>
  )
}

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.stat}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return(
      <div>No feedback given</div>
    )
  }
  else {
    return(
      <div>
        <StatisticLine text="good" stat={props.good} />
        <StatisticLine text="neutral" stat={props.neutral} />
        <StatisticLine text="bad" stat={props.bad} />
        <StatisticLine text="all" stat={props.all} />
        <StatisticLine text="average" stat={props.average} />
        <StatisticLine text="positive" stat={props.positive} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => {
    setGood(good+1)
  }
  const setNeutralValue = () => {
    setNeutral(neutral+1)
  }
  const setBadValue = () => {
    setBad(bad+1)
  }

  let all = good+neutral+bad
  let average = ((good*1 + neutral*0 -1*bad)/all).toFixed(2)
  let positive = ((good/all)*100).toFixed(2) + " %"
  console.log(all, average, positive)

  
  return (
    <>
      <h1>get feedback</h1>
      <Buttons setGoodValue={setGoodValue} setNeutralValue={setNeutralValue} setBadValue={setBadValue} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </>
  )
}

export default App
