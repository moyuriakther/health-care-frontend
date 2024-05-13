"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const AuthButton = dynamic(
  () => import("@/components/UI/AuthButton/AuthButton"),
  { ssr: false }
);

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container>
      <Stack
        py={2}
        direction={isMobile ? "column" : "row"} // Change direction based on screen size
        justifyContent="space-between"
        alignItems={isMobile ? "center" : "flex-start"} // Align items based on screen size
      >
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        {isMobile ? (
          // Render mobile menu toggle
          <Button component={Link} href="/login">
            Login
          </Button>
        ) : (
          // Render navigation links for larger screens
          <Stack direction="row" gap={4} justifyContent="space-between">
            <Typography component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography>Health Plans</Typography>
            <Typography>Medicine</Typography>
            <Typography>Diagnostic</Typography>
            <Typography>NGOs</Typography>
            <AuthButton />
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
