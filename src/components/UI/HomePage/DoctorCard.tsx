// import {
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Typography,
// } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Image from "next/image";

// const DoctorCard = ({ doctor }: { doctor: any }) => {
//   return (
//     <Card>
//       <Box
//         sx={{
//           width: "100%",
//           height: 300,
//           "& img": {
//             width: "100%",
//             height: "100%",
//             overflow: "hidden",
//             objectFit: "cover",
//           },
//         }}
//       >
//         <Image
//           alt={doctor?.name}
//           height={500}
//           width={300}
//           src={doctor?.profilePhoto}
//         />
//       </Box>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {doctor?.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {doctor?.qualification} - {doctor?.designation}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" mt={1}>
//           <LocationOnIcon /> {doctor?.currentWorkingPlace} -{" "}
//           {doctor?.designation}
//         </Typography>
//       </CardContent>
//       <CardActions
//         sx={{ justifyContent: "space-between", px: 2, paddingBottom: "20px" }}
//       >
//         <Button size="small">Book Now</Button>
//         <Button size="small" variant="outlined">
//           View Profile
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default DoctorCard;
