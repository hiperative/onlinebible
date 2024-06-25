import { ReactNode } from 'react'
import styled from 'styled-components'

import media from '../../../styles/functions/media'

export const FormElement = styled.form`
  position: static;
  box-sizing: border-box;

  ${media.tablet`
    display: flex;
    align-items: center;
  `};
`

export type FormMethod = 'GET' | 'POST'

interface FormProps {
  name: string
  method?: FormMethod
  action?: string
  target?: string
  onSubmit?: (event: React.SyntheticEvent) => void
  children: ReactNode
}

const Form = ({
  name,
  action,
  method,
  target,
  children,
  onSubmit,
}: FormProps): React.ReactElement => {
  return (
    <FormElement
      name={name}
      method={method}
      action={action}
      target={target}
      onSubmit={onSubmit}
    >
      {children}
    </FormElement>
  )
}

Form.defaultProps = {
  name: '',
  onSubmit: () => undefined,
}

export default Form
