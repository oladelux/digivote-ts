import HTMLHead from "../HTMLHead"

interface LayoutProps {
   title: string
 }

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <div className="container mx-auto px-4">
         <HTMLHead title={title} />
         <main className="">{children}</main>
      </div>
    </>
  )
}

export default Layout
