import React from "react";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content obj={course.parts} />
      <Total obj={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return <div>{props.course}</div>;
};

const Content = (props) => {
  return (
    <div>
      <Part obj={props.obj[0]} />
      <Part obj={props.obj[1]} />
      <Part obj={props.obj[2]} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises &nbsp;
      {props.obj[0].exercises + props.obj[1].exercises + props.obj[2].exercises}
    </p>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.obj.name} {props.obj.exercises}
      </p>
    </>
  );
};

export default App;
