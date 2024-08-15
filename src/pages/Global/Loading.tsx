import { SyncLoader } from "react-spinners";
import "../../styles/pages/Global/Loading.scss";
type Props = {};

const LoadingComponent = (props: Props) => {
  return (
    <div className="loading">
      <SyncLoader color="#024ec7" size={8} />
      <p>
        Sayfamız geliştirme aşamasında olduğu için ilk girişiniz biraz zaman
        alabilir. Sabrınız için teşekkür ederiz.
      </p>
    </div>
  );
};

export default LoadingComponent;
