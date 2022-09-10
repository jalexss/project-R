import { useForm } from "react-hook-form";

import { Grid } from "@mui/material"

import { RecetaLayout } from "../../layouts";
import { DescriptionInput, IngredientInput, InstructionInput, TimeInput, TitleInput, UploadImage } from "../../components/receta/form"
import { BackToHomeButton, CreateButton } from "../../components";


export const RecetaFormPage = () => {
  
  const { 
    register,
    handleSubmit,
    control,
    setValue, 
    formState: { errors } 
  } = useForm({
    mode: 'onChange',
    defaultValues: { 
      ingredients: [{ name: "" }],
    }
  });
  
  const onSubmit = (data) => {
    console.log(data);
  }  

  return (
    <RecetaLayout>
      <Grid container 
        flexDirection="column"
        spacing={1} 
      >
        <Grid sx={{ pr: '16px', py: '10px'}}>

          <BackToHomeButton />
          
          <form onSubmit={handleSubmit(onSubmit)}>

              <TitleInput register={register} errors={errors}  />
              
              <DescriptionInput register={register} errors={errors}/>

              <IngredientInput 
                control={control} 
                register={register} 
                errors={errors} 
              />

              <InstructionInput register={register} errors={errors} />

              <TimeInput 
                setValue={setValue} 
                register={register}
                errors={errors} 
              />

              <UploadImage 
                setValue={setValue} 
                register={register} 
                errors={errors}
              />
            
              <CreateButton />

          </form>
        </Grid>
      </Grid>
    </RecetaLayout>
  )
}
