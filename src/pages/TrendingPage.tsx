import Box from "@mui/material/Box";
import { pageBoxStyle } from "../styles/globalStyles";
import Section from "../components/Section";

export default function TrendingPage() {
  return (
    <Box sx={pageBoxStyle}>
      <Section title={"Trending Books Today"} />
      <Section title={"Popular Fiction"} />
      <Section title={"Science & Technology"} />
      <Section title={"History & Biography"} />
    </Box>
  );
}
