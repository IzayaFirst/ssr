import React,{Component} from 'react'
import Nav from './nav'
import {Link} from 'react-router'
export default class Booking extends Component{
  render(){
    return(
      <div>
        <Nav/>
      <section className="mainContentSection">
      <div className="container booking" >
        <div className="row bookingConfirmed">
            <div className="col-xs-12">
              <div className="alert alert-success alert-dismissible" role="alert">
                Confirm your booking.
              </div>

            </div>
            <div className="col-xs-12">
              <div className="infoTitle">
                <h2>Booking Details</h2>
              </div>
              <div className="confirmDetilas">
                <div className="confirmInfo">
                  <div className="infoTitle">
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <div className="row">
                    <div className="col-sm-4 col-xs-12">
                      <dl className="dl-horizontal">
                        <dt><i className="fa fa-calendar" aria-hidden="true"></i> From:</dt>
                        <dd>25 Mar, 2016</dd>
                        <dt><i className="fa fa-calendar" aria-hidden="true"></i> To:</dt>
                        <dd>28 Mar, 2016</dd>
                        <dt><i className="fa fa-user" aria-hidden="true"></i> Guests:</dt>
                        <dd>2 </dd>
                      </dl>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <dl className="dl-horizontal">
                        <dt><i className="fa fa-map-marker" aria-hidden="true"></i> Address:</dt>
                        <dd>Abdullah Al Masum <br/> Shyamoli, Babor Road, <br/> Mohammadpur, Dhaka.</dd>
                      </dl>
                    </div>
                    <div className="col-sm-4 col-xs-12 priceTotal">
                      <h2>Total: <span>6,500 Baht</span></h2>
                          <button type="button"  className="btn btn-block buttonCustomPrimary">Confirm</button>
                          <button type="button"  className="btn btn-block buttonCustomPrimary">Cancel</button>
                    </div>
                    <div className="col-xs-12">
                      <div className="buttonArea galleryBtnArea">
                        <ul className="list-inline">
                          <li><Link to="/booking1" className="btn buttonTransparent">back</Link></li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    </div>
    )
  }
}
