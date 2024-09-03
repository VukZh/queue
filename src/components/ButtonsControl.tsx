import styles from './ButtonsControl.module.css';

const ButtonsControl = () => {
  return (
    <div className={styles.buttonsWrapper}>
      <button className={`${styles.button} ${styles.buttonAdd}`}>
        Add Card
      </button>
      <button className={`${styles.button} ${styles.buttonRemove}`}>
        Remove Card
      </button>
    </div>
  );
};

export default ButtonsControl;
