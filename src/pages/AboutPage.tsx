import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { pageBoxStyle } from "../styles/globalStyles";

export default function AboutPage() {
  return (
    <Box sx={pageBoxStyle}>
      <Typography variant="h4" sx={{ pt: 4 }} gutterBottom>
        About Bookshelf
      </Typography>

      <Accordion
        sx={{
          backgroundColor: "rgba(20, 20, 20, 0.8)",
          color: "white",
        }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        >
          <Typography variant="h6">Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Bookshelf is a modern web application designed to help book
            enthusiasts discover, browse, and explore a vast collection of
            books. Whether you're looking for trending reads, random
            recommendations, or specific titles, Bookshelf makes it easy to find
            your next favorite book.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "rgba(20, 20, 20, 0.8)",
          color: "white",
        }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        >
          <Typography variant="h6">The Team</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                John Karlos De Guzman
              </Typography>
              <Typography variant="body2" color="#DDD">
                Software Engineer
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Alyhanna Faith Guinto
              </Typography>
              <Typography variant="body2" color="#DDD">
                Data Engineer
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "rgba(20, 20, 20, 0.8)",
          color: "white",
        }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        >
          <Typography variant="h6">Our Vision</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            As avid readers and tech enthusiasts, we wanted to create a platform
            that bridges the gap between technology and literature. Bookshelf
            was born out of our passion for books and the desire to make book
            discovery more accessible and enjoyable.
          </Typography>
          <Typography variant="body1">
            We aimed to build an intuitive app that leverages open APIs to
            provide real-time book data, helping users find inspiration for
            their next read without the hassle.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
