import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Modal from './modal.js';
import { useToggle } from './useToggle.js';

// most of this code lifted from 
//react-sliding-modal-with-rtg-gsap-and-portals
//by ostgals on codesandbox

const duration = 250;

const ModalWithTransitionStyles = styled(Modal)`
  &.modal-transition-enter {
    transform: translateX(-100%);
  }
  &.modal-transition-enter-active {
    transition: transform ${duration}ms;
    transform: translateX(0);
  }
  &.modal-transition-exit {
    transform: translateX(0);
  }
  &.modal-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateX(-100%);
  }
`;




// function modalForm(props){  


//   return(



// )};

const SlidingModal = ({ props }) => {
    let formData,setFormData;
    [formData, setFormData] = useState({})

  function changer(e){
    // setFormState({...formState , e.target})
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  function doit(e){
    e.preventDefault()
    console.log(formData)
  }
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <>
      <button type="button" className="slidebutton" onClick={toggleOpen}>
        Add >
      </button>
      <CSSTransition
        in={isOpen}
        className="modal-transition"
        classNames="modal-transition"
        unmountOnExit
        timeout={duration}
      >
        <ModalWithTransitionStyles
          title="new idea?"
          open={isOpen}
          onClose={toggleOpen}
          onSave={toggleOpen}
        >
          <form onSubmit={(e) => doit(e)}>
  <input type="text" name="newPrompt" className="textInput" onChange={(e) => changer(e)}/>
  <br/>
  <button className="sendit">submit </button>
</form>
        </ModalWithTransitionStyles>
      </CSSTransition>
    </>
  );
};

export default SlidingModal;
