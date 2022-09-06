import { Grid, TextField } from "@mui/material"
import { grey } from "@mui/material/colors"

import { FormLayout } from "../../layout/FormLayout";
import { titleValidation } from "../../../helpers";


export const TitleInput = ({ register, errors }) => {

  const helperTextMain = "Min 10 characters. Max 70 characters."

  return (
    <FormLayout>
      <TextField
        required 
        label="Title"
        type="text"
        placeholder='Write a nice title for you receta!'
        helperText={!!errors?.title ? errors.title.message : helperTextMain} 
        error={ !!errors?.title }
        fullWidth
        {...register('title', titleValidation)}
      />
    </FormLayout>
  )
}

