import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import { cardStyle } from "../styles/bookCardStyles";

interface BookCardSkeletonProps {
  isTrendingSection: boolean;
}

export default function BookCardSkeleton(props: BookCardSkeletonProps) {
  return Array(props.isTrendingSection ? 12 : 6)
    .fill(null)
    .map((_, index) => (
      <Grid key={index} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
        <Card sx={cardStyle}>
          <Skeleton variant="rectangular" width={"100%"} height={140} />
          <CardContent sx={{ pt: 0.5 }}>
            {Array(4)
              .fill(null)
              .map((_, j) => (
                <Skeleton
                  key={j}
                  width={`${Math.floor(Math.random() * (100 - 20 + 1)) + 20}%`}
                />
              ))}
          </CardContent>
        </Card>
      </Grid>
    ));
}
