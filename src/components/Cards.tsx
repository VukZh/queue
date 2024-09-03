import { CardItem } from './index.ts';
import styles from './Cards.module.css';
import { useQueue } from '../hooks/useQueue.tsx';

const Cards = () => {
  const { queue } = useQueue();

  return (
    <div className={styles.cardsWrapper}>
      {queue.length > 0 ? (
        queue.map((item, index) => (
          <CardItem key={index} id={item.id} color={item.color} />
        ))
      ) : (
        <div className={styles.empty}>No cards in queue</div>
      )}
    </div>
  );
};

export default Cards;
