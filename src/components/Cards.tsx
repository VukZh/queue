import { CardItem } from './index.ts';
import styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={styles.cardsWrapper}>
      <CardItem id="1" color="green" />
      <CardItem id="2" color="orange" />
    </div>
  );
};

export default Cards;
