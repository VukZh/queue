import styles from './ButtonsControl.module.css';
import { useQueue } from '../hooks/useQueue.tsx';

const ButtonsControl = () => {
  const { queue, handleReset, handleSetIsDelete, handleSetIsAdd } = useQueue();
  const handleAddCard = () => {
    handleSetIsAdd(true);
  };

  const handleRemoveCard = () => {
    handleSetIsDelete(true);
  };

  const isEmpty = !queue.length;

  return (
    <div className={styles.buttonsWrapper}>
      <button
        className={`${styles.button} ${styles.buttonAdd}`}
        onClick={handleAddCard}>
        Add Card
      </button>
      <button
        className={`${styles.button} ${styles.buttonRemove} ${isEmpty && styles.buttonDisabled}`}
        onClick={handleRemoveCard}
        disabled={isEmpty}>
        Remove Card
      </button>
      <button
        className={`${styles.button} ${styles.buttonReset} ${isEmpty && styles.buttonDisabled}`}
        onClick={handleReset}
        disabled={isEmpty}>
        Reset
      </button>
    </div>
  );
};

export default ButtonsControl;
