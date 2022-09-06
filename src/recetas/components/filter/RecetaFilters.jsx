import { useState } from 'react'
import { Grid, Typography, Collapse, IconButton } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

import { SortByDate, SortByFlavor } from '../sortByRecetas';

export const RecetaFilters = () => {
  
  const [ checkedCollapse, setCheckedCollapse ] = useState(false)
  
  const onChangeCollapse = () => {
    setCheckedCollapse((prev) => !prev);
  }
  
  return (
    <Grid container 
        alignItems="center" 
        sx={{ ml: 3, mt: 3 }}
      >
        <Grid item>
          <IconButton
            onClick={onChangeCollapse}
          >
            <FilterListIcon />
          </IconButton>
          <Typography variant='button' >
            filter for Recetas 
          </Typography>
        </Grid>
        
        <Grid item sx={{ flexGrow: 1 }} >
          <Collapse in={checkedCollapse} >      
            <SortByDate />

            <SortByFlavor />
          </Collapse>   
        </Grid>     
    </Grid>
  )
}

