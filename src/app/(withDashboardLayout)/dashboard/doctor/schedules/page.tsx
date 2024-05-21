"use client";
import { Box, Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import DoctorScheduleModal from "./component/DoctorScheduleModal";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useDeleteDoctorScheduleMutation,
  useGetAllDoctorSchedulesQuery,
} from "@/redux/api/doctorScheduleApi";
import dayjs from "dayjs";
import { dateFormatter } from "@/utils/dateFormatter";

const DoctorSchedulePage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const query: Record<string, any> = {};
  query["page"] = page;
  query["limit"] = limit;
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });
  const [deleteDoctorSchedule] = useDeleteDoctorScheduleMutation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const doctorSchedules: any = data?.doctorSchedules;

  const [allSchedule, setAllSchedule] = useState<any>([]);

  const meta = data?.meta;
  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta.total / meta.limit);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const updateData = doctorSchedules?.map((schedule: any, i: number) => {
      return {
        id: schedule?.scheduleId,
        scheduleId: schedule?.scheduleId,
        startDate: dateFormatter(schedule?.schedule?.startDateTime),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
        isBooked: schedule?.isBooked,
      };
    });

    setAllSchedule(updateData);
  }, [doctorSchedules]);

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    { field: "isBooked", headerName: "Is Booked", flex: 1 },
    { field: "scheduleId", headerName: "Schedule Id", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => deleteDoctorSchedule(row?.id)}
            >
              <DeleteIcon sx={{ color: "secondary.dark" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box>
        <Button onClick={() => setIsModalOpen(true)}>CREATE SCHEDULE</Button>
        <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      </Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={allSchedule ?? []}
            columns={columns}
            hideFooterPagination
            slots={{
              footer: () => {
                return (
                  <Box my={2}>
                    <Pagination
                      color="primary"
                      count={pageCount}
                      page={page}
                      onChange={handleChange}
                    />
                  </Box>
                );
              },
            }}
          />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default DoctorSchedulePage;
