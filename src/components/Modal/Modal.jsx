import css from './Modal.module.css';

import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ modalOpen, children }) => {

  useEffect(() => {
    const handleEscape = ({ code }) => {
      code === `Escape` && modalOpen();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  });

  const handleOverlay = event => {
    event.target === event.currentTarget && modalOpen();
  };

  return (
    <div className={css.modalOverlay} onClick={handleOverlay}>
      <div className={css.modal}>
        <button
          type="button"
          className={css.modalCrossBtn}
          onClick={() => modalOpen(false)}
        >
          <AiOutlineClose />
        </button>
        
        {children}
      </div>
    </div>
  );
};

export default Modal;
