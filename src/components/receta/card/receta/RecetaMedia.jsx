import { CardMedia } from "@mui/material"


export const RecetaMedia = ({ images, user }) => {
  return (
    <>
      <CardMedia
        component="img"
        height="194"
        image={ images[0].src }
        alt={user.username}
      />
    </>
  )
}

