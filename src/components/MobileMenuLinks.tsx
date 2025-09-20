import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link } from "react-router";
import { links } from "../routes";
import { mobileMenuLinksStyle } from "../styles/headerStyles";

export default function MobileMenuLinks() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  return (
    <Box sx={mobileMenuLinksStyle}>
      <IconButton
        onClick={(event) => setAnchorElNav(event.currentTarget)}
        color={"inherit"}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={() => setAnchorElNav(null)}
      >
        {links.map((link) => (
          <MenuItem
            component={Link}
            to={link.path}
            key={link.path}
            onClick={() => setAnchorElNav(null)}
          >
            {link.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
