import React, { useContext } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import styles from './content.module.scss';
import { GlobalContext } from "../../models/global-provider";

const FormEditCharacter = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  let { state } = useContext(GlobalContext);

  let charData = [
    {
      name: "Elesis Sieghart",
      jobs: ["Knight", "Spearman", "Sword Master", "Savior"],
      desc: "First character",
    },
    {
      name: "Lire Eryuell",
      jobs: ["Archer", "Crossbowman", "Arch Ranger", "Nova"],
      desc: "Second character",
    },
  ];

  return (

    <div >
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.formInputs}>
          <label className={styles.formLabel}>Character</label>
          <input
            className={styles.formInput}
            type='text'
            name='character'
            placeholder='Character name'
            // value={values.character}
            value={charData[state.char].jobs[0]}
            onChange={handleChange}
          />
          {errors.character && <p>{errors.character}</p>}
        </div>
        <div className={styles.formInputs}>
          <label className={styles.formLabel}>Level</label>
          <input
            className={styles.formInput}
            type='text'
            name='level'
            placeholder='0'
            value={values.level}
            onChange={handleChange}
          />
          {errors.level && <p>{errors.level}</p>}
        </div>
        <div className={styles.formInputs}>
          <label className={styles.formLabel}>Promotion</label>
          <input
            className={styles.formInput}
            type='text'
            name='promotion'
            placeholder='0'
            value={values.promotion}
            onChange={handleChange}
          />
          {errors.promotion && <p>{errors.promotion}</p>}
        </div>
        <div className={styles.formInputs}>
          <label className={styles.formLabel}>Win</label>
          <input
            className={styles.formInput}
            type='text'
            name='win'
            placeholder='0'
            value={values.win}
            onChange={handleChange}
          />
          {errors.win && <p>{errors.win}</p>}
        </div>
        <div className={styles.formInputs}>
          <label className={styles.formLabel}>Lose</label>
          <input
            className={styles.formInput}
            type='text'
            name='lose'
            placeholder='0'
            value={values.lose}
            onChange={handleChange}
          />
          {errors.lose && <p>{errors.lose}</p>}
        </div>
        <button className={styles.formInputBtn} type='submit'>
          Save
        </button>
        {/* <span className={styles.formInputLogin}>
          Already have an account? Login <a href='#'>here</a>
        </span> */}
      </form>
    </div>
  );
};

export default FormEditCharacter;