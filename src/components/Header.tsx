import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

type Theme = "dark" | "light";
const Header = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const navigate = useNavigate();

  const clickHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header>
      <span className="title" onClick={() => navigate("/")}>
        Where in the world?
      </span>
      <span onClick={clickHandler}>
        {theme === "light" ? (
          <i className="fa-solid fa-moon  icon-val"></i>
        ) : (
          <i className="fa-solid fa-sun icon-val"></i>
        )}

        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </header>
  );
};

export default Header;
