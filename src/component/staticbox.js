import React,{Component} from 'react'

export default class StaticBox extends Component{

  constructor(props){
      super(props)
      this.state = {
        user : 51,
        activity : 59,
        destination : 80
      }
      setInterval(()=> {
        this.setState({destination: this.state.destination+1})
      }, 1000);
      setInterval(()=> {
        this.setState({activity : this.state.activity+1})
      }, 1000)
      setInterval(()=>{
        this.setState({user : this.state.user+1})
      }, 5000)

  }



  render(){
    let {user,activity,destination} = this.state
    return(
      <div>
        <section className="countUpSection">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <div className="text-center">
                <div className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="counter">{this.state.destination}</div>
                <h5>Destination</h5>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="text-center">
                <div className="icon">
                  <i className="fa fa-gift" aria-hidden="true"></i>
                </div>
                <div className="counter">{this.state.activity}</div>
                <h5>Activity</h5>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="text-center">
                <div className="icon">
                  <i className="fa fa-smile-o" aria-hidden="true"></i>
                </div>
                <div className="counter">{this.state.user}</div>
                <h5>User</h5>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="text-center">
                <div className="icon">
                  <i className="fa fa-life-ring" aria-hidden="true"></i>
                </div>
                <div className="counter">24</div>
                <h5>Hours support</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
