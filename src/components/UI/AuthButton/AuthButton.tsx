import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { isLoggedIn } from "@/services/authServices";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = useUserInfo();
  const isLoggedInUser = isLoggedIn();

  const router = useRouter();

  const handleRemoveUser = () => {
    console.log("remove user");
    logoutUser(router);
    router.refresh();
  };
  return (
    <>
      {" "}
      {userInfo?.email ? (
        <Button color="error" href="/login" onClick={handleRemoveUser}>
          LogOut
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
