interface CardItemProps {
  id: string;
  color: string;
  className?: string;
}

const CardItem = ({ id, color, className }: CardItemProps) => {
  return (
    <div className={`${className}`} style={{ backgroundColor: color }}>
      <p>{id}</p>
    </div>
  );
};

export default CardItem;
