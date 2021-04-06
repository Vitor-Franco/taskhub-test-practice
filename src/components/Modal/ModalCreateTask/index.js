import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSession } from '../../../store/Session/Session.selectors';
import { TodoAdded } from '../../../store/TodoList/TodoList.action';

import { isBefore, parseISO } from 'date-fns';
import { ModalCustomStyles } from '../styles';
import Modal from 'react-modal';
import * as yup from 'yup';

import closeImg from '../../../assets/close.svg';

Modal.setAppElement('#root');

const ModalCreateTask = ({ onCloseModal, isOpen }) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => getSession(state), shallowEqual);

  const [name, setName] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [conclusionDate, setConclusionDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [name, deliveryDate, isOpen]);

  async function handleCreateNewListItemTask(e) {
    e.preventDefault();

    try {
      const schema = yup.object().shape({
        deliveryDate: yup.string().required('The delivery date is required!'),
        name: yup.string().required('The name of task is required!'),
        conclusionDate: yup.string(),
      });

      const taskData = {
        name,
        deliveryDate,
        conclusionDate,
        user_id: session.id,
      };

      await schema.validate(taskData);

      if (isBefore(parseISO(conclusionDate), parseISO(deliveryDate))) {
        throw new Error(
          'Conclusion date must be greater than the delivery date'
        );
      }

      dispatch(TodoAdded(taskData));

      setName('');
      setDeliveryDate('');
      setConclusionDate('');
      onCloseModal();
    } catch (err) {
      return setError(err.message);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <ModalCustomStyles>
        <h2>Create a new Task</h2>
        <button className="react-modal-close" onClick={onCloseModal}>
          <img src={closeImg} alt="Fechar Modal" />
        </button>
        <form onSubmit={handleCreateNewListItemTask}>
          {error && <h2 className="error-message">{error}</h2>}
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="delivery_date">Delivery Date</label>
            <input
              id="delivery_date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              name="delivery_date"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="conclusion_date">Conclusion Date</label>
            <input
              id="conclusion_date"
              value={conclusionDate}
              onChange={(e) => setConclusionDate(e.target.value)}
              name="conclusion_date"
              type="date"
            />
          </div>
          <button className="submit" type="submit">
            Create
          </button>
        </form>
      </ModalCustomStyles>
    </Modal>
  );
};

export default ModalCreateTask;
