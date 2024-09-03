import { CardItem } from './index.ts';
import styles from './Cards.module.css';
import { useQueue } from '../hooks/useQueue.tsx';
import { useEffect } from 'react';

const delay = 1000;

const Cards = () => {
  const { queue, deleteCard, handleRemoveCardFromQueue, handleSetDelete } =
    useQueue();

  useEffect(() => {
    if (deleteCard && queue.length > 0) {
      setTimeout(() => {
        handleRemoveCardFromQueue();
        handleSetDelete(false);
      }, delay);
    }
  }, [deleteCard, queue.length]);

  return (
    <div className={styles.cardsWrapper}>
      {queue.length > 0 ? (
        queue.map((item, index) => (
          <CardItem
            key={item.id}
            id={item.id}
            color={item.color}
            className={`${styles.card} ${deleteCard && index === queue.length - 1 ? styles.removing : ''}`}
          />
        ))
      ) : (
        <div className={styles.empty}>No cards in queue</div>
      )}
    </div>
  );
};

export default Cards;
