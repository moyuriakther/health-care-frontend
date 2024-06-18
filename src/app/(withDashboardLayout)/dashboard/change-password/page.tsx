"use client";
import PHForm from "@/components/UI/Form/PHForm";
import PHInput from "@/components/UI/Form/PHInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import KeyIcon from "@mui/icons-material/Key";

export const ChangePasswordValidationSchema = z.object({
  oldPassword: z.string().min(6, "Password must be 6 character"),
  newPassword: z.string().min(6, "Password must be 6 character"),
});

const ChangePassword = () => {
  const [changePassword, { isError, isLoading }] = useChangePasswordMutation();
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await changePassword(data).unwrap();
      console.log({ res });
      if (res) {
        toast.success(res?.message);
        // router.push("/login");
      } else {
        setError(res?.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: "600px",
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: {
          sx: 2,
          md: 5,
        },
      }}
    >
      <Stack sx={{ justifyContent: "center", alignItems: "center " }}>
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
            Login PH-HealthCare
          </Typography>
        </Box>
      </Stack>
      {error && (
        <Box>
          <Typography
            sx={{
              backgroundColor: "red",
              padding: "1px",
              borderRadius: "2px",
              color: "white",
              marginTop: "5px",
            }}
          >
            {error}
          </Typography>
        </Box>
      )}
      <Box>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(ChangePasswordValidationSchema)}
          defaultValues={{ oldPassword: "", newPassword: "" }}
        >
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={12} md={6}>
              <PHInput
                name="oldPassword"
                label="Old Password"
                type="password"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <PHInput
                name="newPassword"
                label="New Password"
                type="password"
                fullWidth={true}
              />
            </Grid>
          </Grid>

          <Button fullWidth={true} sx={{ margin: "10px 0px" }} type="submit">
            Submit
          </Button>
        </PHForm>
      </Box>
    </Box>
  );
};

export default ChangePassword;
