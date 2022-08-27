import React from "react";

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

export default Courses;
