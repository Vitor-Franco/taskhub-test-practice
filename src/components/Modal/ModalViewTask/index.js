import React from 'react';
import Modal from 'react-modal';

import { ModalCustomStyles } from '../styles';
import closeImg from '../../../assets/close.svg';

Modal.setAppElement('#root');

const ModalViewTask = ({ onCloseModal, isOpen, taskInfo }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <ModalCustomStyles>
        <button className="react-modal-close" onClick={onCloseModal}>
          <img src={closeImg} alt="Fechar Modal" />
        </button>
        <div>
          <span>Todo: </span>
          <h2>{taskInfo.name}</h2>
          <span>Delivery Date: </span>
          <h2>{taskInfo.deliveryDate}</h2>
          {taskInfo.conclusionDate && (
            <>
              <span>Conclusion Date: </span>
              <h2>{taskInfo.conclusionDate}</h2>
            </>
          )}
          <button onClick={onCloseModal} className="submit">
            Ok!
          </button>
        </div>
      </ModalCustomStyles>
    </Modal>
  );
};

export default ModalViewTask;
