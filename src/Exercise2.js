import React, { useState, useEffect } from "react";
import axios from "axios";

import urlGenerator from "./urlGenerate";

const CancelToken = axios.CancelToken;
let cancel;

const Exercise2 = () => {
  const [enText, setEnText] = useState("");
  const [arText, setArText] = useState("");

  useEffect(() => {
    if (enText !== "") {
      axios
        .get(urlGenerator(enText), {
          cancelToken: new CancelToken(c => cancel = c),
        })
        .then(({ data }) => {
          console.log("res");
          setArText(data.text[0]);
        })
        .catch((err) => {
          if (axios.isCancel(err)) console.log("request has been cancelled");
          else if (err.response && err.response.status === 400)
            setArText("غير قادر على ترجمة هذا النص");
          else setArText("حدثت مشكلة, حاول فيما بعد");
        });
      return () => cancel("cancelled");
    } else {
      setArText("");
    }
  }, [enText]);
  return (
    <div className="container text-center pt-5">
      <input
        type="text"
        value={enText}
        onChange={(e) => setEnText(e.target.value)}
      />
      <p>{arText}</p>
    </div>
  );
};

export default Exercise2;

//using fetch

// const controller = new AbortController();
// const { signal } = controller;
// fetch(urlGenerator(enText), { signal })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log("res");
//     if (res.code === 200) setArText(res.text[0]);
//     else if (res.code === 502) setArText("غير قادر على ترجمة هذا النص");
//   })
//   .catch((err) => {
//     if (err.name === "AbortError")
//       console.log("request has been cancelled");
//     else setArText("حدثت مشكلة, حاول فيما بعد");
//   });
// return () => controller.abort();
