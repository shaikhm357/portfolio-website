import { useEffect } from "react";

export function useSkillBars() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouchDevice) return;

    const groups = document.querySelectorAll(".skill-group");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-bar-fill").forEach((bar, i) => {
              const w = bar.getAttribute("data-width");
              setTimeout(() => (bar.style.width = w + "%"), i * 150);
            });
          } else {
            entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              bar.style.width = "0%";
              bar.style.transition = "width .5s ease";
            });
            setTimeout(() => {
              entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
                bar.style.transition = "width 1.5s cubic-bezier(.16,1,.3,1)";
              });
            }, 600);
          }
        });
      },
      { threshold: 0.2 }
    );
    groups.forEach((g) => observer.observe(g));
    return () => observer.disconnect();
  }, []);
}
