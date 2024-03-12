import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <span className="title" onClick={() => navigate("/")}>
        Where in the world?
      </span>
      <span>
        <i className="fa-solid fa-moon icon-val"></i>Dark Mode
      </span>
    </header>
  );
};

export default Header;
