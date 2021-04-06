import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import ModalCreateTask from '../../components/Modal/ModalCreateTask';
import TableTodo from '../../components/Table';

import { ContainerCommon } from '../../styles/common';
import { ContainerTodo } from './styles';
import { RiAddLine } from 'react-icons/ri';

function Todo() {
  const [modalIsNewListItem, setModalIsNewListItem] = useState(false);

  const toggleModalCreateTask = useCallback(
    () => setModalIsNewListItem(!modalIsNewListItem),
    [modalIsNewListItem]
  );

  return (
    <>
      <Header />
      <ContainerCommon>
        <ModalCreateTask
          isOpen={modalIsNewListItem}
          onCloseModal={toggleModalCreateTask}
        />

        <ContainerTodo>
          <div className="features">
            <h2>Todo List.</h2>
            <button type="button" onClick={toggleModalCreateTask}>
              <span>
                <RiAddLine />
                Create
              </span>
            </button>
          </div>

          <TableTodo />
        </ContainerTodo>
      </ContainerCommon>
    </>
  );
}

export default Todo;
