import { Link as RouterLink } from "react-router-dom"
import { Link, CardContent, Typography } from "@mui/material"

export const RecetaContent = ({ description, id }) => {
  return (
    <CardContent>
      <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Link 
        component={ RouterLink }
        to={`/receta/${id}`} 
        color="#37474f" 
        underline="hover" 
        sx={{ mt: 2 }}
      >
        View details...
      </Link>
  </CardContent>
  )
}

