import { Helmet } from "react-helmet";

interface HTMLHeadProps {
   title?: string
 }

const HTMLHead: React.FC<HTMLHeadProps> = ({title}) => {

   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content="Explore new ways to VOTE" />
         <meta name="robots" content="index, follow" />
      </Helmet>
   )
}

export default HTMLHead
