import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //Check if function
    const valueToStorage =
      value instanceof Function ? value(localStorageValue) : value;

    //set to state
    setLocalStorageValue(value);

    //set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStorage));
  };

  return [localStorageValue, setValue];
};

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
