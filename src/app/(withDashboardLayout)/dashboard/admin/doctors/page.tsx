"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./component/DoctorModal";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { toast } from "sonner";
import { useDebounced } from "@/redux/hooks";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTime = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTime) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor, { isError, isSuccess }] = useDeleteDoctorMutation();

  const doctors = data?.doctors;
  const meta = data?.meta;

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "appointmentFee", headerName: "Appointment Fee", flex: 1 },
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
              onClick={() => deleteDoctor(row?.id)}
            >
              <DeleteIcon sx={{ color: "secondary.dark" }} />
            </IconButton>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton aria-label="delete" size="large">
                <EditIcon sx={{ color: "primary.main" }} />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  if (isError) {
    toast.error("error having..");
  }
  if (isSuccess) {
    toast.success(" Doctor is Deleted Successfully");
  }

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          size="small"
          placeholder="Search For Doctor"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default DoctorsPage;
