import LibraryBooks from "@mui/icons-material/LibraryBooks";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router";
import { links } from "../router";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  const location = useLocation();

  return (
    <AppBar position="sticky" sx={appBarStyles} elevation={0}>
      <Toolbar sx={toolbarStyle}>
        <Box sx={leftBoxStyle}>
          <LibraryBooks />
          <Link to="/" style={linkStyle}>
            <Typography sx={titleStyle}>BOOKSHELF</Typography>
          </Link>

          {links.map((link) => (
            <Link
              to={link.path}
              style={
                location.pathname === link.path ? activeLinkStyle : linkStyle
              }
            >
              <Typography sx={linkTypographyStyle}>{link.name}</Typography>
            </Link>
          ))}
        </Box>

        <ToggleThemeButton />
      </Toolbar>
    </AppBar>
  );
}

const appBarStyles = { paddingTop: 2, backgroundColor: "transparent" };
const toolbarStyle = {
  justifyContent: "space-between",
  borderRadius: 8,
  backgroundColor: "rgba(20, 20, 20, 0.8)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};
const leftBoxStyle = { display: "flex", gap: 4, alignItems: "center" };
const titleStyle = { fontWeight: "bold", letterSpacing: 2, color: "white" };
const linkStyle = {
  textDecoration: "none",
  borderBottom: "1.5px solid transparent",
};
const activeLinkStyle = {
  textDecoration: "none",
  borderBottom: "1.5px solid rgba(137, 180, 250, 1)",
};
const linkTypographyStyle = { color: "white" };
