import React from 'react';
import styled from 'styled-components';

const BannerImg = styled.img`
  width: 390px;
  height: 196px;
  object-fit: cover; // This will make sure the aspect ratio of the image is preserved
`;

function FoodBanner({ src, alt }) {
  return (
    <div>
      <BannerImg src={src} alt={alt} />
      
    </div>
  );
}

export default FoodBanner;