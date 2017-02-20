import React from 'react'
import {Link} from 'react-router'
class CardActivityResult extends React.Component{
  render(){

    var pr = this.props.name.trim();
    var path = pr.replace(/ /g,"_");
    console.log(path)
    var url = '/img/cover/'+path+'.jpg';

    return(
      <div className="col-md-4 col-xs-12">
        <div className="thumbnail deals">
            <img src={url} alt="deal-image" />
            <Link to={'/activity/'+this.props.name} className="pageLink"></Link>
            <div className="caption">
              <h4><Link to={'/activity/'+this.props.name} className="captionTitle">{this.props.name}</Link></h4>
              <p>{this.props.desc}</p>
              <div className="detailsInfo">
                <h5>
                  <span>Start From</span>
                  $299
                </h5>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
export default CardActivityResult
