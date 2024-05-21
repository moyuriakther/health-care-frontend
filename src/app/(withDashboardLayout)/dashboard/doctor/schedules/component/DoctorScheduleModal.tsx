"use client";
import PHModal from "@/components/Shared/PHModal/PHModal";
import PHDatePicker from "@/components/UI/Form/PHDatePicker";
import PHForm from "@/components/UI/Form/PHForm";
import PHMultipleSelect from "@/components/UI/Form/PHMultipleSelect";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { useGetAllSchedulesQuery } from "@/redux/api/schedulesApi";
import { Button, Grid } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [createDoctorSchedule, { isError, isSuccess }] =
    useCreateDoctorScheduleMutation({});

  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);

  const query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;

  const handleSubmit = async (values: FieldValues) => {
    await createDoctorSchedule({
      scheduleIds: selectedScheduleIds,
    });
  };

  useEffect(() => {
    // Close the modal when isSuccess is true
    if (isSuccess) {
      toast.success("Doctor Schedule Created Successfully");
      setOpen(false);
    }
  }, [isSuccess, setOpen]);

  if (isError) {
    toast.error("Error occurred while creating doctor schedule.");
  }

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedules">
      <PHForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <PHDatePicker
              name="selectedDate"
              label="Select Date"
              setSelectedDate={setSelectedDate}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PHMultipleSelect
              schedules={schedules}
              selectedScheduleIds={selectedScheduleIds}
              setSelectedScheduleIds={setSelectedScheduleIds}
            />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default DoctorScheduleModal;
