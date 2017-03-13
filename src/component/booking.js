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

        <div className="row">
          <div className="col-sm-4 col-sm-push-8 col-xs-12">
            <aside>
              <div className="infoTitle">
                <h2>Booking Details</h2>
              </div>
              <div className="bookDetailsInfo">
                <img src="img/booking/booking.png" alt="image"/>
                <div className="infoArea">
                  <h3>Chiangrai Tour</h3>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>From:  <span>25 Mar, 2016</span></li>
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>To:  <span>28 Mar, 2016</span></li>
                    <li><i className="fa fa-user" aria-hidden="true"></i>Guests:  <span>2 </span></li>
                  </ul>
                  <div className="priceTotal">
                    <h2>Total: <span>6,500 Baht</span></h2>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-sm-8 col-sm-pull-4 col-xs-12">
            <div className="infoTitle">
              <h2>personal info</h2>
            </div>
            <div className="bookingForm">
              <form action="" method="POST" role="form" className="form">
                <div className="row">
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="">First Name</label>
                    <input type="text" className="form-control" id=""/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="">Last Name</label>
                    <input type="text" className="form-control" id=""/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="">Address 1</label>
                    <input type="text" className="form-control" id=""/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="">City</label>
                    <input type="text" className="form-control" id=""/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="">Zip Code</label>
                    <input type="text" className="form-control" id=""/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="">State/Region</label>
                    <input type="text" className="form-control" id=""/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="">Country</label>
                    <input type="text" className="form-control" id=""/>
                  </div>
                  <div className="form-group col-xs-12">
                    <label for="">Requirements</label>
                    <textarea className="form-control"></textarea>
                  </div>
                  <div className="checkbox col-xs-12">

                  </div>
                  <div className="col-xs-12">
                    <div className="buttonArea galleryBtnArea">
                      <ul className="list-inline">
                        <li><a href="#" className="btn buttonTransparent">back</a></li>
                        <li className="pull-right"><Link to="/booking3" className="btn buttonTransparent">next</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
  }
}
