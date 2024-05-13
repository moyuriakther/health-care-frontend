import { Box, Container, Grid, Typography } from "@mui/material";
import HowItWorksImg from "@/assets/how-it-works-img.png";
import Image from "next/image";
import SearchImg from "@/assets/icons/search-icon.png";
import ProfileImg from "@/assets/icons/doctor-icon.png";
import AppointmentImg from "@/assets/icons/appointment-icon.png";
import SolutionImg from "@/assets/icons/charity-icon.png";

const HowItWorks = () => {
  return (
    <Container>
      <Box>
        <Box>
          <Typography
            variant="h6"
            component="h6"
            fontWeight={300}
            color="primary.main"
          >
            How it Works
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={600} my={1}>
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography component="p">
            Access To expert physicians and surgeons, advanced technologies
          </Typography>
          <Typography component="p">
            and top-quality surgery facilities right here
          </Typography>
        </Box>
        <Grid container spacing={2} mb={4}>
          <Grid item md={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <Image
                src={HowItWorksImg}
                alt="how it works"
                height={500}
                width={500}
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid lightGray",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Image src={SearchImg} alt="search" width={40} />
                  <Typography
                    component="h6"
                    variant="h6"
                    fontWeight={500}
                    my={2}
                  >
                    Search Doctor
                  </Typography>
                  <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus, vitae.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid lightGray",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Image src={ProfileImg} alt="Profile" width={40} />
                  <Typography
                    component="h6"
                    variant="h6"
                    fontWeight={500}
                    my={2}
                  >
                    Check Doctor Profile
                  </Typography>
                  <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus, vitae.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid lightGray",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Image src={AppointmentImg} alt="search" width={40} />
                  <Typography
                    component="h6"
                    variant="h6"
                    fontWeight={500}
                    my={2}
                  >
                    Schedule Appointment
                  </Typography>
                  <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus, vitae.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid lightGray",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <Image src={SolutionImg} alt="search" width={40} />
                  <Typography
                    component="h6"
                    variant="h6"
                    fontWeight={500}
                    my={2}
                  >
                    Get Your Solution
                  </Typography>
                  <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus, vitae.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HowItWorks;
