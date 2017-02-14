import React from 'react'

class PopularActivities extends React.Component{
    render(){
      return(
        <article>
          <figure>
            <img src="img/home/packages/packages-1.jpg" alt=""/>
            <h4>Vestibulum Tour</h4>
            <div className="overlay-background">
              <div className="inner"></div>
            </div>
            <div className="overlay">
              <a className="fancybox-pop" href="single-package-fullwidth.html">
              <div className="overlayInfo">
                <h5>from <span>$399</span></h5>
                <p><i className="fa fa-calendar" aria-hidden="true"></i>27 Jan, 2017</p>
              </div>
              </a>
            </div>
          </figure>
        </article>
      )
    }
}
export default PopularActivities
