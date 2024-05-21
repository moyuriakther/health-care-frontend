// import PHAutoFileUploader from "@/components/UI/Form/PHAutoFileUploader";
// import { useUpdateMyProfileMutation } from "@/redux/api/myProfileApi";
// import { Typography, Paper, Box, Stack, styled, Button } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
// import Image from "next/image";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import ProfileUpdateModal from "./ProfileUpdateModal";
// import { useState } from "react";
// import EditIcon from "@mui/icons-material/Edit";

// const StyledInformationBox = styled(Box)(({ theme }) => ({
//   background: "#f4f7fe",
//   borderRadius: theme.spacing(1),
//   width: "45%",
//   padding: "8px 16px",
//   "& p": {
//     fontWeight: 600,
//   },
// }));

// const ProfileComponent = ({ profileData }: any) => {
//   // console.log(profileData);
//   // const {
//   //   email,
//   //   role,
//   //   profilePhoto,
//   //   gender,
//   //   designation,
//   //   qualification,
//   //   name,
//   //   contactNumber,
//   //   currentWorkingPlace,
//   //   appointmentFee,
//   //   experience,
//   //   registrationNumber,
//   // } = profileData ?? {};
//   const [updateProfile, { isLoading }] = useUpdateMyProfileMutation();
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const fileUploadHandler = (file: File) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("data", JSON.stringify({}));
//     updateProfile(formData);
//   };
//   return (

//   );
// };

// export default ProfileComponent;
