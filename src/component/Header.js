import React from 'react'

class Header extends React.Component{
    render(){
      return(
        <section className="bannercontainer">
      <div className="fullscreenbanner-container">
        <div className="fullscreenbanner">
          <ul>
            <li >
              <img src="img/home/slider/slider-01.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat"/>
              <div className="slider-caption container">
                <div className="tp-caption rs-caption-1 sft start"
                  data-hoffset="0"
                  data-y="270"
                  data-speed="800"
                  data-start="1000"
                  data-easing="Back.easeInOut"
                  data-endspeed="300">
                  Discover The Most Amazing
                  <span>Travel Template</span>
                </div>
                <div className="tp-caption rs-caption-2 sft"
                  data-hoffset="0"
                  data-y="400"
                  data-speed="1000"
                  data-start="1500"
                  data-easing="Power4.easeOut"
                  data-endspeed="300"
                  data-endeasing="Power1.easeIn"
                  data-captionhidden="off">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex consequat.
                </div>
                <div className="tp-caption rs-caption-3 sft"
                  data-hoffset="0"
                  data-y="485"
                  data-speed="800"
                  data-start="2000"
                  data-easing="Power4.easeOut"
                  data-endspeed="300"
                  data-endeasing="Power1.easeIn"
                  data-captionhidden="off">
                  <span className="page-scroll"><a target="_blank" href="http://goo.gl/lXpsqr" className="btn buttonCustomPrimary">Buy Now</a></span>
                </div>
              </div>
            </li>

            <li data-transition="parallaxvertical" data-slotamount="5" data-masterspeed="1000" data-title="Slide 2">
              <img src="img/home/slider/slider-04.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat"/>
              <div className="slider-caption container">
                <div className="tp-caption rs-caption-1 sft start text-center"
                  data-hoffset="0"
                  data-x="center"
                  data-y="270"
                  data-speed="800"
                  data-start="1000"
                  data-easing="Back.easeInOut"
                  data-endspeed="300">
                  Go Where You Wanna Go
                  <span>24/7 Quick Support</span>
                </div>
                <div className="tp-caption rs-caption-2 sft text-center"
                  data-hoffset="0"
                  data-x="center"
                  data-y="400"
                  data-speed="1000"
                  data-start="1500"
                  data-easing="Power4.easeOut"
                  data-endspeed="300"
                  data-endeasing="Power1.easeIn"
                  data-captionhidden="off">
                  Maecenas et leo nec nunc rutrum tempor. Mauris pharetra porttitor odio eget convallis. Praesent facilisis mattis pretium. Aliquam sagittis efficitur risus, interdum euismod urna. Pellentesque vel augue augue.
                </div>
                <div className="tp-caption rs-caption-3 sft text-center"
                  data-hoffset="0"
                  data-x="center"
                  data-y="485"
                  data-speed="800"
                  data-start="2000"
                  data-easing="Power4.easeOut"
                  data-endspeed="300"
                  data-endeasing="Power1.easeIn"
                  data-captionhidden="off">
                  <span className="page-scroll"><a target="_blank" href="http://goo.gl/lXpsqr" className="btn buttonCustomPrimary">View Delails</a></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
      )
    }
}
export default Header
