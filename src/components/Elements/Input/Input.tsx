import React from 'react';

import { noop } from '../../../utils';
import { Input as InputElement } from './Input.styled';

export enum InputType {
  Text = 'text',
  Password = 'password',
  Submit = 'submit',
  Color = 'color',
  Email = 'email',
  Number = 'number',
  Search = 'search',
  Hidden = 'hidden',
  Url = 'url',
}

export type InputValue = string | string[] | number;

export interface ReponseValue {
  name: string;
  value: InputValue;
}

interface InputProps {
  name: string;
  value?: InputValue;
  placeholder?: string;
  type?: InputType;
  isRequired?: boolean;
  isDisabled?: boolean;
  onChange?: (value: InputValue) => void;
  onBlur?: (value: InputValue) => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  name,
  type,
  value,
  placeholder,
  isRequired,
  isDisabled,
  onChange,
  onBlur,
}): React.ReactElement => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onBlur(event.target.value);
  };
  return (
    <InputElement
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      placeholder={placeholder}
      required={isRequired}
      disabled={isDisabled}
    />
  );
};

Input.defaultProps = {
  isDisabled: false,
  isRequired: false,
  onBlur: noop,
  onChange: noop,
  placeholder: '',
  type: InputType.Email,
  value: '',
};

export default Input;
