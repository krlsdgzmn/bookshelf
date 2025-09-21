import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  closeButtonStyle,
  descriptionsBoxStyle,
  detailsBoxStyle,
  errorMessageStyle,
  imageBoxStyle,
} from "../styles/dialogStyles";
import type { Book, BookDetails } from "../types";
import BookDetailsSkeleton from "./BookDetailsSkeleton";

interface BookDetailsDialogProps {
  book: Book;
  bookDetails: BookDetails | undefined;
  isLoading: boolean;
  error: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function BookDetailsDialog(props: BookDetailsDialogProps) {
  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      maxWidth={"md"}
      fullWidth
    >
      <Box minHeight={500}>
        <IconButton
          aria-label="close"
          onClick={() => props.setIsOpen(false)}
          sx={closeButtonStyle}
        >
          <Close />
        </IconButton>

        {props.isLoading && <BookDetailsSkeleton />}
        {!props.isLoading && props.error && (
          <Box sx={errorMessageStyle}>
            <Typography variant="h6" color="error">
              Error loading details: {props.error}
            </Typography>
          </Box>
        )}

        {!props.isLoading &&
          !props.error &&
          props.book &&
          props.bookDetails && (
            <Box sx={detailsBoxStyle}>
              <Box sx={imageBoxStyle}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={
                    props.book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`
                      : props.book.cover_id
                        ? `https://covers.openlibrary.org/b/id/${props.book.cover_id}-M.jpg`
                        : "https://placehold.co/800"
                  }
                  alt={props.book.title}
                />
              </Box>
              <Box sx={descriptionsBoxStyle}>
                <Typography variant="h4">{props.book.title}</Typography>
                <Typography variant="subtitle1">
                  {props.book.author_name?.join(", ") ?? "Unknown Author"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Published: {props.book.first_publish_year ?? "Unknown"}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {getDescription(props.bookDetails.description)}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {props.bookDetails.subjects?.map((subject, index) => (
                    <Chip key={index} label={subject} size="small" />
                  )) ?? (
                    <Typography variant="body2">
                      No subjects available.
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Box>
          )}
      </Box>
    </Dialog>
  );
}

function getDescription(description: BookDetails["description"]) {
  if (typeof description === "string") {
    return description;
  } else if (
    description &&
    typeof description === "object" &&
    "value" in description
  ) {
    return (description as { value: string }).value;
  }
  return "No description available.";
}
