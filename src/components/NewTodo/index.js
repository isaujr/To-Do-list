import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NewTodo = ({ onNewTodo }) => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const keyDown = (e) => {
    if (e.which === ENTER_KEY) {
      submit();
    } else if (e.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input
      type="text"
      className="new-todo"
      placeholder="What's need to be done?"
      value={value}
      onChange={handleChange}
      onKeyDown={keyDown}
    />
  );
};

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
