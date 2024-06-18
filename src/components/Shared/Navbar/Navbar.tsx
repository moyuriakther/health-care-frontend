"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";

// const AuthButton = dynamic(
//   () => import("@/components/UI/AuthButton/AuthButton"),
//   { ssr: false }
// );

const Navbar = () => {
  const userInfo = useUserInfo();
  // console.log(userInfo, "useringo");
  const router = useRouter();

  const handleRemoveUser = () => {
    logoutUser(router);
    // router.refresh();
  };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>

          <Typography>Diagnostics</Typography>
          <Typography component={Link} href="/doctors">
            Doctors
          </Typography>

          {userInfo?.email ? (
            <Typography component={Link} href="/dashboard">
              Dashboard
            </Typography>
          ) : null}
        </Stack>
        {userInfo?.email ? (
          <Button color="error" href="/login" onClick={handleRemoveUser}>
            LogOut
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
