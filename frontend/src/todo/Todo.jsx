import React from 'react';

import Header from '../template/Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos'

export default prop => (
    <div>
        <Header name="Todo" small="Cadastro" />
        <TodoForm />
        <TodoList />
    </div>
)