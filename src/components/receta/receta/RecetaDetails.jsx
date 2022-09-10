import { Grid, Stack, Avatar, Typography, Box, Link, Rating } from "@mui/material"


export const RecetaDetails = ({username, stars, avatar, time, lastUpdated, date}) => {
  return (
    <Grid
      container
      id="tiempo-ultimaActualizacion-estrellas"
      direction={{lg:"row", sm:"column", xs:"column"}} 
      justifyContent={{lg:"space-around", ms:"center", xs:"center"}}
      sx={{ 
        display: 'flex',
        width: { sm:'100%', lg: '75%', xs:"100%"},
        backgroundColor: 'primary.light',
        boxShadow: 2,
        border: 1,
        borderRadius: '10px',
        borderColor: 'secondary.main',
        py: 2,
        px: 1,
        my: 3,
      }}
    >
      <Stack 
        direction={{lg:"row", sm:"column"}}
        alignItems="center"
        spacing={2}
      >
        <Avatar
          alt={username}
          src={avatar}
          sx={{ width: 67, height: 67 }}
        />
        <Typography 
          variant='customCursive' 
          sx={{
            fontSize: '1.25em'
          }}
        >
          created by...
          <Link
            underline="hover" 
            variant="subtitle1" 
            color="secondary.dark"
            href="/#"
            sx={{ ml: 1 }}
          >
            {username}
          </Link> 
        </Typography>
      </Stack>
      
      <Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Typography>
            Rate:
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <Typography>
            {stars} stars
          </Typography>
        </Stack>
        <Stack
          direction={{xs:"column"}}
          justifyContent={{xs:"center"}}
          alignItems={{xs:"center"}}
        >
          
          <Typography>
            preparation time: {time} min.
          </Typography>
          <Typography>
            last updated {lastUpdated}
          </Typography>
          <Typography>
            created at {date}
          </Typography>
        </Stack>
      </Box>
    </Grid>
  )
}

