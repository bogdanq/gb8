import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Avatar,
  Container,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { signOut } from "firebase/auth";
import styles from "./header.module.css";
import { ThemeContext } from "../../theme-context";
import { auth } from "../../api/firebase";

const menuWithSession = [
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

const menuWithoutSession = [
  { title: "SignUp", to: "/sign-up" },
  { title: "Login", to: "/login" },
  { title: "Home", to: "/" },
];

export function Header({ session }) {
  const { themeSetter, theme } = useContext(ThemeContext);

  return (
    <AppBar position="static" color="primary" className={styles.appBar}>
      <Container maxWidth="xl">
        <Button
          onClick={() => themeSetter("light")}
          style={{ color: theme.theme.color }}
        >
          light
        </Button>
        <Button
          onClick={() => themeSetter("dark")}
          style={{ color: theme.theme.color }}
        >
          dark
        </Button>

        {!!session && (
          <Button
            onClick={() => signOut(auth)}
            style={{ color: theme.theme.color }}
          >
            out
          </Button>
        )}
        <hr />
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {!!session &&
              menuWithSession.map(({ to, title }) => (
                <Button
                  key={title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link className={styles.link} to={to}>
                    {title}
                  </Link>
                </Button>
              ))}

            {!session &&
              menuWithoutSession.map(({ to, title }) => (
                <Button
                  key={title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link className={styles.link} to={to}>
                    {title}
                  </Link>
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
