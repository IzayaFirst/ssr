import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
class Register extends React.Component {
  render(){
    return(
      <div className="main-wrapper">
          <Nav />
          <section className="mainContentSection singlePackage">
          <br/><br/>
              <div className="container" style={{width: 720}}>
                    <div className="col-sm-12 col-xs-12">
                    <center>
                        <div className="portlet light">
                          <div className="portlet-title">
                              <center>
                                <div className="caption font-kademy">
                                  <h3>Register</h3>
                                </div>
                              </center>
                            </div>
                            <div className="portlet-body">
                              <div className="row">
                              <br/>
                              <br/>
                                <center>
                                <br/>
                                <br/>
                                <br/>
                                    <div className="col-md-12">
                                    <form className="form-horizontal">
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">username:</label>
                                              <div className="col-sm-10">
                                                <input type="email" className="form-control"  placeholder="Enter username" />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Password:</label>
                                              <div className="col-sm-10">
                                                <input type="password" className="form-control"  placeholder="Enter password"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Confirm Password:</label>
                                              <div className="col-sm-10">
                                                <input type="password" className="form-control"  placeholder="Confirm password"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Email :</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control"  placeholder="Enter Email"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Name :</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control"  placeholder="Enter name"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Surname :</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control"  placeholder="Enter surname"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <div className="col-sm-offset-2 col-sm-2">
                                                <button type="submit" className="btn btn-block buttonCustomPrimary">Submit</button>
                                              </div>
                                            </div>
                                            </form>
                                    </div>
                                </center>
                              </div>
                            </div>
                        </div>
                        </center>
                    </div>
              </div>
            </section>
            <Footer />
      </div>
    )
  }
}
export default Register
