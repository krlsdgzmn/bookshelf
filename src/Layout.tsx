import Container from "@mui/material/Container";
import { Outlet } from "react-router";
import Header from "./components/Header";
import { containerStyle } from "./styles/globalStyles";

export default function Layout() {
  return (
    <Container component={"main"} maxWidth={"xl"} sx={containerStyle}>
      <Header />
      <Outlet />
    </Container>
  );
}
