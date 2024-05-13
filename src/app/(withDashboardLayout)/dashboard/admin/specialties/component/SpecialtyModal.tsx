import PHModal from "@/components/Shared/PHModal/PHModal";
import PHFileUploader from "@/components/UI/Form/PHFileUploader";
import PHForm from "@/components/UI/Form/PHForm";
import PHInput from "@/components/UI/Form/PHInput";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpecialtyModal = ({ open, setOpen }: IProps) => {
  const [createSpecialty, { isLoading, isError, isSuccess }] =
    useCreateSpecialtyMutation();

  const handleSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      if (res.id) {
        toast.success("Success");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create A Specialty">
      <PHForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput
              type="text"
              name="title"
              placeholder="Title"
              label="Title"
            />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialtyModal;
