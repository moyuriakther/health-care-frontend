import { USER_ROLE } from "@/constants/userRole";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TResponseSuccess = {
  data: any;
  meta?: TMeta;
};

export type TResponseError = {
  statusCode: number;
  message: string;
  errorMessages: TErrorMessage[];
};
export type TErrorMessage = {
  path: string | number;
  message: string;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}
export const Gender = ["male", "female"];

export type TAuthUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};
