import { useState } from 'react'

const Buttons = (props) => {
  return (
    <div style={props.style}>
       <button onClick={props.voteFunction}>vote</button>
       <button onClick={props.randomFunction}>next anecdote</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [quoteWithMostVotes, setQuoteWithMostVotes] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)

  let random = 0

  const randomFunction = () => {
    random = Math.round(Math.random() * (anecdotes.length-1))
    console.log(anecdotes.length, random)
    setSelected(random)
  }
  const voteFunction = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    for (let i = 0; i < points.length; i++) {
      if (copyPoints[i] > mostVotes) {
        setMostVotes(copyPoints[i])
        setQuoteWithMostVotes(i)
        console.log("quote ", quoteWithMostVotes, "has most votes: ", mostVotes)
      }
    }
    console.log("copyPoints: ", copyPoints)
    setPoints(copyPoints)
  }

  const divStyle = {
    //border: '1px solid black',
    margin: '1em'
  }

  const buttonsStyle = {
    //border: '3px solid black',
    top: '10em',
    left: '24px',
    position: 'fixed'
  }

  const voteStyle = {
    top: '8em',
    left: '24px',
    position: 'fixed'
  }

  const divStyle2 = {
    //border: '1px solid black',
    top: '11em',
    left: '24px',
    position: 'fixed'
  }

  const voteStyle2 = {
    top: '20em',
    left: '24px',
    position: 'fixed'
  }

  return (
    <>
      <div style={divStyle}>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
      </div>
      <div style={voteStyle}>
      votes: {points[selected]}
      </div>
      <div>
        <Buttons style={buttonsStyle} randomFunction={randomFunction} voteFunction={voteFunction} />
      </div>

      <div style={divStyle2}>
        <h1>Anecdote with most votes</h1>
        {anecdotes[quoteWithMostVotes]}
      </div>
      <div style={voteStyle2}>
      votes: {mostVotes}
      </div>
    </>
  )
}

export default App
