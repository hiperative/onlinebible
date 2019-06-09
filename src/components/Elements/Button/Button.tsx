import React, { FunctionComponent } from 'react'

import { Button as ButtonElement } from './Button.styled'

const Button: FunctionComponent = ({ children }): React.ReactElement => {
  return <ButtonElement>{children}</ButtonElement>
}

export default Button
