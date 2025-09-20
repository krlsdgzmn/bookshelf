import Box from "@mui/material/Box";
import FetchError from "../components/FetchError";
import Section from "../components/Section";
import { useFetch } from "../hooks/useFetch";
import { pageBoxStyle } from "../styles/globalStyles";

export default function TrendingPage() {
  const { daily, science, fiction, history, isLoading, error } = useFetch();

  const sections = [
    { title: "Trending Books Today", books: daily, isTrendingSection: true },
    { title: "Popular Fiction", books: fiction },
    { title: "Science & Technology", books: science },
    { title: "History & Biography", books: history },
  ];

  if (!isLoading && error) return <FetchError error={error} />;

  return (
    <Box sx={pageBoxStyle}>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          books={section.books}
          isLoading={isLoading}
          isTrendingSection={section.isTrendingSection ?? false}
        />
      ))}
    </Box>
  );
}
