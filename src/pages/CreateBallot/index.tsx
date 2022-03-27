import { Routes } from "../../types/Routes"
import { getPageMetadata } from "../../utils/metadata";
import { Pages } from "../../types/PageType";
import Layout from "../../components/Layout";
import CreateBallotTemplate from "../../templates/CreateBallotTemplate";

interface Props {
   path: Routes
}

const CreateBallot: React.VFC<Props> = ({path}) => {

   const { title } = getPageMetadata(Pages.CREATE_BALLOT)
   
   return (
      <Layout title= { title }>
         <CreateBallotTemplate />
      </Layout>
   )
}

export default CreateBallot
