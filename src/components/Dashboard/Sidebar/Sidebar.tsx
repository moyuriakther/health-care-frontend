import { List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/authServices";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);
  return (
    <div>
      <Stack
        component={Link}
        href="/"
        direction="row"
        gap={1}
        sx={{ justifyContent: "center", alignItems: "center", py: 1 }}
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component="h1">
          PH-Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole)?.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
