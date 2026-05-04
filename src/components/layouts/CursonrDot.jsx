import { useEffect, useState } from "react";

const CursonrDot = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setShow(false);
    }
  }, []);

  if (!show) return null;
  return <div id="cursor-dot" />;
};

export default CursonrDot;
