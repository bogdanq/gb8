import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context";
import styles from "./header.module.css";

const menu = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

export function Header() {
  const { theme, themeSetter } = useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <h1>
        header :: {theme.name} ::
        <span onClick={() => themeSetter("dark")}>dark</span> :_____:
        <span onClick={() => themeSetter("light")}>light</span>
      </h1>

      <ul style={{ display: "flex" }}>
        {menu.map((item) => (
          <li key={item.title}>
            <NavLink to={item.to}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
