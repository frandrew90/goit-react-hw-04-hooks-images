import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ gallery, onPictureOpen }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(hit => (
        <ImageGalleryItem
          key={hit.id}
          image={hit.webformatURL}
          largeImg={hit.largeImageURL}
          onPictureOpen={onPictureOpen}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onPictureOpen: PropTypes.func.isRequired,
};
