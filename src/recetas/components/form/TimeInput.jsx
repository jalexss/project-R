import { Grid, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";

import { FormLayout } from "../../layout/FormLayout";
import { MinuteSlicer } from "../slicer";

export const TimeInput = ({ setValue, register }) => {

  return (
    <FormLayout>
        <Typography variant="subtitle1" color={ grey[700] } >
          How much time to prepare this receta?
        </Typography>

        <Typography 
          variant="subtitle2" 
          color={ grey[600] }
          sx={{ fontWeight: 'regular' }} 
        >
          Expressed in minutes... max 24 hours.
        </Typography>

        <MinuteSlicer setValue={setValue} register={register} />
    </FormLayout>
  )
}

