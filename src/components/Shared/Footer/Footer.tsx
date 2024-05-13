import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import linkedin from "@/assets/landing_page/linkedin.png";
import twitter from "@/assets/landing_page/twitter.png";

const FooterPage = () => {
  return (
    <Box bgcolor="rgb(17 26 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#ffffff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#ffffff">Health Plans</Typography>
          <Typography color="#ffffff">Medicine</Typography>
          <Typography color="#ffffff">Diagnostic</Typography>
          <Typography color="#ffffff">NGOs</Typography>
        </Stack>
        <Stack
          direction="row"
          gap={3}
          justifyContent="center"
          alignItems="center"
          py={2}
        >
          <Image src={facebook} alt="facebook" height={30} width={30} />
          <Image src={instagram} alt="instagram" height={30} width={30} />
          <Image src={linkedin} alt="linkedin" height={30} width={30} />
          <Image src={twitter} alt="twitter" height={30} width={30} />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box sx={{ border: "1px dashed lightGray" }}></Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography color="#ffffff">
            &copy; 2024 PH HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h5"
            component={Link}
            href="/"
            fontWeight={600}
            color="#ffffff"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>

          <Typography color="#ffffff">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterPage;
