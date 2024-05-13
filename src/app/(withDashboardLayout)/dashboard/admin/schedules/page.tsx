"use client";
import { Box, Button, IconButton } from "@mui/material";
import ScheduleModal from "./component/ScheduleModal";
import { useEffect, useState } from "react";
import { useGetAllSchedulesQuery } from "@/redux/api/schedulesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import { ISchedule } from "@/types/schedule";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedules, setAllSchedules] = useState<any>([]);
  const { data, isLoading } = useGetAllSchedulesQuery("");
  const schedules = data?.schedules;

  useEffect(() => {
    const updatedSchedules = schedules?.map((schedule: ISchedule) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule.startDateTime),
        endDate: dateFormatter(schedule.endDateTime),
        startTime: dayjs(schedule.startDateTime).format("hh:mm a"),
        endTime: dayjs(schedule.endDateTime).format("hh:mm a"),
      };
    });
    setAllSchedules(updatedSchedules);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "start Date", flex: 1 },
    { field: "endDate", headerName: "end Date", flex: 1 },
    { field: "startTime", headerName: "start Time", flex: 1 },
    { field: "endTime", headerName: "end Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete" size="large">
            <DeleteIcon sx={{ color: "secondary.dark" }} />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Box>
        <Button onClick={() => setIsModalOpen(true)}>CREATE SCHEDULE</Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      </Box>
      <Box sx={{ my: 2 }}>
        <h1>Display Schedule</h1>
      </Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedules ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default SchedulesPage;
