import styles from './CardItem.module.css';

interface CardItemProps {
  id: string;
  color: string;
}

const CardItem = ({ id, color }: CardItemProps) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <p>{id}</p>
    </div>
  );
};

export default CardItem;
