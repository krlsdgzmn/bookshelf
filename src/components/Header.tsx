import LibraryBooks from "@mui/icons-material/LibraryBooks";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router";
import { links } from "../router";
import {
  activeLinkStyle,
  appBarStyles,
  leftBoxStyle,
  linkStyle,
  titleStyle,
  toolbarStyle,
} from "../styles/headerStyles";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  const location = useLocation();

  return (
    <AppBar position="sticky" sx={appBarStyles} elevation={0}>
      <Toolbar sx={toolbarStyle}>
        <Box sx={leftBoxStyle}>
          <LibraryBooks />
          <Typography component={Link} to={"/"} sx={titleStyle}>
            BOOKSHELF
          </Typography>

          {links.map((link) => (
            <Typography
              component={Link}
              to={link.path}
              style={
                location.pathname === link.path ? activeLinkStyle : linkStyle
              }
            >
              {link.name}
            </Typography>
          ))}
        </Box>

        <ToggleThemeButton />
      </Toolbar>
    </AppBar>
  );
}
