import { useAuth } from "@/contexts/AuthContext";
import { Button } from "../ui/button";

function Logout() {
  const { logout } = useAuth();
  return <Button onClick={logout}>Logout</Button>;
}

export default Logout;
