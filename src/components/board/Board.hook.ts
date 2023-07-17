import { useState } from "react";

export const useBoard = () => {
  const [cardList, setCardList] = useState([
    {
      id: "1",
      title: "New Task",
    },
    {
      id: "2",
      title: "New Task",
    },
    {
      id: "3",
      title: "New Task",
    },
    {
      id: "4",
      title: "New Task",
    },
    {
      id: "5",
      title: "New Task",
    },
  ]);

  const createCard = () => {
    setCardList((list) => [
      ...list,
      { id: crypto.randomUUID(), title: "New Task" },
    ]);
  };

  const updateCard = (sourceId: string, targetId: string) => {
    const copyCardList = [...cardList];
    const targetIndex = copyCardList.findIndex(({ id }) => id === targetId);
    const sourceIndex = copyCardList.findIndex(({ id }) => id === sourceId);
    const target = copyCardList[targetIndex];
    const source = copyCardList[sourceIndex];

    copyCardList[targetIndex] = source;
    copyCardList[sourceIndex] = target;

    setCardList(() => copyCardList);
  };

  const deleteCard = (id: string) => {
    setCardList((list) => list.filter((card) => card.id !== id));
  };

  return {
    cardList,
    createCard,
    updateCard,
    deleteCard,
  };
};
