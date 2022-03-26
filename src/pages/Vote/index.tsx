import { Routes } from "../../types/Routes"
import Layout from "../../components/Layout";
import VoteTemplate from "../../templates/VoteTemplate";
import { getPageMetadata } from "../../utils/metadata";
import { Pages } from "../../types/PageType";

interface Props {
   path: Routes
}

const Vote: React.VFC<Props> = ({path}) => {

   const { title } = getPageMetadata(Pages.VOTE)

   return (
      <Layout title = {title}>
         <VoteTemplate />
      </Layout>
   )
}

export default Vote
