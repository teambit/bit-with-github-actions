import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './title.module.css'

export const Title = ({ text, size }) => {
  return <h1 className={classNames(styles.title, styles[size])}>{text}</h1>
}

Title.propTypes = {
  /**
   * text in the title
   */
  text: PropTypes.string,
  /**
   * font-size of the title
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Title.defaultProps = {
  text: 'My Title',
  size: 'medium',
}
