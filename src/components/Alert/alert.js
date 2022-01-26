import React from 'react'
import PropTypes from 'prop-types'
import { getRandomColor } from '@bit/joshk.jotils.get-random-color'
import { Label } from '@bit/bit.base-ui.elements.label'
import styles from './alert.module.css'

export const Alert = ({ text, color, ...rest }) => {
  return (
    <Label color={color} className={styles.alert} {...rest}>
      {text}
    </Label>
  )
}

Alert.propTypes = {
  /**
   * text to be shown!
   */
  text: PropTypes.string.isRequired,
  /**
   * background color!
   */
  color: PropTypes.string,
}

Alert.defaultProps = {
  text: 'Alert',
  color: getRandomColor(),
}
