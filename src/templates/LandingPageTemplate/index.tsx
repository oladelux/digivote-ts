import { Link } from "@reach/router";

const LandingPageTemplate: React.VFC = () => {

   return (
      <div className="flex flex-col-reverse md:flex-row justify-between landingCSS px-6 lg:px-0">
         <div className="flex-grow-0 w-45 self-center">
            <h2 className="text-xl md:text-4xl lg:text-7xl leading-tight font-medium">
               Explore <span className="text-brandColor">New Ways</span> to <span className="text-brandColor">VOTE</span>
            </h2>
            <p className="py-3 text-subtext">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed porta turpis. Sed rhoncus massa feugiat ultricies ultrices. Suspendisse egestas augue quis felis varius.
            </p>
            <div className="flex space-x-5 py-4">
               <div>
                  <Link to="/dashboard"><button className="rounded-full py-3 px-6 focus:outline-none bg-black text-white font-medium">Try Now</button></Link>
               </div>
            </div>
         </div>
         <div className="flex-grow-0 w-45 bg-contain h-100 md:bg-center self-center bg-landingPage bg-no-repeat h-full"></div>
      </div>
   )
}

export default LandingPageTemplate
