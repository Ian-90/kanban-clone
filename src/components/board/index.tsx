import { PlusIcon } from "@heroicons/react/24/solid";
import Card from "../card";
import { useState } from "react";

type Props = {
  title: string;
};

const Board = ({ title }: Props) => {
  const [cardList, setCardList] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ]);

  const updateCard = (sourceId: number, targetId: number) => {
    const copyCardList = [...cardList];
    const targetIndex = copyCardList.findIndex(({ id }) => id === targetId);
    const sourceIndex = copyCardList.findIndex(({ id }) => id === sourceId);
    const target = copyCardList[targetIndex];
    const source = copyCardList[sourceIndex];

    copyCardList[targetIndex] = source;
    copyCardList[sourceIndex] = target;

    setCardList(() => copyCardList);
  };

  return (
    <article className="w-80 px-6 py-4 rounded-lg bg-gray-200 flex flex-col gap-y-5">
      {/* {console.log("...", cardList)} */}
      <header>
        <h3 className="text-lg font-semibold">{title}</h3>
      </header>
      <section className="flex flex-col gap-y-3">
        {cardList.map(({ id }) => (
          <Card key={`card_${id}`} id={id} onCardHandler={updateCard} />
        ))}
      </section>
      <footer>
        <button className="inline-flex items-center gap-x-2">
          <PlusIcon className="w-5 h-5" />
          <span className="font-medium">Add a card</span>
        </button>
      </footer>
    </article>
  );
};

export default Board;
