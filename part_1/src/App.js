import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

// Keep in mind that React component names must be CAPITALIZED. 
// If you try defining a component as e.g. "const footer = () => {}" 
// and use it then like "<footer />" it wouldn't work.

//Note that the content of a React component (usually) needs to contain one root element. 
// If we, for example, try to define the component App without the outermost div-element
// the result is an error message.
// Instead of "extra" div-elements in the DOM-tree we can also avoid that by using
// "fragments", i.e. by wrapping the elements to be returned by the component 
// with an empty element.

export default App;
