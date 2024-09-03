import { useTypedDispatch, useTypedSelector } from '../store/store.ts';
import { addCard, removeCard, setDeleteCard } from '../store/queueSlice.ts';
import { useCallback } from 'react';

const useQueue = () => {
  const dispatch = useTypedDispatch();
  const { queue, deleteCard } = useTypedSelector((state) => state.queue);

  const handleAddCardToQueue = useCallback(
    (id: string, color: string) => {
      dispatch(addCard({ id, color }));
    },
    [dispatch],
  );

  const handleRemoveCardFromQueue = useCallback(() => {
    dispatch(removeCard());
  }, [dispatch]);

  const handleSetDelete = useCallback(
    (isDelete: boolean) => {
      dispatch(setDeleteCard(isDelete));
    },
    [dispatch],
  );

  return {
    queue,
    deleteCard,
    handleAddCardToQueue,
    handleRemoveCardFromQueue,
    handleSetDelete,
  };
};

export { useQueue };
