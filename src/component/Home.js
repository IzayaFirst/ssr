import React from 'react'
import Navbar from './NavBar'
import Header from './Header'
import Search from './Search'
import PackageHome from './PackageHome'
import Footer from './Footer'
class Home extends React.Component{
  render(){
    return(
      <div className="changeHeader">
      <div className="main-wrapper">
        <Navbar/>
        <Header/>
        <Search/>
        <PackageHome />
        <Footer />
        </div>
        </div>

    )
  }
}

export default Home
