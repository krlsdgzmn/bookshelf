import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  accordionStyle,
  expandIconStyle,
  memberDescriptionStyle,
  memberNameStyle,
  memberRoleStyle,
  pageHeaderStyle,
  teamMemberStyle,
} from "../styles/aboutPageStyles";
import { pageBoxStyle } from "../styles/globalStyles";

export default function AboutPage() {
  return (
    <Box sx={pageBoxStyle}>
      <Typography variant="h4" sx={pageHeaderStyle} gutterBottom>
        About Bookshelf
      </Typography>

      <Accordion sx={accordionStyle} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={expandIconStyle} />}>
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

      <Accordion sx={accordionStyle} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={expandIconStyle} />}>
          <Typography variant="h6">The Team</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={teamMemberStyle}>
            <Box>
              <Typography variant="subtitle1" sx={memberNameStyle}>
                John Karlos De Guzman
              </Typography>
              <Typography variant="body2" sx={memberRoleStyle} gutterBottom>
                Software Engineer
              </Typography>
              <Typography variant="body2" sx={memberDescriptionStyle}>
                I love building apps that are both intuitive and enjoyable to
                use. Coding for me isn&rsquo;t just about solving
                problems&mdash;it&rsquo;s about creating experiences that feel
                smooth and meaningful. When I&rsquo;m not coding, I&rsquo;m
                usually exploring new tech or tinkering with ideas that spark my
                curiosity.
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={memberNameStyle}>
                Alyhanna Faith Guinto
              </Typography>
              <Typography variant="body2" sx={memberRoleStyle} gutterBottom>
                Data Engineer
              </Typography>
              <Typography variant="body2" sx={memberDescriptionStyle}>
                I enjoy working with data and finding patterns that tell a
                story. For me, it&rsquo;s about taking something complex and
                turning it into something people can actually use and
                understand. Outside of data, I&rsquo;m always exploring &mdash;
                whether that means picking up a new hobby, discovering fresh
                music, or losing myself in a good book.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordionStyle} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={expandIconStyle} />}>
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
