import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios, { AxiosError } from "axios";
import { errorBoxStyle } from "../styles/errorPageStyles";

interface FetchErrorProps {
  error: Error | AxiosError | unknown;
}

export default function FetchError(props: FetchErrorProps) {
  let message: string;
  if (axios.isAxiosError(props.error)) {
    message = props.error.message;
  } else {
    message = `${props.error}`;
  }

  return (
    <Box sx={errorBoxStyle}>
      <Typography variant="h4">Unable to load books</Typography>
      <Typography variant="h6" sx={{ color: "text.secondary" }}>
        We encountered an issue while fetching your book collection. This might
        be a temporary network problem.
      </Typography>
      <Typography variant={"caption"}>Details: {message}</Typography>
    </Box>
  );
}
