import { useRef } from "react";

const useRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current.value); //inputRef will return Object
    inputRef.current.value = "Hello World";
    console.log(inputRef.current.value);
    inputRef.current.style.backgroundColor = "red";
    console.log(paraRef.current);
    paraRef.current.innerText = "Goodbye";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control mb-2"
          ref={inputRef}
          id="name"
        />
        <button className="btn-primary btn" type="submit">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
};

export default useRefExample1;
