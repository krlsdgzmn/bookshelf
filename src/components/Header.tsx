import AutoStories from "@mui/icons-material/AutoStories";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
import {
  appBarStyles,
  leftBoxStyle,
  titleStyle,
  toolbarStyle,
} from "../styles/headerStyles";
import DesktopLinks from "./DesktopLinks";
import MobileMenuLinks from "./MobileMenuLinks";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  return (
    <AppBar position="sticky" sx={appBarStyles} elevation={0}>
      <Toolbar sx={toolbarStyle}>
        <MobileMenuLinks />

        <Box sx={leftBoxStyle}>
          <AutoStories />
          <Typography component={Link} to={"/"} sx={titleStyle}>
            BOOKSHELF
          </Typography>
          <DesktopLinks />
        </Box>

        <ToggleThemeButton />
      </Toolbar>
    </AppBar>
  );
}
