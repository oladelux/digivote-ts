import { Link } from "@reach/router";
import ListBallots from "../../components/ListBallots";

const DashboardTemplate: React.VFC = () => {
  return (
    <div>
      <div className="flex justify-between my-8 pb-4">
        <div>
          <h2 className="text-2xl">Ballots</h2>
        </div>
        <div>
          <Link to="/create-ballot">
            <button className="bg-brandColor rounded-3xl text-white font-bold py-2 px-6">
              Create Ballot
            </button>
          </Link>
        </div>
      </div>
      <ListBallots />
    </div>
  );
};

export default DashboardTemplate;
