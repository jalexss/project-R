import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Alert, Button, CircularProgress, Grid } from "@mui/material";

import { RecetaLayout } from "../../layouts";
import {
  DescriptionInput,
  IngredientInput,
  InstructionInput,
  TimeInput,
  TitleInput,
  UploadImage,
} from "../../components/receta/form";
import { BackToHomeButton } from "../../components";
import { useCreateRecetaMutation } from "../../store/api";

export const RecetaFormPage = () => {
  const navigate = useNavigate();
  const [createReceta, { error, isError, isLoading }] =
    useCreateRecetaMutation();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      ingredients: [""],
      minutes: 1,
    },
  });

  const onSubmit = (data) => {
    createReceta(data)
      .unwrap()
      //TODO CAMBIR POR UN SNACKBAR O ALGO CON UN MENSAJE DE RETROALIMENTACION
      //fulfilled tiene ok: true y msg: receta creada correctamente
      .then(() => navigate("/"));
  };

  return (
    <RecetaLayout>
      <Grid container flexDirection="column" spacing={1}>
        <Grid sx={{ pr: "16px", py: "10px" }}>
          <BackToHomeButton />

          <form onSubmit={handleSubmit(onSubmit)}>
            <TitleInput register={register} errors={errors} />

            <DescriptionInput register={register} errors={errors} />

            <IngredientInput
              control={control}
              register={register}
              errors={errors}
            />

            <InstructionInput register={register} errors={errors} />

            <TimeInput register={register} errors={errors} />

            <Alert
              severity="error"
              sx={{ mt: 1, display: isError ? "flex" : "none" }}
            >
              {error?.data.msg}
            </Alert>

            {/* <UploadImage
              setValue={setValue}
              register={register}
              errors={errors}
            /> */}

            <Grid item sx={{ mb: 2, mt: 1, position: "relative" }}>
              <Button
                type="submit"
                disabled={isLoading}
                variant="contained"
                fullWidth
              >
                Next
              </Button>
              {isLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Grid>
          </form>
        </Grid>
      </Grid>
    </RecetaLayout>
  );
};
