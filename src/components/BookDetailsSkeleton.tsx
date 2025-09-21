import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import {
  detailsBoxStyle,
  skeletonBoxStyle,
  skeletonDetailsStyle,
} from "../styles/dialogStyles";

export default function BookDetailsSkeleton() {
  return (
    <Box sx={detailsBoxStyle}>
      <Box sx={skeletonBoxStyle}>
        <Skeleton variant="rounded" width={"100%"} height={"100%"} />
      </Box>

      <Box sx={skeletonDetailsStyle}>
        {Array(8)
          .fill(null)
          .map((_, j) => (
            <Skeleton
              key={j}
              variant="text"
              width={`${Math.floor(Math.random() * (100 - 20 + 1)) + 20}%`}
            />
          ))}
      </Box>
    </Box>
  );
}
