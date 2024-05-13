"use client";
import PHForm from "@/components/UI/Form/PHForm";
import PHInput from "@/components/UI/Form/PHInput";
import PHSelectField from "@/components/UI/Form/PHSelectField";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  params: {
    doctorId: string;
  };
};
const EditDoctor = ({ params }: TProps) => {
  const id = params?.doctorId;
  const router = useRouter();
  const { data, isLoading } = useGetDoctorQuery(id);
  const [updateDoctor, { isError, isSuccess }] = useUpdateDoctorMutation();
  console.log(isError, isSuccess, data);
  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    appointmentFee: data?.appointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };

  const handleSubmit = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.appointmentFee = Number(values.appointmentFee);
    // values.id = id;
    console.log(values);
    try {
      const res = await updateDoctor({ id, body: values }).unwrap();
      if (res?.id) {
        toast.success("Doctor Updated Successfully!!!");
        router.push("/dashboard/admin/doctors");
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something is wrong....");
    }
  };

  return (
    <Box>
      <Typography
        sx={{ mb: 3, textAlign: "center" }}
        variant="h6"
        component="h6"
      >
        Update Doctor Info
      </Typography>
      {isLoading ? (
        "Loading..."
      ) : (
        <PHForm onSubmit={handleSubmit} defaultValues={data && defaultValues}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                fullWidth={true}
                sx={{ mb: 2 }}
                type="text"
                name="name"
                placeholder="Name"
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                label="Contact Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="text"
                name="address"
                placeholder="Address"
                label="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="number"
                name="registrationNumber"
                placeholder="Registration Number"
                label="Registration Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="number"
                name="experience"
                placeholder="Experience"
                label="Experience"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHSelectField
                name="gender"
                label="Gender"
                items={Gender}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="number"
                name="appointmentFee"
                placeholder="Appointment Fee"
                label="Appointment Fee"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="text"
                name="qualification"
                placeholder="Qualification"
                label="Qualification"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="text"
                name="currentWorkingPlace"
                placeholder="Current Working Place"
                label="Current Working Place"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                type="text"
                name="designation"
                placeholder="Designation"
                label="Designation"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Button sx={{ mt: 1 }} type="submit">
            Update
          </Button>
        </PHForm>
      )}
    </Box>
  );
};

export default EditDoctor;
