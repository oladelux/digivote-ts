import HTMLHead from "../HTMLHead"
import classnames from "classnames"
import Header from "../Header"

interface LayoutProps {
   title: string
   className?: string
 }

const Layout: React.FC<LayoutProps> = ({ children, title, className='' }) => {
  return (
    <>
      <div className={classnames(className)}>
         <Header />
         <div className="container mx-auto px-4">
            <HTMLHead title={title} />
            <main className="">{children}</main>
         </div>
      </div>
    </>
  )
}

export default Layout
