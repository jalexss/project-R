import { Button, Grid } from '@mui/material'

export const CreateButton = () => {
  return (
      <Grid item sx={{ mb: 2, mt: 1 }}>
          <Button
            type="submit" 
            variant="contained"
            fullWidth
          >
            Create!
          </Button>
      </Grid>
  )
}
