import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ChooseUsImg from "@/assets/choose-us.png";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyChooseUs = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Box>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h6"
            component="h1"
            fontWeight={600}
            color="primary.main"
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "rgba(245, 245, 245, 1)",
                borderRadius: "10px 10px 100px 10px",
                alignItems: "center",
                gap: "15px",
                padding: "15px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[0]?.imageSrc} alt="award" width={50} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="h6"
                  fontWeight={600}
                  fontSize={18}
                >
                  {servicesData[0]?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {servicesData[0]?.description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "rgba(245, 245, 245, 1)",
                borderRadius: "10px 100px 10px 10px",
                alignItems: "center",
                gap: "15px",
                padding: "15px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[1]?.imageSrc} alt="award" width={50} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="h6"
                  fontWeight={600}
                  fontSize={18}
                >
                  {servicesData[1]?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {servicesData[1]?.description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "rgba(245, 245, 245, 1)",
                borderRadius: "10px 10px 100px 10px",
                alignItems: "center",
                gap: "15px",
                padding: "15px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[2]?.imageSrc} alt="award" width={50} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="h6"
                  fontWeight={600}
                  fontSize={18}
                >
                  {servicesData[2]?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {servicesData[2]?.description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "rgba(245, 245, 245, 1)",
                borderRadius: "10px 100px 10px 10px",
                alignItems: "center",
                gap: "15px",
                padding: "15px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[3]?.imageSrc} alt="award" width={50} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="h6"
                  fontWeight={600}
                  fontSize={18}
                >
                  {servicesData[3]?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {servicesData[3]?.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ display: "flex" }}>
            <Box sx={{ justifyContent: "center", margin: "0 auto" }}>
              <Image
                src={ChooseUsImg.src}
                alt="ChooseUsImg"
                height={500}
                width={380}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
