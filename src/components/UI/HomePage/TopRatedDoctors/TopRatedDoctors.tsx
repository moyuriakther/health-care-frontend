import { Box, Button, Container, Grid, Typography } from "@mui/material";
import DoctorCard from "../DoctorCard";

const TopRatedDoctors = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/doctor?page=1&limit=3",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const doctors = await res.json();

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20 ,.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center", my: 3 }}>
        <Typography variant="h4" component="h1" fontWeight={600}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>
      <Container sx={{ textAlign: "center", margin: "30px auto" }}>
        <Grid container spacing={2} mb={4}>
          {doctors?.data?.result?.map((doctor: any) => (
            <Grid item xs={6} md={4} key={doctor.id}>
              <DoctorCard key={doctor.id} doctor={doctor} />
            </Grid>
          ))}
        </Grid>
        <Button variant="outlined">View All Doctors</Button>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
