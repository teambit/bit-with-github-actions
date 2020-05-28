import React from "react";
import { getRandomColor } from "@bit/joshk.jotils.get-random-color";
import { Label } from "@bit/bit.base-ui.elements.label";
import styles from './alert.module.css';

export const Alert = ({ text, color = getRandomColor() }) => {
  return <Label color={color} className={styles.alert}>{text}</Label>;
};