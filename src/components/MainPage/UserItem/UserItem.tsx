import "../../../styles/components/MainPage/UserItem.scss";

type Props = {};

const UserItem = (props: Props) => {
  return (
    <div className="mainpage-user-item">
      <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="" />
      <div>
        <b>Name Surname</b>
        <span>authority</span>
      </div>
    </div>
  );
};

export default UserItem;
