"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SpecialtyModal from "./component/SpecialtyModal";
import { useState } from "react";
import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty, { isError, error, isSuccess }] =
    useDeleteSpecialtyMutation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} alt="icon" width={30} height={30} />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => deleteSpecialty(row.id)}
          >
            <DeleteIcon sx={{ color: "secondary.dark" }} />
          </IconButton>
        );
      },
    },
  ];

  if (isError) {
    toast.error("error having..");
  }
  if (isSuccess) {
    toast.success(" Specialty Deleted Successfully");
  }
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>
          Create An Specialty
        </Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialty" />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
