import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getSession } from '../../store/Session/Session.selectors';
import { selectAllTodosByIds } from '../../store/TodoList/TodoList.selectors';

import { Table } from './styles';
import TodoList from '../TodoList';

const TableTodo = () => {
  const session = useSelector((state) => getSession(state), shallowEqual);

  const todoIds = useSelector(
    (state) => selectAllTodosByIds(state, session.id),
    shallowEqual
  );

  return (
    <Table>
      <thead>
        <tr>
          <th className="checkboxInput"></th>
          <th>TODO</th>
          <th>DELIVERY DATE</th>
          <th>CONCLUSION DATE</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todoIds.map((todoId) => {
          return <TodoList key={todoId.id} id={todoId.id} />;
        })}
      </tbody>
    </Table>
  );
};

export default TableTodo;
