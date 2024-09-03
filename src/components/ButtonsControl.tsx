import styles from './ButtonsControl.module.css';
import { useQueue } from '../hooks/useQueue.tsx';
import getId from '../helpers/getId.ts';
import getRandomColor from '../helpers/getRandomColor.ts';

const ButtonsControl = () => {
  const { queue, handleAddCardToQueue, handleRemoveCardFromQueue } = useQueue();
  const handleAddCard = () => {
    console.log('Add Card');
    handleAddCardToQueue(getId(), getRandomColor());
  };

  const handleRemoveCard = () => {
    console.log('Remove Card');
    handleRemoveCardFromQueue();
  };

  console.log('queue', queue);

  return (
    <div className={styles.buttonsWrapper}>
      <button
        className={`${styles.button} ${styles.buttonAdd}`}
        onClick={handleAddCard}>
        Add Card
      </button>
      <button
        className={`${styles.button} ${styles.buttonRemove}`}
        onClick={handleRemoveCard}>
        Remove Card
      </button>
    </div>
  );
};

export default ButtonsControl;
