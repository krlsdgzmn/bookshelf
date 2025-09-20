import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router";
import { links } from "../routes";
import {
  activeLinkStyle,
  desktopLinksStyle,
  linkStyle,
} from "../styles/headerStyles";

export default function DesktopLinks() {
  const location = useLocation();

  return (
    <Box sx={desktopLinksStyle}>
      {links.map((link) => (
        <Typography
          component={Link}
          to={link.path}
          style={location.pathname === link.path ? activeLinkStyle : linkStyle}
        >
          {link.name}
        </Typography>
      ))}
    </Box>
  );
}
