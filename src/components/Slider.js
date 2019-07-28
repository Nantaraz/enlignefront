import React, { Component } from "react";
//import './Slider.css';
import { Animation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";
import im from './images.jpeg';
import im1 from './images1.jpeg';
import im2 from './images2.jpeg';
import pizza from './pizza.jpeg'

class Slider extends Component {
  render() {
    return (
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img id="slider" className="d-block w-100 image" src={im} alt="First slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive"> <h3 className="h3-responsive">Nous voulons une application web qui permette à des particuliers de s’inscrire aux ateliers
que nous proposons </h3>    </h3>
              
              </Animation>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"Nos cibles sont les jeunes actifs entre 25 - 35 ans. Des personnes qui veulent apprendre à
cuisiner afin de manger correctement." </h3>
                <p>Le meilleurs site pour apprendre à cuisinier</p>
                </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            
              <img id="slider" className="d-block w-100 image" src={im1} alt="Second slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive"> <h3 className="h3-responsive">Nous voulons une application web qui permette à des particuliers de s’inscrire aux ateliers
que nous proposons </h3>   </h3>
               
              </Animation>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"Nos cibles sont les jeunes actifs entre 25 - 35 ans. Des personnes qui veulent apprendre à
cuisiner afin de manger correctement." </h3>
                <p>Le meilleurs site pour apprendre à cuisinier</p>
                </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img id="slider" className="d-block w-100 image" src={im2}  width="700px" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">Nous voulons une application web qui permette à des particuliers de s’inscrire aux ateliers
que nous proposons </h3>      
                </Animation>
                <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"Nos cibles sont les jeunes actifs entre 25 - 35 ans. Des personnes qui veulent apprendre à
cuisiner afin de manger correctement." </h3>
                <p>Le meilleurs site pour apprendre à cuisinier</p>
                </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img id="slider" className="d-block w-100 image" src={pizza} alt="Burnedforest" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="2s">
                <h3 className="h3-responsive"> <h3 className="h3-responsive">Nous voulons une application web qui permette à des particuliers de s’inscrire aux ateliers
que nous proposons </h3>    </h3>
        
              </Animation>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"Nos cibles sont les jeunes actifs entre 25 - 35 ans. Des personnes qui veulent apprendre à
cuisiner afin de manger correctement." </h3>
                <p>Le meilleurs site pour apprendre à cuisinier</p>
                </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    
    );
  }
}

export default Slider;