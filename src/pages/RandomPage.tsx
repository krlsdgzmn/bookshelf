import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FetchError from "../components/FetchError";
import Section from "../components/Section";
import { useRandom } from "../hooks/useRandom";
import { buttonStyle, pageBoxStyle } from "../styles/globalStyles";
import {
  headerStyle,
  subtitleStyle,
  titleStyle,
} from "../styles/randomPageStyles";

export default function RandomPage() {
  const {
    randomBooks,
    subjects,
    currentSubjectIndex,
    fetchRandomBooks,
    isLoading,
    error,
  } = useRandom();

  if (!isLoading && error) return <FetchError error={error} />;

  return (
    <Box sx={pageBoxStyle}>
      <Box sx={headerStyle}>
        <Typography sx={titleStyle}>
          Don&apos;t know what to read next?
        </Typography>

        <Typography sx={subtitleStyle}>
          Let us choose a book at random from our collection.
        </Typography>

        <Button variant="contained" onClick={fetchRandomBooks} sx={buttonStyle}>
          Surprise Me
        </Button>
      </Box>

      <Section
        title={
          randomBooks.length > 0 ? `${subjects[currentSubjectIndex]} Books` : ""
        }
        books={randomBooks}
        isLoading={isLoading}
        isTrendingSection={false}
      />
    </Box>
  );
}
