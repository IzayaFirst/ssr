import React from 'react'
class Detail extends React.Component{
  render(){
    return(
      <div>
      <div className="thumbnail blogSinglePost">
        <div className="caption">
          <h1>{this.props.activity_name}</h1>
                       <div className="row">
                       <div className="col-md-3">
                        <p>Price : 500 THB/ Person</p>
                        </div>
                        <div className="col-md-3">
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <button className="btn btn-block buttonCustomPrimary">Book</button>
                        </div>
                       </div>
                      <h2>Province : {this.props.province}</h2>
                      <h2>Location : {this.props.location}</h2>
                      <hr/>
                      <h2>Description</h2>
                      <p>{this.props.activity_desc}</p>
                      <hr/>
                      <h2>Iterinary (Final Implementation)</h2>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>10.00</td>
                            <td><p>Start First Activity</p></td>
                          </tr>
                          <tr>
                            <td>12.00</td>
                            <td><p>Finish Activity</p></td>
                          </tr>
                        </tbody>
                      </table>
                      <hr/>
                      <h2>Gallery (Final Implementation)</h2>
              </div>
          </div>
          <br/>
          <br/>
          <div className="thumbnail blogSinglePost">
            <div className="row">
              <div className="col-md-4 col-xs-8 col-lg-6">
                <div className="caption">
                    <h4>Adam Smith</h4>
                </div>
              </div>
              <div className="col-md-8 col-xs-8 col-lg-6">
                <div className="caption">
                    <h4>Contact</h4>
                    <p><i className="fa fa-home" aria-hidden="true" style={{paddingRight : 15}}></i>SIT KMUTT</p>
                    <p><i className="fa fa-phone" aria-hidden="true" style={{paddingRight : 15}}></i>[+66]97 234 7282</p>
                </div>
              </div>
            </div>
          </div>
          </div>
    )
  }
}
export default Detail
