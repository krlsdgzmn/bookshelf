import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";

export default function ToggleThemeButton() {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      value={mode}
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    >
      {mode === "dark" ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon sx={{ color: "white" }} />
      )}
    </IconButton>
  );
}
