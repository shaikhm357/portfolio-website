import { useEffect } from "react";

export function useCursorDot() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    if (!dot) return;
    const move = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);
}
