import React, { useState } from "react";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";

const App = () => {
  const [exercise, setExercise] = useState();
  return (
    <div className="container text-center pt-5">
      <button onClick={() => setExercise("Exercise 1")}>Exercise 1</button>
      <button onClick={() => setExercise("Exercise 2")}>Exercise 2</button>
      <hr />
      {exercise === "Exercise 1" && <Exercise1 />}
      {exercise === "Exercise 2" && <Exercise2 />}
    </div>
  );
};

export default App;
