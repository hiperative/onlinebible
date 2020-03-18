import React, { FunctionComponent } from 'react';
import styled from 'styled-components'

export const FormElement = styled.form`
  position: static;
  box-sizing: border-box;
`

export type FormMethod = 'GET' | 'POST';

interface FormProps {
  name: string;
  method?: FormMethod;
  action?: string;
  target?: string;
  onSubmit?: (event: React.SyntheticEvent) => void;
}

const Form: FunctionComponent<FormProps> = ({
  name,
  action,
  method,
  target,
  children,
  onSubmit,
}): React.ReactElement => {
  return (
    <FormElement name={name} method={method} action={action} target={target} onSubmit={onSubmit}>
      {children}
    </FormElement>
  );
};

Form.defaultProps = {
  name: '',
  onSubmit: () => undefined,
};

export default Form;
