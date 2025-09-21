import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router";
import { links } from "../routes";
import {
  activeLinkStyle,
  desktopLinksStyle,
  linkStyle,
} from "../styles/headerStyles";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Close from '@mui/icons-material/Close';

export default function DesktopLinks() {
  const location = useLocation();

  return (
    <Box sx={desktopLinksStyle}>
      {links.map((link) => (
        <Typography
          key={link.path}
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
