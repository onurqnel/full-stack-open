const CourseParts = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const MapCourse = ({ parts }) => (
  <>
    {parts.map((part) => (
      <CourseParts key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </>
);

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Total of {total} exercises</p>;
};

const App = () => {
  const course = {
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
    ],
  };

  return (
    <>
      <MapCourse parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
