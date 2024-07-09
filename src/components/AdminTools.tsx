/* eslint-disable react-hooks/exhaustive-deps */
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useAtomValue } from "jotai";
import { userAtom } from "..";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useCallback, useEffect, useState } from "react";
import { PageActionType } from "../types/User";
import CelebrationIcon from "@mui/icons-material/Celebration";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  pageName: string;
};

const AdminTools = ({ pageName }: Props) => {
  const user = useAtomValue(userAtom);
  const [actions, setActions] = useState<PageActionType[]>([]);

  const getActions = useCallback(() => {
    switch (pageName) {
      case "main":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
        ]);
        return;
      case "about-us":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
        ]);
        return;
      case "events":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <CelebrationIcon />,
            name: "Add Event",
            action: () => console.log("Add event page"),
          },
        ]);
        return;
      case "academy":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
          {
            icon: <SchoolIcon />,
            name: "Add Lesson",
            action: () => console.log("Add lesson page"),
          },
        ]);
        return;
      case "blog":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
          {
            icon: <EmailIcon />,
            name: "Blog List",
            action: () => console.log("Blog list page"),
          },
        ]);
        return;
      case "blog-detail":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
          {
            icon: <CreateIcon />,
            name: "Edit This Blog",
            action: () => console.log("Blog edit page"),
          },
          {
            icon: <DeleteIcon />,
            name: "Remove This Blog",
            action: () => console.log("Remove this blog"),
          },
        ]);
        return;
      case "contact":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
          {
            icon: <InboxIcon />,
            name: "Messages",
            action: () => console.log("Messages page"),
          },
        ]);
        return;
      case "login":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
        ]);
        return;
      case "register":
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
          {
            icon: <TextFieldsIcon />,
            name: "Translations",
            action: () => console.log("Translation page"),
          },
          {
            icon: <ViewInArIcon />,
            name: "Edit Page",
            action: () => console.log("Edit page"),
          },
        ]);
        return;
      default:
        setActions([
          {
            icon: <AdminPanelSettingsIcon />,
            name: "Admin Panel",
            action: () => console.log("Admin page"),
          },
        ]);
        return;
    }
  }, [pageName]);

  useEffect(() => {
    getActions();
  }, []);
  if (user?.role === "admin")
    return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action: any) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>
    );
  else return <></>;
};

export default AdminTools;
