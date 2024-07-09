import { ReactNode } from "react";

export interface UserType {
  role: "user" | "admin";
}

export interface PageActionType {
  icon: ReactNode;
  name: string;
  action: () => void;
}
