import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const menu = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
];

export function Header() {
  return (
    <div className={styles.header}>
      <h1>header</h1>

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
