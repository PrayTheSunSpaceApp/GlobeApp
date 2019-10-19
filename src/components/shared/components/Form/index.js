import React from "react";

import styles from "./Form.module.scss";

export const FormTitle = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export const FormLayout = ({ children }) => {
  return (
    <form onSumbit={e => e.preventDefault()} className={styles.container}>
      {children}
    </form>
  );
};

export const Field = ({ label, ...props }) => {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.fieldLabel}>{label}</label>
      <input className={styles.field} {...props} />
    </div>
  );
};

export const SubmitButton = ({ children, ...props }) => {
  return (
    <button className={styles.submit} type="submit" {...props}>
      {children}
    </button>
  );
};
