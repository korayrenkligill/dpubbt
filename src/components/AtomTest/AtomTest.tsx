import { useAtom } from "jotai";
import React from "react";
import { countAtom } from "../../atom";

const AtomTest = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      Atom value = {count}
      <br />
      <button onClick={() => setCount((data) => data + 1)}>Increase</button>
    </div>
  );
};

export default AtomTest;
