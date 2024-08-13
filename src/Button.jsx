import React, { useEffect } from 'react'
import PropTypes  from 'prop-types'

function Button({type="submit",children,isDisabled=false}) {
  return (
    <button type={type} disabled={isDisabled}>
      {children}
    </button>
  )
}

Button.propTypes={
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
}


export default Button
