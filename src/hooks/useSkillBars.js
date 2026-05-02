import { useEffect } from "react";

export function useSkillBars() {
  useEffect(() => {
    const groups = document.querySelectorAll(".skill-group");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              const w = bar.getAttribute("data-width");
              setTimeout(() => (bar.style.width = w + "%"), 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    groups.forEach((g) => observer.observe(g));
    return () => observer.disconnect();
  }, []);
}
