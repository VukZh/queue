import { useTypedDispatch, useTypedSelector } from '../store/store.ts';
import { addCard, removeCard } from '../store/queueSlice.ts';
import { useCallback } from 'react';

const useQueue = () => {
  const dispatch = useTypedDispatch();
  const { queue } = useTypedSelector((state) => state.queue);

  const handleAddCardToQueue = useCallback(
    (id: string, color: string) => {
      dispatch(addCard({ id, color }));
    },
    [dispatch],
  );

  const handleRemoveCardFromQueue = useCallback(() => {
    dispatch(removeCard());
  }, [dispatch]);

  return {
    queue,
    handleAddCardToQueue,
    handleRemoveCardFromQueue,
  };
};

export { useQueue };
