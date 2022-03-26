import { Routes } from "../../types/Routes"
import Layout from "../../components/Layout";
import LandingPageTemplate from "../../templates/LandingPageTemplate";
import { getPageMetadata } from "../../utils/metadata";
import { Pages } from "../../types/PageType";

interface Props {
   path: Routes
}

const LandingPage: React.VFC<Props> = ({path}) => {
   const { title } = getPageMetadata(Pages.LANDING_PAGE)

   return (
      <Layout title = {title}>
         <LandingPageTemplate />
      </Layout>
   )
}

export default LandingPage
