import React from 'react'
import PopularActivities from './PopularActivities'
class PackageHome extends React.Component{
  render(){
    return(
<section className="whiteSection">
 <div className="container">
   <div className="row">
     <div className="col-xs-12">
       <div className="sectionTitle">
         <h2><span>Popular Activity</span></h2>
         <p>These are our favourite & most Activities that you shouldn’t miss while in Thailand!</p>
       </div>
     </div>
   </div>
   <div className="row isotopeContainer">
       <div className="col-sm-4 isotopeSelector">
        <PopularActivities />
       </div>
   </div>
 </div>
</section>

    )
  }
}
export default PackageHome
