import React from 'react'

class Footer extends React.Component{

  render(){
    return(
      <footer>
     <div className="footer clearfix">
       <div className="container">
         <div className="row">
           <div className="col-sm-6 col-xs-12">
             <div className="footerContent">
               <a href="index.html" className="footer-logo"><img src="img/logo-color-sm.png" alt="footer-logo"/></a>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
             </div>
           </div>
           <div className="col-sm-6 col-xs-12">
             <div className="footerContent">
               <h5>Contact Us</h5>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.</p>
               <ul className="list-unstyled">
                 <li><i className="fa fa-home" aria-hidden="true"></i>61 Park Street, Fifth Avenue, NY</li>
                 <li><i className="fa fa-phone" aria-hidden="true"></i>[88] 657 524 332</li>
                 <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailTo:info@star-travel.com">info@star-travel.com</a></li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="copyRight clearfix">
           <div className="container">
             <div className="row">
               <div className="col-sm-6 col-sm-push-6 col-xs-12">
                 <ul className="list-inline">
                   <li><a href="#">Privacy Policy</a></li>
                   <li><a href="#">About Us</a></li>
                   <li><a href="#">Support</a></li>
                   <li><a href="#">Blog</a></li>
                 </ul>
               </div>
               <div className="col-sm-6 col-sm-pull-6 col-xs-12">
                 <div className="copyRightText">
                   <p>Copyright © 2016. All Rights Reserved by <a target="_blank" href="http://www.iamabdus.com/">Abdus</a>.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
   </footer>
    )
  }
}

export default Footer
