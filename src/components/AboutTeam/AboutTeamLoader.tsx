import "../../styles/components/AboutTeam/AboutTeam.scss";
import { Skeleton } from "@mui/material";

type Props = { moreButton?: boolean };

const AboutTeamLoader = ({ moreButton = false }: Props) => {
  return (
    <section className="about-us-comp">
      <div className="about-us-comp-container custom-container">
        <div className="teams">
          <Skeleton variant="rounded" width={100} height={100} />
          <Skeleton variant="rounded" width={100} height={100} />
          <Skeleton variant="rounded" width={100} height={100} />
          <Skeleton variant="rounded" width={100} height={100} />
        </div>
        <div className="texts" style={{ width: "100%" }}>
          <Skeleton variant="text" sx={{ fontSize: ".85rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: ".85rem" }} />
        </div>
      </div>
    </section>
  );
};

export default AboutTeamLoader;
