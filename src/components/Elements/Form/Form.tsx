import React, { FunctionComponent } from 'react';

import { Form as FormElement } from './Form.styled';
import { noop } from '../../../utils';

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
  onSubmit: noop,
};

export default Form;
