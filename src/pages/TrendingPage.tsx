import Box from "@mui/material/Box";
import Section from "../components/Section";
import { useTrending } from "../hooks/useTrending";
import { pageBoxStyle } from "../styles/globalStyles";
import ErrorPage from "./ErrorPage";
import FetchError from "../components/FetchError";

export default function TrendingPage() {
  const { data: trending, isLoading, error } = useTrending();

  const sections = [
    {
      title: "Trending Books Today",
      books: trending,
      isTrendingSection: true,
      isLoading: isLoading,
    },
    {
      title: "Popular Fiction",
      books: trending,
      isTrendingSection: false,
      isLoading: isLoading,
    },
    {
      title: "Science & Technology",
      books: trending,
      isTrendingSection: false,
      isLoading: isLoading,
    },
    {
      title: "History & Biography",
      books: trending,
      isTrendingSection: false,
      isLoading: isLoading,
    },
  ];

  if (!isLoading && error) return <FetchError error={error} />;

  return (
    <Box sx={pageBoxStyle}>
      {sections.map((section) => (
        <Section
          title={section.title}
          books={section.books}
          isLoading={section.isLoading}
          isTrendingSection={section.isTrendingSection}
        />
      ))}
    </Box>
  );
}
