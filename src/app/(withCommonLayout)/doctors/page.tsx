import DashedLine from "@/components/UI/Doctor/DashedLine";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import DoctorCategory from "@/components/UI/Doctor/DoctorCategory";
import { Doctor } from "@/types/doctor";
import { Box, Container } from "@mui/material";

interface PropType {
  searchParams: { specialties: string };
}

const DoctorsPage = async ({ searchParams }: PropType) => {
  let res;
  if (searchParams?.specialties) {
    res = await fetch(
      `http://localhost:5000/api/v1/doctor?specialties=${searchParams.specialties}`
    );
  } else {
    res = await fetch("http://localhost:5000/api/v1/doctor");
  }
  const doctors = await res.json();
  // console.log(doctors);
  return (
    <Container>
      <DashedLine />
      <DoctorCategory specialties={searchParams.specialties} />
      <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
        {doctors?.data?.map((doctor: Doctor, index: number) => (
          <Box key={doctor.id}>
            <DoctorCard doctor={doctor} key={doctor.id} />
            {index === doctors?.data?.length - 1 ? null : <DashedLine />}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default DoctorsPage;
