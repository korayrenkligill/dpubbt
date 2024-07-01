import { useAtom } from "jotai";
import React from "react";
import { countAtom } from "../../atom";

const AtomTest2 = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      <br />
      Atom value = {count}
      <br />
    </div>
  );
};

export default AtomTest2;
