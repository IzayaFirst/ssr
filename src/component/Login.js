import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
class Login extends React.Component {
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
                                  <h3>LOGIN</h3>
                                </div>
                              </center>
                            </div>
                            <div className="portlet-body">
                              <div className="row">
                                <center>
                                <p>Login with Social</p>
                                <br/>
                                    <div className="col-md-12">
                                    <button className="btn btn-facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i><span style={{marginLeft: 7}}>Log In with Facebook</span></button>
                                    </div>
                                </center>
                              </div>
                              <div className="row">
                              <br/>
                              <br/>
                                <center>
                                <p>Login with existing account</p>
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
                                              <div className="col-sm-offset-2 col-sm-3">
                                                <div className="checkbox">
                                                  <input type="checkbox" /> Remember me
                                                </div>
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
export default Login
