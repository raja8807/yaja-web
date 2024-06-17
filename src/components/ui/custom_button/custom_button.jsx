import React from "react";
import styles from "./custom_button.module.scss";

const CustomButton = ({ variant = 1, children, onClick = () => {} }) => {
  return (
    <button
      className={`${styles.customButton} ${styles[`v${variant}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
