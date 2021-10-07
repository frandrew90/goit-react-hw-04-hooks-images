import React, { useState, useEffect } from 'react';
import Searchbar from './searchbar/Searchbar';
import { getPhoto } from '../services/ApiServices';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import Button from './button/Button';
import Loader from './loader/Loader';

const App = () => {
  const [find, setFind] = useState('');
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!find) {
      return;
    }

    setGallery([]);
    makeGallery();

    // eslint-disable-next-line
  }, [find]);

  const makeGallery = () => {
    setIsLoading(true);

    getPhoto(find, page)
      .then(({ hits, total }) => {
        setGallery([...gallery, ...hits]);
        setPage(page + 1);
        setTotalItems(total);

        if (page !== 1) {
          scroll();
        }
        if (hits.length === 0) {
          alert('There are no pictures');
        }
      })
      .catch(error => alert(error.message))
      .finally(() => setIsLoading(false));
  };

  const onFormSubmit = find => {
    setGallery([]);
    setFind(find);
    setPage(1);
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const showBtnLoadMore = () => {
    return Math.ceil(totalItems / 12) !== page - 1;
  };

  const onPictureOpen = largeImage => {
    setLargeImageURL(largeImage);
    toggleModal();
  };

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />

      {gallery.length !== 0 && (
        <ImageGallery gallery={gallery} onPictureOpen={onPictureOpen} />
      )}
      {showModal && <Modal onClose={toggleModal} largeImage={largeImageURL} />}
      {isLoading && <Loader />}
      {showBtnLoadMore() && totalItems !== 0 && (
        <Button getPhoto={makeGallery} />
      )}
    </>
  );
};

export default App;
