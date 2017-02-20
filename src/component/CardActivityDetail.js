import React  ,{props}from 'react'
import 'whatwg-fetch';
import Detail from './detail'
class CardActivityDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
         activity : [],
         name : this.props.activity
       };
  }

  componentDidMount(){
    fetch('http://localhost:8000/api/activities/detail/'+this.state.name, { method: 'GET' }).then(
      (res) =>  res.json()
    ).then((res) =>
       {this.setState({
         activity : res
       })
      }
    )

  }
    render(){
      return(
        <div>
        {
          this.state.activity.map((value , index) => {
            return(
              <Detail key={index} province={value.province} location={value.location} activity_name={value.activity_name} activity_desc={value.activity_desc}/>
            )
          })
        }
        </div>
      )
    }
}
export default CardActivityDetail;
