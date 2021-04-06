import React, { useCallback, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectTodoById } from '../../store/TodoList/TodoList.selectors';
import { DeleteTodo, toggleTodo } from '../../store/TodoList/TodoList.action';
import ModalEditTask from '../../components/Modal/ModalEditTask';
import ModalViewTask from '../../components/Modal/ModalViewTask';

import {
  RiCheckFill,
  RiDeleteBin5Fill,
  RiEditLine,
  RiZoomInLine,
} from 'react-icons/ri';
import { ListItem } from './styles';
import { getSession } from '../../store/Session/Session.selectors';

const TodoList = ({ id }) => {
  const [isEditedTask, setIsEditedTask] = useState(false);
  const [isViewTask, setIsViewTask] = useState(false);
  const getTodoListById = useSelector(
    (state) => selectTodoById(state, id),
    shallowEqual
  );
  const { name, deliveryDate, conclusionDate, completed } = getTodoListById;

  const toggleModalEditTasks = useCallback(
    () => setIsEditedTask(!isEditedTask),
    [isEditedTask]
  );

  const toggleModalViewTasks = useCallback(() => setIsViewTask(!isViewTask), [
    isViewTask,
  ]);

  const dispatch = useDispatch();

  const session = useSelector((state) => getSession(state));

  const onDelete = useCallback(() => {
    if (!window.confirm('Are you sure you want to delete this Task?')) return;
    return dispatch(DeleteTodo(id));
  }, [dispatch, id]);

  const onToggle = useCallback(() => {
    if (completed) return;
    if (!window.confirm('Are you sure you want to conclude this Task?')) return;

    return dispatch(toggleTodo(id));
  }, [dispatch, id, completed]);

  return (
    <>
      <ListItem key={id}>
        <td className={`checkboxInput ${completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            value={completed}
            defaultChecked={completed}
            onChange={onToggle}
          />
          <span className="checkmark"></span>
        </td>
        <td className="infoUser">
          <h3>{name}</h3>
          <span>{session.email}</span>
        </td>
        <td>{deliveryDate}</td>
        <td>{conclusionDate}</td>

        <td className="actionsInLi">
          <button type="button" onClick={toggleModalEditTasks}>
            <RiEditLine />
            <span>Edit</span>
          </button>

          <button type="button" onClick={onDelete}>
            <RiDeleteBin5Fill />
            <span>Delete</span>
          </button>

          <button type="button" onClick={toggleModalViewTasks}>
            <RiZoomInLine />
            <span>View</span>
          </button>

          {!completed && (
            <button type="button" onClick={onToggle}>
              <RiCheckFill />
              <span>Complete</span>
            </button>
          )}
        </td>
      </ListItem>

      <ModalEditTask
        isOpen={isEditedTask}
        onCloseModal={toggleModalEditTasks}
        taskInfo={getTodoListById}
      />

      <ModalViewTask
        isOpen={isViewTask}
        onCloseModal={toggleModalViewTasks}
        taskInfo={getTodoListById}
      />
    </>
  );
};

export default TodoList;
