import { useTypedDispatch, useTypedSelector } from '../store/store.ts';
import {
  addCard,
  removeCard,
  setIsDeleteCard,
  setIsAddCard,
  reset,
} from '../store/queueSlice.ts';
import { useCallback } from 'react';

const useQueue = () => {
  const dispatch = useTypedDispatch();
  const { queue, isDeleteNewCard, isAddNewCard } = useTypedSelector(
    (state) => state.queue,
  );

  const handleAddCardToQueue = useCallback(
    (id: string, color: string) => {
      dispatch(addCard({ id, color }));
    },
    [dispatch],
  );

  const handleRemoveCardFromQueue = useCallback(() => {
    dispatch(removeCard());
  }, [dispatch]);

  const handleSetIsDelete = useCallback(
    (isDelete: boolean) => {
      dispatch(setIsDeleteCard(isDelete));
    },
    [dispatch],
  );

  const handleSetIsAdd = useCallback(
    (isAdd: boolean) => {
      dispatch(setIsAddCard(isAdd));
    },
    [dispatch],
  );

  const handleReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return {
    queue,
    isDeleteNewCard,
    isAddNewCard,
    handleAddCardToQueue,
    handleRemoveCardFromQueue,
    handleSetIsDelete,
    handleSetIsAdd,
    handleReset,
  };
};

export { useQueue };
