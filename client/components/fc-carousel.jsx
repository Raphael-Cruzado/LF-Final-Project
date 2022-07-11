import React from 'react';
import {
  CDBCarousel,
  CDBCarouselItem,
  CDBCarouselInner,
  CDBView,
  CDBContainer
} from 'cdbreact';

export default function FlashCardCarousel() {
  return (
  <CDBContainer>
    <CDBContainer>
      <CDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        slide
      >
        <CDBCarouselInner>
          <CDBCarouselItem itemId="1">
            <CDBView>
              <img className="d-block w-100" src="https://imgur.com/oPU7JbX" alt="First slide" />
            </CDBView>
          </CDBCarouselItem>
          <CDBCarouselItem itemId="2">
            <CDBView>
              <img className="d-block w-100" src="https://imgur.com/EgVSItY" alt="Second slide" />
            </CDBView>
          </CDBCarouselItem>
          <CDBCarouselItem itemId="3">
            <CDBView>
              <img className="d-block w-100" src="https://imgur.com/c1aFo29" alt="Third slide" />
            </CDBView>
          </CDBCarouselItem>
        </CDBCarouselInner>
      </CDBCarousel>
    </CDBContainer>
  </CDBContainer>
  );
}
