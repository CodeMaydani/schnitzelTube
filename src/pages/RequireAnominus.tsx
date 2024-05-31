import { useAuth } from "@/contexts/AuthContext";
import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAnominusProps extends PropsWithChildren {}

function RequireAnonimus({ children }: RequireAnominusProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    console.log(user.name, "logged");
    return <Navigate to={"/"} state={{ path: location.pathname }} />;
  }

  return children;
}

export default RequireAnonimus;
