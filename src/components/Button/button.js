import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

export const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  /**
   * text in the button
   */
  text: PropTypes.string.isRequired,
  /**
   * on click event function
   */
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  text: 'Click',
}
