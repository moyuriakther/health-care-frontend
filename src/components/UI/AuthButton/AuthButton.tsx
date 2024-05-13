import { isLoggedIn, removeUser } from "@/services/authServices";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const isLoggedInUser = isLoggedIn();

  const router = useRouter();

  const handleRemoveUser = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {" "}
      {isLoggedInUser ? (
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
