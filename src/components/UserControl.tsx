import { useAtomValue } from "jotai";
import { ReactNode } from "react";
import { userAtom } from "..";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const UserControl = ({ children }: Props) => {
  const userRole = useAtomValue(userAtom);
  const navigation = useNavigate();
  if (!userRole) navigation("/login");
  return <>{children}</>;
};

export default UserControl;
