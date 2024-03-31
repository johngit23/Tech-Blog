import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";
import LetteredAvatar from "./LetteredAvatar";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">TECH_BLOG</Link>
      </h1>
      {path === "/" && (
        <form
          className="flex justify-center items-center space-x-0"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(prompt ? "?search=" + prompt : navigate("/"));
          }}
        >
          <button className="cursor-pointer">
            <BsSearch />
          </button>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="outline-none px-3 "
            placeholder="Search a post"
            type="text"
          />
        </form>
      )}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3>
            <Link to="/create">Create</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <>
            <div onClick={showMenu}>
              <p className="cursor-pointer relative">
                <LetteredAvatar name={user.username} />
              </p>
              {menu && <Menu />}
            </div>
          </>
        ) : (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Navbar;
