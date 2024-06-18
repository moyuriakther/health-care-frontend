"use client";
import PHForm from "@/components/UI/Form/PHForm";
import PHInput from "@/components/UI/Form/PHInput";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import KeyIcon from "@mui/icons-material/Key";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { authKey } from "@/constants/authkey";
import { deleteCookies } from "@/services/actions/deleteCookies";

export const validationSchema = z.object({
  password: z.string().min(6, "Password must be 6 character"),
});

const ResetPasswordPage = () => {
  const [resetPassword] = useResetPasswordMutation();
  const searchParams = useSearchParams();
  const id = searchParams.get("userId");
  const token = searchParams.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) return;
    localStorage.setItem(authKey, token);
  }, [token]);

  const onSubmit = async (values: FieldValues) => {
    const updatedData = { ...values, id };

    try {
      const res = await resetPassword(updatedData);

      if ("data" in res && res.data.statusCode === 200) {
        toast.success("Password Reset Successful");
        localStorage.removeItem(authKey);
        deleteCookies([authKey, "refreshToken"]);
        router.push("/login");
      } else {
        throw new Error("Something Went Wrong, Try Again");
      }
    } catch (error) {
      toast.success("Something Went Wrong, Try Again");
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

      <PHForm
        onSubmit={onSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={{ password: "" }}
      >
        <Grid container spacing={2} my={1}>
          <Grid item xs={12} sm={12} md={12}>
            <PHInput
              name="password"
              label="New Password"
              type="password"
              fullWidth={true}
            />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ my: 2, width: "100%" }}>
          Reset Password
        </Button>
      </PHForm>
      {/* </Box> */}
    </Box>
  );
};

export default ResetPasswordPage;
