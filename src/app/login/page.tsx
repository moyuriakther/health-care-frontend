"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/authServices";
import PHForm from "@/components/UI/Form/PHForm";
import PHInput from "@/components/UI/Form/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const LoginValidationSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(6, "Password must be 6 character"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await userLogin(data);
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res.message);
        // router.push("/dashboard");
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
              resolver={zodResolver(LoginValidationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <PHInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Box sx={{ textAlign: "end" }}>
                <Typography component="p" mb={1} fontWeight={300}>
                  Forgot Password?
                </Typography>
              </Box>
              <Button
                fullWidth={true}
                sx={{ margin: "10px 0px" }}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                {`Don't have an account? `}
                <Link href="/register" style={{ color: "blue" }}>
                  Create an account
                </Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
