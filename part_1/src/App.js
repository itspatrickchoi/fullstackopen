const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} yearas old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/itspatrickchoi" target="_blank">itspatrickchoi</a>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10

  return (
  <>
    <h1>Greetings</h1>
    <Hello name="Maya" age={26 + 10} />
    <Hello name={name} age={age} />
    <Footer />
  </>
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
