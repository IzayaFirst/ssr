import React from 'react'

class HeaderActivity extends React.Component{
    render(){
      var pr = this.props.activity.trim();
      var path = pr.replace(/ /g,"_");
      console.log(path)
      var url = '/img/cover/'+path+'.jpg';
      const divStyle = {
          backgroundImage: 'url(' + url + ')',
      };
      return(
        <section className="pageTitle" style={divStyle}>
           <div className="container">
             <div className="row">
               <div className="col-xs-12">
                 <div className="titleTable">
                   <div className="titleTableInner">
                     <div className="pageTitleInfo">
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
     </section>
      )
    }
}
export default HeaderActivity
