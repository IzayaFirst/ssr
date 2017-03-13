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
                  <div className="infoTitle">
                    <h2>billing address</h2>
                  </div>
                  <div className="bookingForm">
                    <form action="" method="POST" role="form" className="form">
                      <div className="row">
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="">First Name</label>
                          <input type="text" className="form-control" id="" />
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="">Last Name</label>
                          <input type="text" className="form-control" id="" />
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="">Address 1</label>
                          <input type="text" className="form-control" id=""/>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="">Address 2</label>
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
                          <div className="bookingDrop">
                            <select name="guiest_id3" id="guiest_id3" className="select-drop">
                              <option value="0">Select Country</option>
                              <option value="1">USA</option>
                              <option value="2">UK</option>
                              <option value="3">Canada</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="infoTitle">
                            <h2>card info</h2>
                          </div>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="">Card Name</label>
                          <input type="text" className="form-control" id=""/>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="">Card Number</label>
                          <input type="text" className="form-control" id=""/>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="">CVV</label>
                          <input type="text" className="form-control" id=""/>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="" className="blankLabel"></label>
                          <ul className="list-inline">
                            <li><a href="#"><img src="img/booking/master-card.png" alt="image"/></a></li>
                            <li><a href="#"><img src="img/booking/discover.png" alt="image"/></a></li>
                            <li><a href="#"><img src="img/booking/visa.png" alt="image"/></a></li>
                            <li><a href="#"><img src="img/booking/paypal.png" alt="image"/></a></li>
                          </ul>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for="" className="blankLabel">Expiration Date</label>
                          <div className="bookingDrop">
                            <select name="guiest_id3" id="guiest_id3" className="select-drop">
                              <option value="0">Month</option>
                              <option value="1">July</option>
                              <option value="2">August</option>
                              <option value="3">September</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label for=""></label>
                          <div className="bookingDrop">
                            <select name="guiest_id3" id="guiest_id3" className="select-drop">
                              <option value="0">Year</option>
                              <option value="1">2016</option>
                              <option value="2">2017</option>
                              <option value="3">2018</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="buttonArea galleryBtnArea">
                            <ul className="list-inline">
                              <li><Link to="/booking" className="btn buttonTransparent">back</Link></li>
                              <li className="pull-right"><Link to="/booking3" className="btn buttonTransparent">next</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

      </div>
    </section>
    </div>
    )
  }
}
