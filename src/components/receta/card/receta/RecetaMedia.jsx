import { CardMedia } from "@mui/material";
import imgTemp from "../../../../assets/img/imgNotAvailable.jpg";

export const RecetaMedia = ({ images, user }) => {
  return (
    <>
      <CardMedia
        component="img"
        height="194"
        image={images[0]}
        alt={user.username}
      />
    </>
  );
};
