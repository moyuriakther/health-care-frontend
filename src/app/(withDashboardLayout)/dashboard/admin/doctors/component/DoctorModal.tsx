import PHFullScreenModal from "@/components/Shared/PHModal/FPHFullScreenModal";
import PHForm from "@/components/UI/Form/PHForm";
import PHInput from "@/components/UI/Form/PHInput";
import PHSelectField from "@/components/UI/Form/PHSelectField";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValues = {
  doctor: {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    registrationNumber: "",
    gender: "",
    experience: 0,
    appointmentFee: 0,
    qualification: "",
    currentWorkingPlace: "",
    designation: "",
    profilePhoto: "",
  },
  password: "",
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor, { isError, isLoading }] = useCreateDoctorMutation();
  

  const handleSubmit = async (values: FieldValues) => {
    // console.log(values);
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.appointmentFee = Number(values.doctor.appointmentFee);
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await createDoctor(data).unwrap();
      if (res.id) {
        toast.success("Doctor is Created Successfully");
        setOpen(false);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create A Doctor">
      <PHForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              fullWidth={true}
              sx={{ mb: 2 }}
              type="text"
              name="doctor.name"
              placeholder="Name"
              label="Name"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="email"
              name="doctor.email"
              placeholder="Email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="password"
              name="password"
              placeholder="Password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="text"
              name="doctor.contactNumber"
              placeholder="Contact Number"
              label="Contact Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="text"
              name="doctor.address"
              placeholder="Address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="number"
              name="doctor.registrationNumber"
              placeholder="Registration Number"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="number"
              name="doctor.experience"
              placeholder="Experience"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelectField
              name="doctor.gender"
              label="Gender"
              items={Gender}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="number"
              name="doctor.appointmentFee"
              placeholder="Appointment Fee"
              label="Appointment Fee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="text"
              name="doctor.qualification"
              placeholder="Qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="text"
              name="doctor.currentWorkingPlace"
              placeholder="Current Working Place"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              type="text"
              name="doctor.designation"
              placeholder="Designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default DoctorModal;
