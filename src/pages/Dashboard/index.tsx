import { Routes } from "../../types/Routes"
import Layout from "../../components/Layout";
import DashboardTemplate from "../../templates/DashboardTemplate";
import { getPageMetadata } from "../../utils/metadata";
import { Pages } from "../../types/PageType";

interface Props {
   path: Routes
}

const Dashboard: React.VFC<Props> = ({path}) => {

   const { title } = getPageMetadata(Pages.DASHBOARD)

   return (
      <Layout title = {title}>
         <DashboardTemplate />
      </Layout>
   )
}

export default Dashboard
