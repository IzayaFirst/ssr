import React from 'react'

class Search extends React.Component{
  render(){
    const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]

    return(
      <section className="darkSection">
            <div className="container">
              <div className="row gridResize">
                <div className="col-sm-3 col-xs-12">
                  <div className="sectionTitleDouble">
                    <p>Find</p>
                    <h2>your <span>Activity</span></h2>
                  </div>
                </div>
                <div className="col-sm-9 col-xs-12">
                  <div className="row">
                    <div className="col-sm-4 col-xs-12">
                      <div className="searchTour">
                    Province
                        <select name="guiest_id2" id="guiest_id2" className="select-drop">
                          {
                            city.map((value , index) => {
                              return(
                                  <option key={value.toString()+index.toString()} value={value}>{value}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>
                      <div className="col-sm-4 col-xs-12">
                       <div className="searchTour">
                        Price
                         <select name="guiest_id3" id="guiest_id3" className="select-drop">
                           <option value="0"> {'<'} 200 THB</option>
                           <option value="1">200 - 500 THB</option>
                           <option value="2">500 - 900 THB</option>
                           <option value="3"> {'>'} 1000 THB</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-sm-2 col-xs-12">
                     <br/>
                       <a className="btn btn-block buttonCustomPrimary">Search</a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
  }
}

export default Search
