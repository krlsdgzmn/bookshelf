import Container from "@mui/material/Container";
import { Outlet } from "react-router";
import Header from "./components/Header";

export default function Layout() {
  return (
    <Container component={"main"} maxWidth={"xl"} sx={containerStyle}>
      <Header />
      <Outlet />
    </Container>
  );
}

const containerStyle = { minHeight: "100vh" };
