import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.84);
  height: 100%;
  width: 25%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 50vw;

  background: blue;
  max-height: 80vh;
  z-index: 999999;
  overflow: scroll;
`;

const ModalHeader = styled.div`
  display: flex;
  background: green;
  font-size: 0.6875rem;
  line-height: 1.2;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  height: 3rem;
`;

const ModalTitle = styled.h2`
  width: 100%;
  margin: 0;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 3.5;
  color: white;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  cursor: pointer;
`;

const Modal = ({ showCloseIcon, onClose, title, children, className }) => {
  const closeIcon = showCloseIcon ? (
    <IconContainer onClick={onClose}>X</IconContainer>
  ) : (
    // hold open space for centered title
    <IconContainer />
  );

  const modalMarkup = (
    <ModalBackground className={className}>
      <ModalWrapper>
        <ModalHeader>
          {closeIcon}
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        {children}
      </ModalWrapper>
    </ModalBackground>
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};

Modal.propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node.isRequired,
  /**
   * Close handler for modal button
   */
  onClose: PropTypes.func,
  /**
   * Title text to show in header
   */
  title: PropTypes.string.isRequired,
  /**
   * Whether to show a close icon
   */
  showCloseIcon: PropTypes.bool,
};

Modal.defaultProps = {
  onClose: null,
  showCloseIcon: true,
};

export default Modal;
