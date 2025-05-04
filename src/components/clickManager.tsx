import { useLocation, useNavigate } from "react-router-dom";

export function useClickManager() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick(id: string, e: React.MouseEvent<HTMLAnchorElement>) {
    if (location.pathname === "/") {
      e.preventDefault();

      const section = document.getElementById(id);
      if (section)
        section.scrollIntoView({ behavior: "smooth" });
      else
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      e.preventDefault();
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section)
          section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }

  return handleClick;
}
