import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import Header from "../components/Header";
import { errorBoxStyle } from "../styles/errorPageStyles";
import { buttonStyle, containerStyle } from "../styles/globalStyles";

export default function ErrorPage() {
  const error = useRouteError();

  let message = "Something went wrong.";
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      message = "This page could not be found.";
    } else {
      message = `${error.status} ${error.statusText}`;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <Container component={"main"} maxWidth={"xl"} sx={containerStyle}>
      <Header />
      <Box sx={errorBoxStyle}>
        <Typography variant="h4">Oops!</Typography>
        <Typography>{message}</Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={buttonStyle}
          disableElevation
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
