import React, { useState } from 'react';
import FormEditCharacters from './formEditCharacters';
import styles from './content.module.scss';

const Content = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className={styles.formContainer}>
        {!isSubmitted ? (
          <FormEditCharacters submitForm={submitForm} />
        ) : (
          <div className={styles.formSave}>
            <h1 >Record has been saved!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;