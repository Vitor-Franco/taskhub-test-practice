import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

import { InputField, LabelField, ContainerFields } from './Input.styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <ContainerFields>
      <LabelField htmlFor={rest.id}>{rest.placeholder}</LabelField>
      <InputField className={error ? 'error' : ''} ref={inputRef} {...rest} />
      {error && <span>{error}</span>}
    </ContainerFields>
  );
}
