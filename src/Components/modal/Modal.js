import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modal = document.querySelector('#modal');

const Modal = ({ onClose, largeImage }) => {
  const onEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  });

  return createPortal(
    <div className="Overlay" onClick={onBackdrop}>
      <div className="Modal">
        <img src={largeImage} alt="#" />
      </div>
    </div>,
    modal,
  );
};

export default Modal;

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
