import React, { useState, useEffect } from 'react';
import Searchbar from './searchbar/Searchbar';
import { getPhoto } from '../services/ApiServices';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import Button from './button/Button';
import Loader from './loader/Loader';

const initialState = {
  find: '',
  gallery: [],
  page: 1,
  total: 0,
  largeImageURL: {},
  showModal: false,
  isLoading: false,
};

const App = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!state.find) {
      return;
    }

    setState(prevState => ({
      ...prevState,
      gallery: [],
    }));
    makeGallery();

    // eslint-disable-next-line
  }, [state.find]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.find !== state.find) {
  //     setState({
  //       gallery: [],
  //     });
  //     makeGallery();
  //     return;
  //   }
  // }

  const makeGallery = () => {
    const { find, page } = state;
    setState(prevState => ({ ...prevState, isLoading: true }));

    getPhoto(find, page)
      .then(({ hits, total }) => {
        // console.log('hit', hits);
        setState(prevState => ({
          ...prevState,
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
          total,
        }));
        if (page !== 1) {
          scroll();
        }
        // console.log('state', state.gallery);
        if (total === 0) {
          alert('There are no pictures');
        }
      })
      .catch(error => alert(error.message))
      .finally(() =>
        setState(prevState => ({ ...prevState, isLoading: false })),
      );
  };

  const onFormSubmit = find => {
    setState(prevState => ({ ...prevState, find, page: 1 }));
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const toggleModal = () => {
    setState(prev => ({ ...prev, showModal: !prev.showModal }));
  };

  const showBtnLoadMore = () => {
    return Math.ceil(state.total / 12) !== state.page - 1;
  };

  const onPictureOpen = largeImage => {
    setState(prevState => ({ ...prevState, largeImageURL: largeImage }));
    toggleModal();
  };

  const { gallery, showModal, largeImageURL, isLoading, total } = state;

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />

      {/* {console.log('render', gallery)} */}
      {gallery.length !== 0 && (
        <ImageGallery gallery={gallery} onPictureOpen={onPictureOpen} />
      )}
      {showModal && <Modal onClose={toggleModal} largeImage={largeImageURL} />}
      {isLoading && <Loader />}
      {showBtnLoadMore() && total !== 0 && <Button getPhoto={makeGallery} />}
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     find: '',
//     gallery: [],
//     page: 1,
//     total: 0,
//     largeImageURL: {},
//     showModal: false,
//     isLoading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.find !== state.find) {
//       setState({
//         gallery: [],
//       });
//       makeGallery();
//       return;
//     }
//   }

//   makeGallery = () => {
//     const { find, page } = state;
//     setState({ isLoading: true });

//     getPhoto(find, page)
//       .then(({ hits, total }) => {
//         // console.log('hit', hits);
//         setState(prevState => ({
//           gallery: [...prevState.gallery, ...hits],
//           page: prevState.page + 1,
//           total,
//         }));
//         if (page !== 1) {
//           scroll();
//         }
//         // console.log('state', state.gallery);
//         if (total === 0) {
//           alert('There are no pictures');
//         }
//       })
//       .catch(error => alert(error.message))
//       .finally(() => setState({ isLoading: false }));
//   };

//   onFormSubmit = find => {
//     setState({ find, page: 1 });
//   };

//   scroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   toggleModal = () => {
//     setState(prev => ({
//       showModal: !prev.showModal,
//     }));
//   };

//   showBtnLoadMore = () => {
//     return Math.ceil(state.total / 12) !== state.page - 1;
//   };

//   onPictureOpen = largeImage => {
//     setState({ largeImageURL: largeImage });
//     toggleModal();
//   };

//   render() {
//     const { gallery, showModal, largeImageURL, isLoading, total } = state;

//     return (
//       <>
//         <Searchbar onSubmit={onFormSubmit} />

//         {/* {console.log('render', gallery)} */}
//         {gallery.length !== 0 && (
//           <ImageGallery gallery={gallery} onPictureOpen={onPictureOpen} />
//         )}
//         {showModal && (
//           <Modal onClose={toggleModal} largeImage={largeImageURL} />
//         )}
//         {isLoading && <Loader />}
//         {showBtnLoadMore() && total !== 0 && (
//           <Button getPhoto={makeGallery} />
//         )}
//       </>
//     );
//   }
// }

// export default App;
