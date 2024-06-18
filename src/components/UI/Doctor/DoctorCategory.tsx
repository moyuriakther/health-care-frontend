"use client";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DoctorCategory = ({ specialties }: { specialties: string }) => {
  const { data: doctorCategories } = useGetAllSpecialtiesQuery(undefined);

  const router = useRouter();
  const [value, setValue] = useState(specialties || "");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    router.push(`/doctors?specialties=${newValue}`);
  };
  return (
    <Box sx={{ maxWidth: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {doctorCategories?.map((category: any) => (
          <Tab
            label={category.title}
            key={category.id}
            value={category.title}
            sx={{ fontWeight: 600 }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default DoctorCategory;
