const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = () => (
  <div>
    <Part partName="Fundamentals of React" exercisesNumber={10} />
    <Part partName="Using props to pass data" exercisesNumber={7} />
    <Part partName="State of a component" exercisesNumber={14} />
  </div>
)

const Part = (props) => (
  // didn't work for some time simply because I had curly brackets after the arrow..
  <div>
    <p>{props.partName} {props.exercisesNumber}</p>
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  } 
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App;
