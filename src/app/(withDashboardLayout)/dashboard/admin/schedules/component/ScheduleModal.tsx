import PHModal from "@/components/Shared/PHModal/PHModal";
import PHDatePicker from "@/components/UI/Form/PHDatePicker";
import PHForm from "@/components/UI/Form/PHForm";
import PHTimePicker from "@/components/UI/Form/PHTimePicker";
import { useCreateScheduleMutation } from "@/redux/api/schedulesApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ScheduleModal = ({ open, setOpen }: IProps) => {
  const [createSchedule, { isSuccess, isError }] = useCreateScheduleMutation();

  const handleSubmit = async (values: FieldValues) => {
    values["startDate"] = dateFormatter(values.startDate);
    values["endDate"] = dateFormatter(values.endDate);
    values["startTime"] = timeFormatter(values.startTime);
    values["endTime"] = timeFormatter(values.endTime);

    await createSchedule(values);
  };

  if (isError) {
    toast.error("error having..");
  }
  if (isSuccess) {
    toast.success(" Schedule Created Successfully");
    setOpen(false);
  }
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Schedules">
      <PHForm onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <PHDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <PHDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="startTime" label="End Time" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
