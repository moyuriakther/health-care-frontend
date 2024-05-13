"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { patientRegister } from "@/services/actions/patientRegister";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/authServices";
import PHForm from "@/components/UI/Form/PHForm";
import PHInput from "@/components/UI/Form/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const RegisterValidationSchema = z.object({
  password: z
    .string({ required_error: "Password Should be 6 Character" })
    .min(6),
  patient: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    email: z.string({ required_error: "Email is required" }),

    contact: z
      .string({ required_error: "Contact Number should be 11 digit" })
      .regex(/^\d{11}$/),
    address: z.string({ required_error: "Address is required" }),
  }),
});

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const data = modifyPayload(values);

    try {
      const res = await patientRegister(data);

      if (res.success) {
        toast.success(res.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          toast.success(result.message);
          router.push("/dashboard");
        }
      } else {
        setError(res?.message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center " }}>
            <Box>
              <Image src={Logo} alt="logo" width={50} />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm
              onSubmit={onSubmit}
              resolver={zodResolver(RegisterValidationSchema)}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput
                    name={"patient.name"}
                    label="Name"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name={"patient.email"}
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name={"password"}
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name={"patient.contact"}
                    label="Contact Number"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name={"patient.address"}
                    label="Address"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              {error && (
                <Box>
                  <Typography
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "1px",
                      borderRadius: "2px",
                      margin: "5px 0px",
                    }}
                  >
                    {error}
                  </Typography>
                </Box>
              )}
              <Button
                fullWidth={true}
                sx={{ margin: "10px 0px" }}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you Already have an account?{" "}
                <Link href="/login" style={{ color: "blue" }}>
                  Login
                </Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
