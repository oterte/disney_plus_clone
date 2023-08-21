import { useState, useEffect } from "react";

export const useDebouce = (value, delay) => {
  const [debouceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouceValue;
};
