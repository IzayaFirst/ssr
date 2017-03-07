import React from 'react'
import {host} from './host'
import 'whatwg-fetch';
import Nav from './Nav'
import Footer from './Footer'
import DropzoneComponent from 'react-dropzone-component';
import firebase from 'firebase'
import {Link} from 'react-router'
class CreateActivity extends React.Component {

              constructor(props){
                super(props);
                this.state = {
                  step: "",
                  name : "",
                  desc : "",
                  cover : null ,
                  province : "Bangkok",
                  location : "",
                  type : "",
                  price : [],
                  routine : [],
                  cover_url : "" ,
                  type_file : ""
                }
                this.create = this.create.bind(this);
                this.setCity = this.setCity.bind(this);
                this.setLocation = this.setLocation.bind(this);
                this.setName = this.setName.bind(this);
                this.setDesc = this.setDesc.bind(this);
              }
              componentWillMount(){
                this.setState({
                  step : this.props.params.step
                })
                console.log(this.state.step)
              }

              create(e){
                  e.preventDefault();
                  var config = {
                      apiKey: "AIzaSyDu0FY6mCxbAek2ZWq-z8WcQvnR0IZJO4Q",
                      authDomain: "miletrav-4f855.firebaseapp.com",
                      databaseURL: "https://miletrav-4f855.firebaseio.com",
                      storageBucket: "miletrav-4f855.appspot.com",
                      messagingSenderId: "469316737513"
                    };
                  firebase.initializeApp(config);
                  var img = this.state.name+"_activity_cover."+this.state.type_file
                  firebase.storage().ref('activity_cover/'+img).put(this.state.cover).then((snapshot) => {
                    return firebase.storage().ref('activity_cover'+'/'+img).getDownloadURL()
                  }).then((url) => {
                    this.setState({
                      cover_url : url
                    })
                  })
                  /*var urls = 'activity_cover/'+img;
                  console.log(urls)
                  firebase.storage().ref('activity_cover'+'/'+'wu_activity_cover.png'+'').getDownloadURL().then((url) => {
                    console.log('non object' + url)
                  }).catch((err) => {
                    console.log(err);
                  } )
*/
              }
              componentWillReceiveProps(nextProps) {
                this.setState(
                  ( (prevState, props) => {
                      return {
                        step: nextProps.params.step,
                        name : prevState.name,
                        desc : prevState.desc,
                        cover : prevState.cover ,
                        province : prevState.province,
                        location : prevState.location,
                        type : prevState.type,
                        price : prevState.price,
                        routine : prevState.routine,
                        cover_url : prevState.cover_url ,
                        type_file : prevState.type_file
                      };
                  })
                )
                console.log(this.state)
              }


              setCity(e){
                e.preventDefault();
                this.setState({
                  province : e.target.value
                })
              }
              setLocation(e){
                e.preventDefault();
                this.setState({
                  location : e.target.value
                })
              }

              setName(e){
                e.preventDefault();
                this.setState({
                  name : e.target.value
                })
              }
              setDesc(e){
                e.preventDefault()
                this.setState({
                  desc : e.target.value
                })
              }

  render(){
    var componentConfig = {
    iconFiletypes: ['.jpg', '.png'],
    showFiletypeIcon: true,
    postUrl: 'no-url'
  };
  var djsConfig = { autoProcessQueue: false }
  var eventHandlers = {
    addedfile: (file) => {
        var  type = file.name.split('.');
        console.log(type[1])
        this.setState({
          cover : file,
          type_file : type[1]
        })

    }
  }

  const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]

    return(
      <div className="main-wrapper">
          <Nav />
          <section className="mainContentSection singlePackage">
          <br/><br/>
              <div className="container" style={{width: 1024}}>
              <ul className="nav nav-pills">
                <li className={this.state.step == 1 ? 'active': '' }><Link to={'/CreateActivity/'+1}>Step 1</Link></li>
                <li className={this.state.step == 2 ? 'active': '' }><Link to={'/CreateActivity/'+2}>Step 2</Link></li>
                <li className={this.state.step == 3 ? 'active': '' }><Link to={'/CreateActivity/'+3}>Step 3</Link></li>
              </ul>
                    <div className="col-sm-12 col-xs-12">
                    <center>
                        <div className="portlet light">
                          <div className="portlet-title">
                              <center>
                                <div className="caption font-kademy">
                                  <h3>Create Your Activity</h3>
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
                                    { this.state.step == 1 &&
                                    <form className="form-horizontal">

                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Activity name:</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control" onChange={this.setName} placeholder="Activity name" />
                                              </div>
                                            </div>

                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Activity Description:</label>
                                              <div className="col-sm-10">
                                                <textarea className="form-control" onChange={this.setDesc} placeholder="description here" />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Cover image here</label>
                                              <div className="col-sm-10">
                                                                      <DropzoneComponent config={componentConfig}
                                                                          eventHandlers={eventHandlers}
                                                                          djsConfig={djsConfig} />
                                              </div>
                                            </div>

                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Province</label>
                                              <div className="col-sm-10">
                                              <select onChange={this.setCity} className="form-control">
                                                {
                                                  city.map((value , index) => {
                                                    return(
                                                        <option key={index} value={value}>{value}</option>
                                                    )
                                                  })
                                                }
                                              </select>
                                              </div>
                                            </div>

                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Location :</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control" onChange={this.setLocation} placeholder="location here"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <div className="col-sm-offset-2 col-sm-2">
                                                <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.create}>Create Activity</button>
                                              </div>
                                            </div>
                                          </form>
                                        }
                                        {
                                          this.state.step == 2 &&
                                          <h1>Step {this.state.step}</h1>
                                        }
                                        {
                                          this.state.step == 3 &&
                                          <h1>Step {this.state.step}</h1>
                                        }
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
export default CreateActivity;
