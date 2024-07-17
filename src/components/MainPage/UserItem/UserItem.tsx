import "../../../styles/components/MainPage/UserItem.scss";

type Props = {
  name: string;
  surname: string;
  role: string;
  image?: string;
};

const UserItem = ({ name, surname, role, image }: Props) => {
  return (
    <div className="mainpage-user-item">
      {image ? (
        <img src={image} alt="" />
      ) : (
        <div className="profile">{`${name[0]}${surname[0]}`}</div>
      )}
      <div>
        <b>{`${name} ${surname}`}</b>
        <span>{role}</span>
      </div>
    </div>
  );
};

export default UserItem;
