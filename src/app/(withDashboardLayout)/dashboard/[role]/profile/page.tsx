"use client";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/myProfileApi";
import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
// import ProfileComponent from "./component/ProfileComponent";
import Image from "next/image";
import PHAutoFileUploader from "@/components/UI/Form/PHAutoFileUploader";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import ProfileUpdateModal from "./component/ProfileUpdateModal";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const ProfilePage = () => {
  const { data, isLoading, isSuccess } = useGetMyProfileQuery(undefined);
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [updateProfile, { isLoading: updateLoading }] =
    useUpdateMyProfileMutation();
  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    updateProfile(formData);
  };
  if (isLoading) {
    return <p>Loading..</p>;
  }
  return (
    data?.id && (
      <Box>
        isSuccess &&{" "}
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                height: { xs: 200, sm: 200, xl: 300 },
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Image
                src={data.profilePhoto}
                layout="responsive"
                alt="profile"
                width={400}
                height={300}
              />
            </Box>
            <Box mt={2} mb={1}>
              {isLoading ? (
                <>Loading..</>
              ) : (
                <PHAutoFileUploader
                  name="file"
                  label="Change Profile Image"
                  icon={<CloudUploadIcon />}
                  onFileUpload={fileUploadHandler}
                  variant="text"
                />
              )}
            </Box>
            <Button
              sx={{ my: 1 }}
              fullWidth={true}
              endIcon={<EditIcon />}
              onClick={() => setIsModalOpen(true)}
            >
              Update Profile Information
            </Button>
            <ProfileUpdateModal
              // updateProfile={updateProfile}
              open={isModalOpen}
              setOpen={setIsModalOpen}
            />
          </Grid>
          <Grid xs={12} md={8}>
            <Typography variant="h5" component="h3" color="primary.main">
              Personal Information
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={2}
              flexWrap={"wrap"}
            >
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Name
                </Typography>
                <Typography>{data?.name}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Email
                </Typography>
                <Typography>{data?.email}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Gender
                </Typography>
                <Typography>{data?.gender}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Role
                </Typography>
                <Typography>{data?.role}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Contact Number
                </Typography>
                <Typography>{data?.contactNumber}</Typography>
              </StyledInformationBox>
            </Stack>
            <Typography variant="h5" component="h3" color="primary.main" my={2}>
              Professional Information
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              flexWrap={"wrap"}
              gap={2}
            >
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Qualification
                </Typography>
                <Typography>{data?.qualification}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Current Working Place
                </Typography>
                <Typography>{data?.currentWorkingPlace}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Appointment Fee
                </Typography>
                <Typography>{data?.appointmentFee}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Experience
                </Typography>
                <Typography>{data?.experience}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Registration Number
                </Typography>
                <Typography>{data?.registrationNumber}</Typography>
              </StyledInformationBox>
              <StyledInformationBox>
                <Typography color="secondary" variant="caption">
                  Designation
                </Typography>
                <Typography>{data?.designation}</Typography>
              </StyledInformationBox>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default ProfilePage;
