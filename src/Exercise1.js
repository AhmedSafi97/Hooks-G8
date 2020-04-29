import React, { useState } from "react";

const Exercise1 = () => {
  const [color, setColor] = useState("blue");
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const mouseMoveHandler = (e) => {
    setAxis({ x: e.clientX, y: e.clientY });
    if (window.innerWidth / 2 > e.clientX) setColor("blue");
    else setColor("tomato");
  };
  return (
    <div
      style={{ background: color, height: "33vw" }}
      onMouseMove={mouseMoveHandler}
    >
      <p>
        Now I am on X: {axis.x} and Y: {axis.y}
      </p>
    </div>
  );
};

export default Exercise1;


// // different approach

// import React, { useState, useEffect } from "react";

// const Exercise1 = () => {
//   const [color, setColor] = useState("blue");
//   const [axis, setAxis] = useState({ x: 0, y: 0 });
//   const mouseMoveHandler = (e) => {
//     console.log('here')
//     setAxis({ x: e.clientX, y: e.clientY });
//     if (window.innerWidth / 2 > e.clientX) setColor("blue");
//     else setColor("tomato");
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', mouseMoveHandler);
//     return () => document.removeEventListener('mousemove', mouseMoveHandler);
//   }, []);

//   return (
//     <div
//       style={{ background: color, height: "33vw" }}
//     >
//       <p>
//         Now I am on X: {axis.x} and Y: {axis.y}
//       </p>
//     </div>
//   );
// };


// export default Exercise1;
