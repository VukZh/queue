import { CardItem } from './index.ts';
import styles from './Cards.module.css';
import { useQueue } from '../hooks/useQueue.tsx';
import { useEffect, useLayoutEffect, useState } from 'react';
import { getId, getRandomColor } from '../helpers';

const delay = 1000;

const Cards = () => {
  const {
    queue,
    isDeleteNewCard,
    handleRemoveCardFromQueue,
    handleSetIsDelete,
    isAddNewCard,
    handleAddCardToQueue,
    handleSetIsAdd,
  } = useQueue();
  const [addingIndex, setAddingIndex] = useState<string>('');

  useEffect(() => {
    if (isDeleteNewCard && queue.length > 0) {
      setTimeout(() => {
        handleRemoveCardFromQueue();
        handleSetIsDelete(false);
      }, delay);
    }
  }, [isDeleteNewCard]);

  useLayoutEffect(() => {
    if (isAddNewCard) {
      const newId = getId();
      const newColor = getRandomColor();
      handleAddCardToQueue(newId, newColor);
      setAddingIndex(newId);
      setTimeout(() => {
        handleSetIsAdd(false);
        setAddingIndex(null);
      }, delay);
    }
  }, [isAddNewCard]);

  return (
    <div className={styles.cardsWrapper}>
      {queue.length > 0 ? (
        queue.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.cardWrapper} ${addingIndex === item.id ? styles.adding : ''} ${
              isDeleteNewCard && index === queue.length - 1
                ? styles.removing
                : ''
            }`}
            style={{ left: `${index * (20 + 1)}vw` }}>
            <CardItem
              id={item.id}
              color={item.color}
              className={`${styles.card}`}
            />
          </div>
        ))
      ) : (
        <div className={styles.empty}>No cards in queue</div>
      )}
    </div>
  );
};

export default Cards;
