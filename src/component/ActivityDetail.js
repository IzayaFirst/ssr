import React , {props} from 'react'
import Nav from './Nav'
import CardActivityDetail from './CardActivityDetail'
import HeaderActivity from './HeaderActivity'
import Footer from './Footer'
class ActivityDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
         name : this.props.params.activity_name
       };
  }
  render(){
      return(
        <div className="main-wrapper">
          <Nav />
          <HeaderActivity activity={this.state.name}/>
          <section className="mainContentSection singlePackage">
              <div className="container" style={{width: 720}}>
                <div className="row">
                      <div className="col-md-12 col-xs-12 col-lg-12">
                      <CardActivityDetail activity={this.state.name}/>
                      </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-xs-12 col-lg-12">
                    <div className="relatedProduct">
                      <h2>you may also like</h2>
                      <div className="row">
                        <div className="col-xs-12">
                          <h1>Coming Soon</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
        </div>
      )
  }
}
export default ActivityDetail
