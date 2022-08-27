const Courses = function ({ courses }) {
  return (
    <>
      {courses.map((course) => {
        return (
          <>
            <h1 key={course.id}>{course.name}</h1>
            <div>
              {course.parts.map((part) => (
                <p key={part.id}>
                  {part.name} {part.exercises}
                </p>
              ))}
            </div>
            <b>
              <div>
                total of{" "}
                {course.parts.reduce(function (sum, part) {
                  return sum + part.exercises;
                }, 0)}{" "}
                exercises
              </div>
            </b>
          </>
        );
      })}
    </>
  );
};

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middleware",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Courses courses={courses} />;
};

export default App;
