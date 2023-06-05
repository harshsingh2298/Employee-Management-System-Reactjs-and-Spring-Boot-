import React, { useEffect, useState } from "react";
import useDocumentTitle from "../CustomHooks/useDocumentTitle";

function DockTitleOne() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count - {count}
      </button>
    </div>
  );
}
export default DockTitleOne;
