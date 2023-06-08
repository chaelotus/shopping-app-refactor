import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios(url).then((data) => {
      setData(data.data);
    });
  }, [url]);
  return [data];
};

export default useFetch;
