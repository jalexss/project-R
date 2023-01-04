import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import avatarGirl from "../../../../localstorage/avatarGirl.png";

export const MyRecetaCard = ({ receta }) => {
  const { description, images, title } = receta;
  return (
    <Grid item sx={{ display: "flex" }}>
      <Card sx={{ width: 450 }} xs={6} md={4}>
        <CardActionArea>
          {images > 0 && (
            <CardMedia
              component="img"
              height="140"
              image={avatarGirl}
              alt={`receta user ${title}`}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {title}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
