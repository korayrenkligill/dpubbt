import React from "react";
import Avatar from "@mui/material/Avatar";
import { getInitials } from "../../utils/userUtils";
import { Badge } from "@mui/material";

interface UserAvatarProps {
  name: string;
  surname: string;
  imageUrl?: string;
  width?: number;
  height?: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  surname,
  imageUrl,
  width,
  height,
}) => {
  return (
    <Badge overlap="circular" badgeContent="4" color="error">
      <Avatar
        sx={{
          bgcolor: "var(--secondary)",
          width: width ?? 40,
          height: height ?? 40,
        }}
        src={imageUrl}
        alt={`${name} ${surname}`}
      >
        {!imageUrl && getInitials(name, surname)}
      </Avatar>
    </Badge>
  );
};

export default UserAvatar;
